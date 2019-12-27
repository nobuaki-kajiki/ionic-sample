import { Injectable } from '@angular/core';
import { Beer } from '../models/beer';

@Injectable({
  providedIn: 'root'
})
export class BeerService {
  beers: Beer[] = [
    new Beer('1', 'malts', '最高だ', false)
  , new Beer('2', 'kirin', '幸せだ', false)
  , new Beer('3', 'dry', '花金だ', false)
  ];

  constructor() { }

  getBeers(): Beer[]{
    return this.beers;
  }
  getBeer(id:string): Beer{
    return this.beers.find(b =>b.id ===id);
  }
}
