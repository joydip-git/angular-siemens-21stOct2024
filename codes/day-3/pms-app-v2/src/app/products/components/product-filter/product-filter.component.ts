import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-product-filter',
  templateUrl: './product-filter.component.html',
  styleUrl: './product-filter.component.css'
})
export class ProductFilterComponent {
  filterText = ''
  @Output('filtrationValueChanged') filterTextChanged = new EventEmitter<string>()

  updateFilterText(newText: string) {
    this.filterText = newText
    this.filterTextChanged.emit(this.filterText)
  }
}
