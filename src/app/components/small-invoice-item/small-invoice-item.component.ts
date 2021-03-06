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
  }

  getFormattedDate(): string {
    return new Date(this.invoice.paymentDue).toLocaleDateString()
  }

  getRoundedNum(total: number) {
    return Math.round((total + Number.EPSILON) * 100) / 100
  }

  getNumWithCommas(num: any) {
    const num2 = this.getRoundedNum(Number(num))
    return Number(num2).toLocaleString()
  }

}
