import { Observable, BehaviorSubject, Subject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DeleteModalService {
  isOpen: boolean = false

  modalVisibilityChange: Subject<boolean> = new Subject<boolean>()

  constructor() {
    this.modalVisibilityChange.subscribe((value) => {
      this.isOpen = value
    })
  }

  getOpen() {
    return this.isOpen
  }

  openModal() {
    this.isOpen = true
  }

  closeModal() {
    this.isOpen = false
  }
}
