import { Component } from '@angular/core';
import { Beer } from '../models/beer';
import { BeerService } from '../services/beer.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  name = 'world';
  beers: Beer[];

  constructor(
    private beerService: BeerService
  ) {}

  ngOnInit(){
    this.beers = this.beerService.getBeers();
  }

}
