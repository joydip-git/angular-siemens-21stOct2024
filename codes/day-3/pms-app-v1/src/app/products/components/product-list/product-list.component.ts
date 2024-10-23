import { Component } from '@angular/core';
import { productRepository } from '../../../data/productrepository';
import { Product } from '../../../models/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  products: Product[] = productRepository
  filterText = ''

  updateFilterText(newText: string) {
    this.filterText = newText
  }
}
