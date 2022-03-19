import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs'
import { Invoice } from '../types/Invoice'

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})

export class InvoiceService {
  private apiUrl = 'http://localhost:8080/api/invoices'

  constructor(private http: HttpClient) { }

  getInvoices(): Observable<Invoice[]> {
    return this.http.get<Invoice[]>(this.apiUrl)
  }

  getInvoice(id: string): Observable<Invoice> {
    const url = `${this.apiUrl}/${id}`
    return this.http.get<Invoice>(url)
  }

  saveInvoice(invoice: Invoice): Observable<Invoice> {
    return this.http.post<Invoice>(this.apiUrl, invoice, httpOptions)
  }

  editInvoice(invoice: Invoice): Observable<Invoice> {
    const url = `${this.apiUrl}/${invoice.id}`
    return this.http.put<Invoice>(url, invoice, httpOptions)
  }

  deleteInvoice(invoice: Invoice): Observable<Invoice> {
    const url = `${this.apiUrl}/${invoice.id}`
    return this.http.delete<Invoice>(url)
  }
}
