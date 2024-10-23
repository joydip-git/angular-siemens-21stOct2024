import { Component } from '@angular/core';

@Component({
  selector: 'app-product-container',
  templateUrl: './product-container.component.html',
  styleUrl: './product-container.component.css'
})
export class ProductContainerComponent {
  filtrationValue = ''

  updateFilterTextHandler(newValue: string) {
    this.filtrationValue = newValue
  }
}
