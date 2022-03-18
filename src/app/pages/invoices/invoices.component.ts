import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Invoice } from '../../types/Invoice';
import { SidenavService } from './../../services/sidenav.service';
import { InvoiceService } from './../../services/invoice.service';

@Component({
  selector: 'app-invoices',
  templateUrl: './invoices.component.html',
  styleUrls: ['./invoices.component.css']
})
export class InvoicesComponent implements OnInit {
  invoices: Invoice[] = []

  constructor(private invoiceService: InvoiceService, private sidenavService: SidenavService) { }

  ngOnInit(): void {
    window.scrollTo(0, 0)
    this.invoiceService.getInvoices().subscribe((invoices) => {
      this.invoices = invoices
      console.log(invoices)
    })
  }

  onNewInvoiceClick() {
    console.log('f')
    console.log(this.sidenavService.getOpen())
    this.sidenavService.openSidenav()
  }

}
