import { Component, Input, OnInit, OnChanges, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filter-dropdown',
  templateUrl: './filter-dropdown.component.html',
  styleUrls: ['./filter-dropdown.component.css']
})
export class FilterDropdownComponent implements OnInit {
  @Input() filterOptions = {
    [String('paid')]: false,
    [String('pending')]: false,
    [String('draft')]: false
  }
  @Input() filters: String[] = []
  @Output() editFiltersClick = new EventEmitter<String>()
  open: boolean = false

  constructor() {
    console.log(this.filters)
    const newFilterOptions = { ...this.filterOptions }
    Object.keys(this.filterOptions).forEach((filter) => {
      if (this.filters.includes(filter)) {
        newFilterOptions[filter] = true
      } else {
        newFilterOptions[filter] = false
      }
    })

    this.filterOptions = newFilterOptions

    console.log(this.filterOptions)
  }

  ngOnInit(): void {
  }

  ngOnChanges() {
    console.log(this.filterOptions)
  }

  toggleDropdown() {
    this.open = !this.open
  }

  getFilterKeys() {
    return Object.keys(this.filterOptions)
  }

  editFilters(filter: any) {
    console.log(filter)
    this.editFiltersClick.emit(filter)
  }

}
