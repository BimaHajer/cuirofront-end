import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Invoice } from './invoice';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {
  private apiUrl = 'http://localhost:3000/';

  constructor(private http: HttpClient) { }

  getAllInvoice(): Observable<Invoice[]> {
    return this.http.get<Invoice[]>(`${this.apiUrl}invoice/invoice-list`);
  }

  addInvoice(invoice: Invoice): Observable<Invoice> {
    return this.http.post<Invoice>(`${this.apiUrl}invoice/create`, invoice);
  }

  editInvoiceById(id: number, invoice: Invoice): Observable<Invoice> {
    return this.http.patch<Invoice>(`${this.apiUrl}invoice/${id}`, invoice);
  }

  findInvoiceById(id: number): Observable<Invoice> {
    return this.http.get<Invoice>(`${this.apiUrl}invoice/${id}`);
  }

  deleteInvoice(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}invoice/${id}`);
  }
}
