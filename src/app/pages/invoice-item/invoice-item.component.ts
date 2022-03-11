import { Invoice } from './../../types/Invoice';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-invoice-item',
  templateUrl: './invoice-item.component.html',
  styleUrls: ['./invoice-item.component.css']
})
export class InvoiceItemComponent implements OnInit {
  @Input() invoice!: Invoice

  constructor() { }

  ngOnInit(): void {
  }

}
