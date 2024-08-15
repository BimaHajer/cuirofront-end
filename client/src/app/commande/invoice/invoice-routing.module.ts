import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InvoiceListComponent } from './invoice-list/invoice-list.component';
import { InvoiceDetailComponent } from './invoice-detail/invoice-detail.component';
import { AddInvoiceComponent } from './invoice-add/invoice-add.component';
import { InvoiceUpdateComponent } from './invoice-update/invoice-update.component';
import { InvoiceDeleteComponent } from './invoice-delete/invoice-delete.component';
import { PrintInvoiceComponent } from './print-invoice/print-invoice.component';

const routes: Routes = [
  { path: 'invoices', component: InvoiceListComponent },
  { path: 'invoices/add', component: AddInvoiceComponent },
  { path: 'invoices/edit/:id', component: InvoiceUpdateComponent },
  { path: 'invoices/delete/:id', component: InvoiceDeleteComponent },
  { path: 'invoices/detail/:id', component: InvoiceDetailComponent },
  { path: 'invoices/print/:id', component: PrintInvoiceComponent },
  { path: '', redirectTo: '/invoices', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InvoiceRoutingModule { }
