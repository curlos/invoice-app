import { Component, Input, OnInit } from '@angular/core';
import { Invoice } from '../../types/Invoice';

@Component({
  selector: 'app-small-invoice-item',
  templateUrl: './small-invoice-item.component.html',
  styleUrls: ['./small-invoice-item.component.css']
})
export class SmallInvoiceItemComponent implements OnInit {
  @Input() invoice!: Invoice

  constructor() { }

  ngOnInit(): void {
    console.log(this.invoice)
  }

  getFormattedDate(): string {
    return new Date(this.invoice.paymentDue).toLocaleDateString()
  }

}
