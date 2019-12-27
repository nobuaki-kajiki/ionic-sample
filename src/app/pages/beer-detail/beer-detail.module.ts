import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BeerDetailPageRoutingModule } from './beer-detail-routing.module';

import { BeerDetailPage } from './beer-detail.page';
import { AppCommonModule } from '../../modules/app-common/app-common.module';

@NgModule({
  imports: [
    AppCommonModule,
    CommonModule,
    FormsModule,
    IonicModule,
    BeerDetailPageRoutingModule
  ],
  declarations: [BeerDetailPage]
})
export class BeerDetailPageModule {}
