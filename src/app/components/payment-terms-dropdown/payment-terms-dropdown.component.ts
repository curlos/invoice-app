import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-payment-terms-dropdown',
  templateUrl: './payment-terms-dropdown.component.html',
  styleUrls: ['./payment-terms-dropdown.component.css']
})
export class PaymentTermsDropdownComponent implements OnInit {

  @Input() paymentTermOptions = {
    [String('Net 1 Day')]: 1, [String('Net 7 Days')]: 7, [String('Net 14 Days')]: 14, [String('Net 30 Days')]: 30
  }
  @Input() selectedPaymentTerm: string = 'Net 1 Day'
  @Output() paymentTermChange = new EventEmitter()
  open: boolean = false

  constructor() { }

  ngOnInit(): void {
  }

  toggleDropdown(): void {
    this.open = !this.open
  }

  getPaymentTermOptionKeys() {
    return Object.keys(this.paymentTermOptions)
  }

  changePaymentTerm(newPaymentTerm: string): void {
    this.selectedPaymentTerm = newPaymentTerm
    this.open = false
    this.paymentTermChange.emit({ event: event, paymentTerm: this.paymentTermOptions[newPaymentTerm] })
  }

}
