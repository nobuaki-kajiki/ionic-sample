import { Injectable } from '@angular/core';
import { Beer } from '../models/beer';

@Injectable({
  providedIn: 'root'
})
export class BeerService {
  beers: Beer[] = [
    new Beer('1', 'test', 'これはテストです', false)
  , new Beer('2', 'sample', 'これはテストです', false)
  , new Beer('3', 'テスト', 'これはテストです', false)
  ];

  constructor() { }

  getBeers(): Beer[]{
    return this.beers;
  }
  getBeer(id:string): Beer{
    return this.beers.find(b =>b.id ===id);
  }
}
