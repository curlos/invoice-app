
import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css']
})
export class CheckboxComponent implements OnInit {
  selected: boolean = false
  @Input() filterOption: String = ''
  @Output() editFiltersClick = new EventEmitter<String>()

  ngOnInit(): void {
  }

  editFilters() {
    console.log('bum')
    this.selected = !this.selected
    this.editFiltersClick.emit(this.filterOption)
  }

}
