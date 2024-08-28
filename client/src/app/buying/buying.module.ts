import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BuyingRoutingModule } from './buying-routing.module';
import { BuyingComponent } from './buying/buying.component';
import { BuyingAddComponent } from './buying-add/buying-add.component';
import { BuyingUpdateComponent } from './buying-update/buying-update.component';
import { BuyingDeleteComponent } from './buying-delete/buying-delete.component';
import { ClarityModule, ClrDatagridModule } from '@clr/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DetailBuyingComponent } from './detail-buying/detail-buying.component';


@NgModule({
  declarations: [
    BuyingComponent,
    BuyingAddComponent,
    BuyingUpdateComponent,
    BuyingDeleteComponent,
    DetailBuyingComponent
  ],
  imports: [
    CommonModule, ClarityModule, ClrDatagridModule,FormsModule, ReactiveFormsModule,
    BuyingRoutingModule
  ]
})
export class BuyingModule { }
