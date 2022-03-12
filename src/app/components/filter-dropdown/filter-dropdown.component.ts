import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter-dropdown',
  templateUrl: './filter-dropdown.component.html',
  styleUrls: ['./filter-dropdown.component.css']
})
export class FilterDropdownComponent implements OnInit {
  open: boolean = false

  constructor() { }

  ngOnInit(): void {
  }

  toggleDropdown() {
    this.open = !this.open
  }

}
