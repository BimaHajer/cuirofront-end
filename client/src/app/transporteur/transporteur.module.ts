import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransporteurRoutingModule } from './transporteur-routing.module';
import { AddTransporteurComponent } from './add-transporteur/add-transporteur.component';
import { UpdateTransporteurComponent } from './update-transporteur/update-transporteur.component';
import { DeleteTransporteurComponent } from './delete-transporteur/delete-transporteur.component';
import { ListTransporteurComponent } from './list-transporteur/list-transporteur.component';


@NgModule({
  declarations: [
    AddTransporteurComponent,
    UpdateTransporteurComponent,
    DeleteTransporteurComponent,
    ListTransporteurComponent
  ],
  imports: [
    CommonModule,
    TransporteurRoutingModule,FormsModule, ReactiveFormsModule,
  ]
})
export class TransporteurModule { }
