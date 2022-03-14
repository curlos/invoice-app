import { Observable, BehaviorSubject, Subject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidenavService {
  isOpen: boolean = false

  sidenavVisibilityChange: Subject<boolean> = new Subject<boolean>()

  constructor() {
    this.sidenavVisibilityChange.subscribe((value) => {
      this.isOpen = value
    })
  }

  getOpen() {
    return this.isOpen
  }

  openSidenav() {
    this.isOpen = true
  }

  closeSidenav() {
    this.isOpen = false
  }
}
