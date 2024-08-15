import { Component, EventEmitter, Input, Output } from '@angular/core';
import { InvoiceService } from '../invoice.service';

@Component({
  selector: 'app-invoice-delete',
  templateUrl: './invoice-delete.component.html',
  styleUrls: ['./invoice-delete.component.css']
})
export class InvoiceDeleteComponent {
  @Input() invoice: any;
  @Output() closed = new EventEmitter<boolean>();
  @Output() saved = new EventEmitter<boolean>();

  constructor(private invoiceService: InvoiceService) {}

  ngOnInit(): void {}

  actionClose(): void {
    this.closed.emit(true);
  }

  deleteConfirm(): void {
    this.invoiceService.deleteInvoice(this.invoice.id).subscribe(
      res => {
        console.log("deleteInvoice", res);
        this.saved.emit(true);
      },
      error => {
        console.error("Error deleting invoice:", error);
      }
    );
  }
}
