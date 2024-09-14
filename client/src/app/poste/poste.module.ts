import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PosteRoutingModule } from './poste-routing.module';
import { PosteListComponent } from './poste/poste-list/poste-list.component';

import { UpdatePosteComponent } from './poste/update-poste/update-poste.component';
import { DeletePostComponent } from './poste/delete-post/delete-post.component';
import { ClarityModule, ClrDatagrid, ClrDatagridModule } from '@clr/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PosteComponent } from './poste/poste.component';
import { AddPosteComponent } from './poste/add-poste/add-poste.component';


@NgModule({
  declarations: [
    PosteListComponent,
   
    UpdatePosteComponent,
    DeletePostComponent,
    PosteComponent,
    AddPosteComponent
  ],
  imports: [
    CommonModule,
    PosteRoutingModule,ClarityModule,FormsModule,ClrDatagridModule,ReactiveFormsModule,
  ]
})
export class PosteModule { }
