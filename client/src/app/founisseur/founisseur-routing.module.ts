import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddFounisseurComponent } from './add-founisseur/add-founisseur.component';
import { ListFounisseurComponent } from './list-founisseur/list-founisseur.component';
import { UpdateFounisseurComponent } from './update-founisseur/update-founisseur.component';

const routes: Routes = [
  {
    path:"add-fournisseur", component:AddFounisseurComponent
  },
  {
    path:"", component:ListFounisseurComponent
  },
  {
    path:"update-fournisseur/:id", component:UpdateFounisseurComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FounisseurRoutingModule { }
