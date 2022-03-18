import { Component, OnInit } from '@angular/core';
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
  filteredInvoices: Invoice[] = []
  filters: String[] = []
  filterOptions = {
    [String('paid')]: false,
    [String('pending')]: false,
    [String('draft')]: false
  }

  constructor(private invoiceService: InvoiceService, private sidenavService: SidenavService) {

  }

  ngOnInit(): void {
    window.scrollTo(0, 0)

    this.invoiceService.getInvoices().subscribe((invoices) => {
      this.invoices = invoices
      this.filterInvoices()
      console.log(invoices)
    })
  }

  getFilterOptions() {
    return this.filterOptions
  }

  getFilters() {
    return this.filters
  }

  onNewInvoiceClick() {
    console.log('f')
    console.log(this.sidenavService.getOpen())
    this.sidenavService.openSidenav()
  }

  getFilteredInvoices() {
    return this.filteredInvoices
  }

  filterInvoices() {
    console.log('filtering')
    if (this.filters.length !== 0) {
      this.filteredInvoices = this.invoices.filter((invoice) => this.filters.includes(invoice.status))
    } else {
      this.filteredInvoices = this.invoices
    }
  }

  editFilters(newFilter: any) {
    if (this.filters.includes(newFilter)) {
      this.filters = this.filters.filter((f) => f !== newFilter)
    } else {
      this.filters = [...this.filters, newFilter]
    }

    if (this.filters.length !== 0) {
      this.filteredInvoices = this.invoices.filter((invoice) => this.filters.includes(invoice.status))
    } else {
      this.filteredInvoices = this.invoices
    }

    this.filterInvoices()
  }

}
