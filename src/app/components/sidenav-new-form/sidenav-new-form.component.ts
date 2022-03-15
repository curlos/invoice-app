import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { SidenavService } from '../../services/sidenav.service';
import { Address } from '../../types/address';
import { Item } from '../../types/item';


@Component({
  selector: 'app-sidenav-new-form',
  templateUrl: './sidenav-new-form.component.html',
  styleUrls: ['./sidenav-new-form.component.css']
}

) export class SidenavNewFormComponent implements OnInit {
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

  clientName: String = ''
  clientEmail: String = ''

  invoiceDate: Date = new Date()
  description: String = ''
  paymentTerms: String = ''
  items: Item[] = []
  paymentTermOptions: Object = {
    'Net 1 Day': 1,
    'Net 7 Days': 2,
    'Net 14 Days': 3,
    'Net 30 Days': 4
  }


  constructor(private sidenavService: SidenavService) {

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

  getTotal(): Number {
    return 1800.9
  }

  sendInvoice(): void {

    const newInvoice = {
      paymentDue: this.invoiceDate,
      description: this.description,
      paymentTerms: 1,
      status: 'draft',
      senderAddress: this.senderAddress,
      clientAddress: this.clientAddress,
      items: [],
      total: this.getTotal()
    }

    console.log(this.senderAddress)
  }
}