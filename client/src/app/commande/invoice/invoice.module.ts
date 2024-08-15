import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ClarityModule } from '@clr/angular';

import { InvoiceRoutingModule } from './invoice-routing.module';
import { InvoiceListComponent } from './invoice-list/invoice-list.component';
import { AddInvoiceComponent } from './invoice-add/invoice-add.component';
import { InvoiceUpdateComponent } from './invoice-update/invoice-update.component';
import { InvoiceDeleteComponent } from './invoice-delete/invoice-delete.component';
import { InvoiceDetailComponent } from './invoice-detail/invoice-detail.component';
import { PrintInvoiceComponent } from './print-invoice/print-invoice.component';

@NgModule({
  declarations: [
    InvoiceListComponent,
    AddInvoiceComponent,
    InvoiceUpdateComponent,
    InvoiceDeleteComponent,
    InvoiceDetailComponent,
    PrintInvoiceComponent
  ],
  imports: [
    CommonModule,
    InvoiceRoutingModule,
    ReactiveFormsModule,
    ClarityModule
  ]
})
export class InvoiceModule { }
