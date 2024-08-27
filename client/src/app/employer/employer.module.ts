import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployerRoutingModule } from './employer-routing.module';
import { EmployerComponent } from './employer/employer.component';
import { ClarityModule, ClrStepperModule } from '@clr/angular';
import { ReactiveFormsModule } from '@angular/forms';
import { EmployerService } from './employer.service';
import { AddEmployerComponent } from './employer/add-employer/add-employer.component';
import { DeleteEmployerComponent } from './employer/delete-employer/delete-employer.component';
import { UpdateEmployerComponent } from './employer/update-employer/update-employer.component';


@NgModule({
  declarations: [
   EmployerComponent,
   AddEmployerComponent,
   DeleteEmployerComponent,
   UpdateEmployerComponent
   
  ],
  imports: [
    CommonModule,
    EmployerRoutingModule,
    ClarityModule,ClrStepperModule,ReactiveFormsModule,
  ],
  providers: [EmployerService]
})
export class EmployerModule { }
