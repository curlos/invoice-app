import { DeleteModalService } from './../../services/delete-modal.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-delete-modal',
  templateUrl: './delete-modal.component.html',
  styleUrls: ['./delete-modal.component.css']
})
export class DeleteModalComponent implements OnInit {
  @Input() deleteModalOpen !: boolean
  constructor(private deleteModalService: DeleteModalService) { }

  ngOnInit(): void {
  }

  closeDeleteModal(): void {
    this.deleteModalService.closeModal()
  }

}
