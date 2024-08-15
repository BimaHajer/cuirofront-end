import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomerService } from 'src/app/customer/customer.service';
import { Customer } from 'src/app/customer/customer/customer';
import { InvoiceService } from '../invoice.service';
import { Invoice } from '../invoice';

@Component({
  selector: 'app-add-invoice',
  templateUrl: './invoice-add.component.html',
  styleUrls: ['./invoice-add.component.css']
})
export class AddInvoiceComponent implements OnInit {
  customerForm: FormGroup;
  show: boolean = false;
  name: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private customerService: CustomerService,
    private invoiceService: InvoiceService
  ) {
    this.customerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      address: ['', Validators.required],
      telephone: ['', [Validators.required, Validators.pattern('^\\+?[0-9]{10,12}$')]],
      picture: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

  submit(): void {
    if (this.customerForm.valid) {
      const customerData: Customer = this.customerForm.value;
      this.customerService.addCustomer(customerData).subscribe(
        (data) => {
          this.name = `${customerData.firstName} ${customerData.lastName}`;
          this.show = true;
        },
        (error) => {
          console.error("Error adding customer:", error);
        }
      );
    }
  }

  reset(): void {
    this.customerForm.reset();
    this.show = false;
  }
}
