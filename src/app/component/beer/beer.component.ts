import { Component, OnInit, Input } from '@angular/core';
import { Beer } from 'src/app/models/beer';

@Component({
  selector: 'app-beer',
  templateUrl: './beer.component.html',
  styleUrls: ['./beer.component.scss'],
})
export class BeerComponent implements OnInit {
  @Input()
  beer: Beer;

  constructor() { }

  ngOnInit() {}

  onNice(){
    this.beer.isNice = !this.beer.isNice;
  }

}
