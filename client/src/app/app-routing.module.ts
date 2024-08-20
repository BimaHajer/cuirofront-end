import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { AuthGuard } from './auth/auth.guard';


const routes: Routes = [
  { path: '', redirectTo: '/auth/login', pathMatch: 'full' }, // Redirection vers /auth/login par défaut
  { path: 'auth/login', component: LoginComponent },
  {
    path:'products',
    loadChildren: () => import('./products/products.module').then(m => m.ProductsModule)
   },
   {
    path:'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
   },
   {
    path:'finance',
    loadChildren: () => import('./finance/finance.module').then(m => m.FinanceModule)
   },
   {
    path:'users',
    loadChildren: () => import('./users/users.module').then(m => m.UsersModule)
   },
   {
    path:'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
   },
   {
    path:'customer',
    loadChildren: () => import('./customer/customer.module').then(m => m.CustomerModule)
   },
   {
    path:'commande',
    loadChildren: () => import('./commande/commande.module').then(m => m.CommandeModule)
   },
   {
    path:'devis',
    loadChildren: () => import('./devis/devis.module').then(m => m.DevisModule)
   },
   { path:'provider',loadChildren:()=>import('./founisseur/founisseur.module').then(m=>m.FounisseurModule)},
   { path:'buying',loadChildren:()=>import('./buying/buying.module').then(m=>m.BuyingModule)}
   
  
   
   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
