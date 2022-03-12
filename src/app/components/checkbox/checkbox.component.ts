import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css']
})
export class CheckboxComponent implements OnInit {
  selected: boolean = false

  constructor() { }

  ngOnInit(): void {
  }

  toggleSelect(): void {
    this.selected = !this.selected
  }

}
