import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuyingComponent } from './buying/buying.component';
import { BuyingAddComponent } from './buying-add/buying-add.component';
import { BuyingUpdateComponent } from './buying-update/buying-update.component';

const routes: Routes = [
  {path:"",component:BuyingComponent},
  {path:"add-buying",component:BuyingAddComponent},
  {path:"update-buying/:id",component:BuyingUpdateComponent}
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BuyingRoutingModule { }
