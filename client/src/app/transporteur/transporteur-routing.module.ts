import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpdateComponent } from './transporteur/update/update.component';
import { DeleteComponent } from './transporteur/delete/delete.component';
import { AddComponent } from './transporteur/add/add.component';
import { ListComponent } from './transporteur/list/list.component';
import { AuthGuard } from '../auth/auth.guard';
import { TransporteurComponent } from './transporteur/transporteur.component';


const routes: Routes = [
  {path:'', component:TransporteurComponent , canActivate: [AuthGuard]},
  { path: 'transporteurs', component: ListComponent ,canActivate: [AuthGuard]},
  { path: 'add-transporteur', component: AddComponent, canActivate: [AuthGuard]},
  { path: 'update-transporteur/:id', component: UpdateComponent ,canActivate: [AuthGuard]},
  { path: 'delete-transporteur/:id', component: DeleteComponent ,canActivate: [AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransporteurRoutingModule { }
