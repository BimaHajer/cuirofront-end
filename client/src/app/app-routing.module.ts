import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { AuthGuard } from './auth/auth.guard';


const routes: Routes = [
  // { path: '', redirectTo: '/auth/login', pathMatch: 'full' }, // Redirection vers /auth/login par défaut
  // { path: 'auth/login',canActivate: [AuthGuard], component: LoginComponent },
  {
    path:'products',canActivate: [AuthGuard],
    loadChildren: () => import('./products/products.module').then(m => m.ProductsModule)
   },
   {
    path:'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
   },
   {
    path:'finance',canActivate: [AuthGuard],
    loadChildren: () => import('./finance/finance.module').then(m => m.FinanceModule)
   },
   {
    path:'users',canActivate: [AuthGuard],
    loadChildren: () => import('./users/users.module').then(m => m.UsersModule)
   },
   {
    path:'dashboard',canActivate: [AuthGuard],
    loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
   },
   {
    path:'customer',canActivate: [AuthGuard],
    loadChildren: () => import('./customer/customer.module').then(m => m.CustomerModule)
   },
   {
    path:'employer',canActivate: [AuthGuard],
    loadChildren: () => import('./employer/employer.module').then(m => m.EmployerModule)
   },
   {
    path:'commande',canActivate: [AuthGuard],
    loadChildren: () => import('./commande/commande.module').then(m => m.CommandeModule)
   },
   {
    path:'devis',canActivate: [AuthGuard],
    loadChildren: () => import('./devis/devis.module').then(m => m.DevisModule)
   }
   
   
  
   
   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
