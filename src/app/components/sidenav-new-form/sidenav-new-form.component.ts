import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { SidenavService } from '../../services/sidenav.service';


@Component({
  selector: 'app-sidenav-new-form',
  templateUrl: './sidenav-new-form.component.html',
  styleUrls: ['./sidenav-new-form.component.css']
}

) export class SidenavNewFormComponent implements OnInit {
  paymentTerms: String[] = ['Net 1 Day', 'Net 7 Days', 'Net 14 Days', 'Net 30 Days']

  constructor(private sidenavService: SidenavService) {

  }

  ngOnInit(): void {

  }

  getOpen() {
    return this.sidenavService.isOpen
  }

  closeSidenav(): void {
    this.sidenavService.closeSidenav()
  }

  onEvent(event: Event) {
    event.stopPropagation()
  }



  onSubmit(): void {
    console.log('submitting')
  }
}