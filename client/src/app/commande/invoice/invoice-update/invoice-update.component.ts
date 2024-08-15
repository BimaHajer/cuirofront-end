import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { InvoiceService } from '../invoice.service';
import { CustomerService } from 'src/app/customer/customer.service';
import { Invoice } from '../invoice';
import { Customer } from 'src/app/customer/customer/customer';

@Component({
  selector: 'app-invoice-update',
  templateUrl: './invoice-update.component.html',
  styleUrls: ['./invoice-update.component.css']
})
export class InvoiceUpdateComponent implements OnInit {
  invoiceForm: FormGroup;
  invoiceItems: any[] = [];
  selected: any[] = [];
  customer?: Customer;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private invoiceService: InvoiceService,
    private customerService: CustomerService
  ) {
    this.invoiceForm = this.fb.group({
      id: [{ value: '', disabled: true }],
      customerId: ['', Validators.required],
      date: ['', Validators.required],
      totalAmount: ['', [Validators.required, Validators.min(0)]],
      status: ['Paid', Validators.required],
      customerName: ['', Validators.required],
      customerEmail: ['', [Validators.required, Validators.email]],
      customerAddress: [''],
      customerPhone: ['']
    });
  }

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
      (invoice: Invoice) => {
        if (invoice) {
          this.invoiceForm.patchValue({
            id: invoice.id,
            customerId: invoice.customerId,
            date: invoice.date,
            totalAmount: invoice.totalAmount,
            status: invoice.status,
            customerName: invoice.customerName,
            customerEmail: invoice.customerEmail,
            customerAddress: invoice.customerAddress, // Assurez-vous que 'customerAddress' est correct
            customerPhone: invoice.customerPhone
          });
          this.invoiceItems = invoice.items || []; // Assurez-vous que `items` est défini dans l'objet `Invoice`
        } else {
          console.error('Invoice not found for ID:', id);
        }
      },
      (error) => {
        console.error('Error fetching invoice details:', error);
      }
    );
  }

  onSubmit(): void {
    if (this.invoiceForm.valid) {
      const updatedInvoice = this.invoiceForm.value;
      this.invoiceService.editInvoiceById(updatedInvoice.id, updatedInvoice).subscribe(
        () => {
          console.log('Invoice updated successfully');
          this.router.navigate(['/invoices']);
        },
        (error: any) => {
          console.error('Error updating invoice:', error);
        }
      );
    } else {
      console.error('Form is not valid');
    }
  }

  onCancel(): void {
    this.router.navigate(['/invoices']);
  }
}
