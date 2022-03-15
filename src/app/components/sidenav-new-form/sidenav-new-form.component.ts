import { Invoice } from './../../types/Invoice';
import { InvoiceService } from './../../services/invoice.service';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { SidenavService } from '../../services/sidenav.service';
import { Address } from '../../types/address';
import { Item } from '../../types/item';


@Component({
  selector: 'app-sidenav-new-form',
  templateUrl: './sidenav-new-form.component.html',
  styleUrls: ['./sidenav-new-form.component.css']
}

) export class SidenavNewFormComponent implements OnInit {
  @Input() invoices!: Invoice[]
  senderAddress: Address = {
    street: '',
    city: '',
    postCode: '',
    country: ''
  }

  clientAddress: Address = {
    street: '',
    city: '',
    postCode: '',
    country: ''
  }

  clientName: string = ''
  clientEmail: string = ''

  invoiceDate: string = new Date().toISOString()
  description: string = ''
  paymentTerms: string = ''
  items: Item[] = []
  total: Number = 0
  paymentTermOptions: Object = {
    'Net 1 Day': 1,
    'Net 7 Days': 2,
    'Net 14 Days': 3,
    'Net 30 Days': 4
  }


  constructor(private sidenavService: SidenavService, private invoiceService: InvoiceService) {

  }

  ngOnInit(): void {

  }

  getOpen() {
    return this.sidenavService.isOpen
  }

  closeSidenav(): void {
    this.sidenavService.closeSidenav()
  }

  onEvent(event: Event) {
    event.stopPropagation()
  }

  addNewItem() {
    this.items.push({
      name: '',
      quantity: 0,
      price: 0,
      total: 0
    })
  }

  changeItemQuantity(i: number, value: string) {
    console.log(value)
    this.items[i].quantity = Number(value)
    this.changeItemTotal(i)
  }

  changeItemPrice(i: number, value: string) {
    console.log(value)
    this.items[i].price = Number(value)
    this.changeItemTotal(i)
  }

  changeItemTotal(i: number): void {
    const unroundedTotal = Number(this.items[i].quantity) * Number(this.items[i].price)
    this.items[i].total = Math.round((unroundedTotal + Number.EPSILON) * 100) / 100
  }

  getTotal(): number {
    return this.items.map((item) => item.total).reduce((prev, curr) => prev + curr, 0)
  }

  saveInvoice(status: string): void {

    const newInvoice = {
      paymentDue: this.invoiceDate,
      description: this.description,
      paymentTerms: 1,
      status: status,
      senderAddress: this.senderAddress,
      clientAddress: this.clientAddress,
      items: this.items,
      total: this.getTotal(),
      clientName: this.clientName,
      clientEmail: this.clientEmail
    }

    this.invoiceService.saveInvoice(newInvoice).subscribe((invoice) => {
      console.log(invoice)
      this.invoices.push(invoice)
      this.closeSidenav()
    })
  }
}