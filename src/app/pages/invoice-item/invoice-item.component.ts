import { Component, OnInit } from '@angular/core';
import { InvoiceService } from '../../services/invoice.service';
import { ActivatedRoute } from '@angular/router';
import { Invoice } from '../../types/Invoice';

@Component({
  selector: 'app-invoice-item',
  templateUrl: './invoice-item.component.html',
  styleUrls: ['./invoice-item.component.css']
})
export class InvoiceItemComponent implements OnInit {
  id: string = ''
  invoice!: Invoice
  loading: boolean = true

  constructor(private route: ActivatedRoute, private invoiceService: InvoiceService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id') || ''
    this.invoiceService.getInvoice(this.id).subscribe((invoice) => {
      this.invoice = invoice
      this.loading = false

      console.log(invoice)
    })
  }

}
