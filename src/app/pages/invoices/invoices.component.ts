import { InvoiceService } from './../../services/invoice.service';
import { Component, OnInit } from '@angular/core';
import { Invoice } from '../../types/Invoice';

@Component({
  selector: 'app-invoices',
  templateUrl: './invoices.component.html',
  styleUrls: ['./invoices.component.css']
})
export class InvoicesComponent implements OnInit {

  invoices: Invoice[] = []

  constructor(private invoiceService: InvoiceService) { }

  ngOnInit(): void {
    this.invoiceService.getInvoices().subscribe((invoices) => {
      this.invoices = invoices
      console.log(invoices)
    })
  }

}
