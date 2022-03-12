import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav-new-form',
  templateUrl: './sidenav-new-form.component.html',
  styleUrls: ['./sidenav-new-form.component.css']
}

) export class SidenavNewFormComponent implements OnInit {
  open: boolean = false
  paymentTerms: String[] = ['Net 1 Day', 'Net 7 Days', 'Net 14 Days', 'Net 30 Days']

  constructor() { }

  ngOnInit(): void { }

  openSidenav(): void {
    console.log(this.open)
    this.open = true
  }

  closeSidenav(): void {
    console.log(this.open)
    this.open = false
  }

  onSubmit(): void {
    console.log('submitting')
  }

}