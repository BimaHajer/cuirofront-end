import { Component, OnInit } from '@angular/core';
import { InvoiceService } from '../invoice.service';
import { Invoice } from '../invoice';
import { Router } from '@angular/router';

@Component({
  selector: 'app-invoice-list',
  templateUrl: './invoice-list.component.html',
  styleUrls: ['./invoice-list.component.css']
})
export class InvoiceListComponent implements OnInit {
  invoices: Invoice[] = [];
  selected: Invoice[] = [];

  constructor(
    private invoiceService: InvoiceService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadInvoices();
  }

  loadInvoices(): void {
    this.invoiceService.getAllInvoice().subscribe(
      (data: Invoice[]) => {
        this.invoices = data;
      },
      (error: any) => {
        console.error('Error loading invoices:', error);
      }
    );
  }

  viewInvoice(id: number): void {
    this.router.navigate([`/invoices/${id}`]);
  }

  deleteInvoice(id: number): void {
    if (confirm('Are you sure you want to delete this invoice?')) {
      this.invoiceService.deleteInvoice(id).subscribe(
        () => {
          this.loadInvoices(); 
        },
        (error: any) => {
          console.error('Error deleting invoice:', error);
        }
      );
    }
  }

  refreshInvoices(): void {
    this.loadInvoices();
  }
}
