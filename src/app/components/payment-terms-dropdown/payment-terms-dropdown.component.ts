import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment-terms-dropdown',
  templateUrl: './payment-terms-dropdown.component.html',
  styleUrls: ['./payment-terms-dropdown.component.css']
})
export class PaymentTermsDropdownComponent implements OnInit {

  paymentTermOptions: string[] = ['Net 1 Day', 'Net 7 Days', 'Net 14 Days', 'Net 30 Days']
  selectedPaymentTerm: string = this.paymentTermOptions[0]
  open: boolean = false

  constructor() { }

  ngOnInit(): void {
  }

  toggleDropdown(): void {
    this.open = !this.open
  }

  changePaymentTerm(newPaymentTerm: string): void {
    this.selectedPaymentTerm = newPaymentTerm
    this.open = false
  }

}
