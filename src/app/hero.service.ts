import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { MessageService } from './message.service';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  // URL to web api
  private heroesUrl = 'api/heroes';

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) {}

  /*
  Synchronous
  getHeroes(): Hero[] {
    return HEROES;
  }
  */

  // GET heroes from the server
  getHeroes(): Observable<Hero[]> {
    /*
    const heroes = of(HEROES);
    this.messageService.add('HeroService: fetched heroes');
    return heroes;
    */

    // This call is "is an observable of hero arrays"
    // Returns the hero arrays
    // Intercepts an Observable that failed, then passes the error to the error handling function (handleError)
    return this.http
      .get<Hero[]>(this.heroesUrl)
      .pipe(catchError(this.handleError<Hero[]>('getHeroes', [])));
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   *
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // Send the error to remote logging infrastructure
      // Instead log to concole
      console.error(error);

      // Better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.messae}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  getHero(id: number): Observable<Hero> {
    const hero = HEROES.find((h) => h.id === id)!;
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(hero);
  }

  /** Log a HeroService message with the MessageService */
  private log(messae: string): void {
    this.messageService.add(`HeroService: ${messae}`);
  }
}
