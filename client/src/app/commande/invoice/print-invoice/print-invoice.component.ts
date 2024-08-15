import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InvoiceService } from '../invoice.service';
import { CustomerService } from 'src/app/customer/customer.service';
import { Invoice } from '../invoice';
import { Customer } from 'src/app/customer/customer/customer';
@Component({
  selector: 'app-print-invoice',
  templateUrl: './print-invoice.component.html',
  styleUrls: ['./print-invoice.component.css']
})
export class PrintInvoiceComponent implements OnInit {
  invoice?: Invoice;
  customer?: Customer;

  constructor(
    private route: ActivatedRoute,
    private invoiceService: InvoiceService,
    private customerService: CustomerService
  ) {}

  ngOnInit(): void {
    const invoiceId = this.route.snapshot.paramMap.get('id');
    if (invoiceId) {
      this.getInvoiceDetails(parseInt(invoiceId, 10));
    }
  }

  getInvoiceDetails(id: number): void {
    this.invoiceService.findInvoiceById(id).subscribe(
      (invoice: Invoice) => {
        this.invoice = invoice;
        if (invoice.customerId !== undefined) {
          this.getCustomerDetails(invoice.customerId);
        }
      },
      (error) => {
        console.error('Error fetching invoice details:', error);
      }
    );
  }

  getCustomerDetails(customerId: number): void {
    this.customerService.findACustomerById(customerId).subscribe(
      (customer: Customer) => {
        this.customer = customer;
      },
      (error:any) => {
        console.error('Error fetching customer details:', error);
      }
    );
  }

  onPrint(): void {
    window.print();
  }
}
