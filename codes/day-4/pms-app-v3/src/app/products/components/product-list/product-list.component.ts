import { Component, Inject, Input } from '@angular/core';
import { Product } from '../../../models/product';
import { APP_CONSTANTS } from '../../../config/appconstants';
import { ServiceContract } from '../../services/abstraction/servicecontract';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  products: Product[];
  @Input() filterText = ''
  constructor(@Inject(APP_CONSTANTS.PRODUCT_SERVICE_TOKEN)
  private ps: ServiceContract<Product>) {
    this.products = this.ps.getAll()
  }
}
