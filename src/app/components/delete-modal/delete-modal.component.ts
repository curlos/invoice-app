import { Router } from '@angular/router';
import { Invoice } from './../../types/Invoice';
import { InvoiceService } from './../../services/invoice.service';
import { DeleteModalService } from './../../services/delete-modal.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-delete-modal',
  templateUrl: './delete-modal.component.html',
  styleUrls: ['./delete-modal.component.css']
})
export class DeleteModalComponent implements OnInit {
  @Input() invoice!: Invoice
  constructor(private deleteModalService: DeleteModalService, private invoiceService: InvoiceService, private router: Router) { }

  ngOnInit(): void {
  }

  stopEventPropagation(event: Event) {
    event.stopPropagation()
  }

  closeDeleteModal(): void {
    this.deleteModalService.closeModal()
  }

  confirmDeleteInvoice(): void {
    console.log('deleting')
    this.invoiceService.deleteInvoice(this.invoice).subscribe(() => {
      console.log(this.invoice)
      this.router.navigate(['/'])
    })
  }

}
