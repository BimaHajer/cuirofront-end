import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployerComponent } from './employer/employer.component';
import { AuthGuard } from '../auth/auth.guard';
import { AddEmployerComponent } from './employer/add-employer/add-employer.component';
import { UpdateEmployerComponent } from './employer/update-employer/update-employer.component';
import { DeleteEmployerComponent } from './employer/delete-employer/delete-employer.component';


const routes: Routes = [ {
  path:"", component:EmployerComponent,canActivate: [AuthGuard]
}, 
{
  path:"add-employer", component:AddEmployerComponent,canActivate: [AuthGuard]
},
{
  path:"update-employer/:id", component:UpdateEmployerComponent,canActivate: [AuthGuard]
},
{
  path:"delete-employer", component:DeleteEmployerComponent,canActivate: [AuthGuard]
},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployerRoutingModule { }
