import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { MessageService } from './message.service';

import { HttpClient, HttpHeaders } from '@angular/common/http';

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
    return this.http.get<Hero[]>(this.heroesUrl);
  }

  getHero(id: number): Observable<Hero> {
    const hero = HEROES.find((h) => h.id === id)!;
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(hero);
  }

  // Log a HeroService message with the MessageService
  private log(messae: string): void {
    this.messageService.add(`HeroService: ${messae}`);
  }
}
