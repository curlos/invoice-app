import { DeleteModalService } from './../../services/delete-modal.service';
import { Component, Input, OnInit } from '@angular/core';
import { InvoiceService } from '../../services/invoice.service';
import { ActivatedRoute } from '@angular/router';
import { Invoice } from '../../types/Invoice';
import { Router } from '@angular/router';
import { SidenavService } from '../../services/sidenav.service';
import * as moment from 'moment';

@Component({
  selector: 'app-invoice-item',
  templateUrl: './invoice-item.component.html',
  styleUrls: ['./invoice-item.component.css']
})
export class InvoiceItemComponent implements OnInit {
  id: string = ''
  invoice!: Invoice
  loading: boolean = true

  constructor(private route: ActivatedRoute, private invoiceService: InvoiceService, private router: Router, private sidenavService: SidenavService, private deleteModalService: DeleteModalService) { }

  ngOnInit(): void {
    window.scrollTo(0, 0)
    this.id = this.route.snapshot.paramMap.get('id') || ''
    this.invoiceService.getInvoice(this.id).subscribe((invoice) => {
      this.invoice = invoice
      this.loading = false

      console.log(invoice)
    })
  }

  getOpenDeleteModal(): boolean {
    return this.deleteModalService.getOpen()
  }

  openSidenav(): void {
    this.sidenavService.openSidenav()
  }

  openDeleteModal(): void {
    this.deleteModalService.openModal()
  }

  getFormattedDate(dateString: string): string {
    return moment(dateString).format('LL')
  }

  getRoundedNum(total: number) {
    return Math.round((total + Number.EPSILON) * 100) / 100
  }

  getNumWithCommas(num: any) {
    const num2 = this.getRoundedNum(Number(num))
    return Number(num2).toLocaleString()
  }

  markAsPaid() {
    this.invoice.status = 'paid'

    this.invoiceService.editInvoice(this.invoice).subscribe()
  }
}
