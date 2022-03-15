import { Component, Input, OnInit } from '@angular/core';
import { InvoiceService } from '../../services/invoice.service';
import { ActivatedRoute } from '@angular/router';
import { Invoice } from '../../types/Invoice';
import { Router } from '@angular/router';

@Component({
  selector: 'app-invoice-item',
  templateUrl: './invoice-item.component.html',
  styleUrls: ['./invoice-item.component.css']
})
export class InvoiceItemComponent implements OnInit {
  id: string = ''
  invoice!: Invoice
  loading: boolean = true

  constructor(private route: ActivatedRoute, private invoiceService: InvoiceService, private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id') || ''
    this.invoiceService.getInvoice(this.id).subscribe((invoice) => {
      this.invoice = invoice
      this.loading = false

      console.log(invoice)
    })
  }

  getRoundedNum(total: number) {
    return Math.round((total + Number.EPSILON) * 100) / 100
  }

  deleteInvoice(): void {
    console.log('deleting')
    this.invoiceService.deleteInvoice(this.invoice).subscribe(() => {
      console.log(this.invoice)
      this.router.navigate(['/'])
    })
  }
}
