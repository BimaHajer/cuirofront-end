import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth/auth.guard';
// import { AddPostComponent } from './add-post/add-post.component';
import { DeletePostComponent } from './poste/delete-post/delete-post.component';
import { PosteListComponent } from './poste/poste-list/poste-list.component';
import { UpdatePosteComponent } from './poste/update-poste/update-poste.component';
import { AddPosteComponent } from './poste/add-poste/add-poste.component';
import { PosteComponent } from './poste/poste.component';

const routes: Routes = [
  {
    path:"", component:PosteComponent,canActivate: [AuthGuard]
  },
  {
    path:"add-poste", component:AddPosteComponent,canActivate: [AuthGuard]
  },
  {
    path:"delete-poste", component:DeletePostComponent,canActivate: [AuthGuard]
  },
  {
    path:"poste-list", component:PosteListComponent,canActivate: [AuthGuard]
  },
  {
    path:"update-post/:id", component:UpdatePosteComponent,canActivate: [AuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PosteRoutingModule { 

}
