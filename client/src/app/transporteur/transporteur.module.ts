import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClarityModule } from '@clr/angular';
import { TransporteurRoutingModule } from './transporteur-routing.module';
import { ListComponent } from './transporteur/list/list.component';
import { AddComponent } from './transporteur/add/add.component';
import { UpdateComponent } from './transporteur/update/update.component';
import { DeleteComponent } from './transporteur/delete/delete.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TransporteurComponent } from './transporteur/transporteur.component';


@NgModule({
  declarations: [
    ListComponent,
    AddComponent,
    UpdateComponent,
    DeleteComponent,
    TransporteurComponent
  ],
  imports: [
    CommonModule,
    TransporteurRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    ClarityModule
  ]
})
export class TransporteurModule { }
