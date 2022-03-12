import { InvoiceService } from './../../services/invoice.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Invoice } from '../../types/Invoice';

@Component({
  selector: 'app-invoices',
  templateUrl: './invoices.component.html',
  styleUrls: ['./invoices.component.css']
})
export class InvoicesComponent implements OnInit {
  @Output() newInvoiceClick = new EventEmitter()
  invoices: Invoice[] = []

  constructor(private invoiceService: InvoiceService) { }

  ngOnInit(): void {
    this.invoiceService.getInvoices().subscribe((invoices) => {
      this.invoices = invoices
      console.log(invoices)
    })
  }

  onNewInvoiceClick() {
    console.log('hello bum')
    this.newInvoiceClick.emit()
  }

}
