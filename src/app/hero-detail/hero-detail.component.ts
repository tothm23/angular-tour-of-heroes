import { Component, Input } from '@angular/core';
import { Hero } from '../hero';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { HeroService } from '../hero.service';
@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css'],
})
export class HeroDetailComponent {
  @Input() hero?: Hero;

  constructor(
    // This component is interested in the route's parameters extracted from the URL
    private route: ActivatedRoute,

    // Gets hero data from the remote server
    private heroService: HeroService,

    // An Angular service for interacting with the browser
    private location: Location
  ) {}
}
