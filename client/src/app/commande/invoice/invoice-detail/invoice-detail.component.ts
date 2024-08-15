import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { InvoiceService } from '../invoice.service';
import { Invoice } from '../invoice';
import { Customer}from 'src/app/customer/customer/customer';
import { CustomerService } from 'src/app/customer/customer.service';

@Component({
  selector: 'app-invoice-detail',
  templateUrl: './invoice-detail.component.html',
  styleUrls: ['./invoice-detail.component.css']
})
export class InvoiceDetailComponent implements OnInit {
  invoice: Invoice | undefined;
  selected: any[] = []; 
  customer?: Customer; 
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private invoiceService: InvoiceService
  ) {}

  ngOnInit(): void {
    const invoiceId = this.route.snapshot.paramMap.get('id');
    if (invoiceId) {
      const parsedId = parseInt(invoiceId, 10);
      if (!isNaN(parsedId)) {
        this.getInvoiceDetails(parsedId);
      } else {
        console.error('Invalid invoice ID:', invoiceId);
      }
    } else {
      console.error('Invoice ID is not available in the route.');
    }
  }

  getInvoiceDetails(id: number): void {
    this.invoiceService.findInvoiceById(id).subscribe(
      (data: Invoice) => {
        if (data) {
          this.invoice = data;
        } else {
          console.error('Invoice not found for ID:', id);
        }
      },
      (error) => {
        console.error('Error fetching invoice details:', error);
      }
    );
  }

  editInvoice(): void {
    if (this.invoice && this.invoice.id) {
      this.router.navigate(['/invoices/edit', this.invoice.id]);
    } else {
      console.error('Invoice is not properly initialized.');
    }
  }

  deleteInvoice(): void {
    if (this.invoice && this.invoice.id && confirm('Are you sure you want to delete this invoice?')) {
      this.invoiceService.deleteInvoice(this.invoice.id).subscribe(
        (res) => {
          console.log('Invoice deleted successfully');
          this.router.navigate(['/invoices']);
        },
        (error) => {
          console.error('Error deleting invoice:', error);
        }
      );
    } else {
      console.error('Invoice is not properly initialized or user canceled the deletion.');
    }
  }
}
