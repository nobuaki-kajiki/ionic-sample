import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BeerComponent } from '../../component/beer/beer.component';
import { IonicModule } from '@ionic/angular';
import { HighlightDirective } from '../../directives/highlight.directive';
import { UpperPipe } from '../../pipes/upper.pipe';


@NgModule({
  declarations: [
    BeerComponent,
    HighlightDirective,
    UpperPipe
  ],
  imports: [
    CommonModule,
    IonicModule,
  ],
  exports: [
    BeerComponent,
    HighlightDirective,
    UpperPipe
  ]
})
export class AppCommonModule { }
