import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs'
import { Invoice } from '../types/Invoice'
import { environment } from '../../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})

export class InvoiceService {
  private apiUrl = environment.apiUrl + "/api/invoices"

  constructor(private http: HttpClient) { }

  getInvoices(): Observable<Invoice[]> {
    console.log('Getting')
    console.log(this.apiUrl)
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

  deleteInvoice(invoice: Invoice): Observable<String> {
    const url = `${this.apiUrl}/${invoice.id}`
    console.log(url)
    return this.http.delete<String>(url)
  }
}
