import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FounisseurRoutingModule } from './founisseur-routing.module';
import { AddFounisseurComponent } from './add-founisseur/add-founisseur.component';
import { UpdateFounisseurComponent } from './update-founisseur/update-founisseur.component';
import { DetailFounisseurComponent } from './detail-founisseur/detail-founisseur.component';
import { DeleteFounisseurComponent } from './delete-founisseur/delete-founisseur.component';
import { ListFounisseurComponent } from './list-founisseur/list-founisseur.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClarityModule } from '@clr/angular';
import { RouterLink } from '@angular/router';


@NgModule({
  declarations: [
    AddFounisseurComponent,
    UpdateFounisseurComponent,
    DetailFounisseurComponent,
    DeleteFounisseurComponent,
    ListFounisseurComponent
  ],
  imports: [
    CommonModule,ClarityModule,FormsModule, ReactiveFormsModule,
    FounisseurRoutingModule,RouterLink
  ]
})
export class FounisseurModule { }
