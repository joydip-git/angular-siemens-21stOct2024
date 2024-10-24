import { ChangeDetectorRef, Component, Inject, Input } from '@angular/core';
import { Product } from '../../../models/product';
import { APP_CONSTANTS } from '../../../config/appconstants';
import { ServiceContract } from '../../services/abstraction/servicecontract';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  products?: Product[];
  fetchComplete = false
  errorMessage = ''
  @Input() filterText = ''

  constructor(@Inject(APP_CONSTANTS.PRODUCT_SERVICE_TOKEN)
  private ps: ServiceContract<Product>,
    //private cdr: ChangeDetectorRef
  ) {
    this.fetchProducts()
    console.log('PL created...');
  }

  fetchProducts() {
    this.ps.getAll()
      .subscribe({
        next: (response) => {
          if (response.data !== null) {
            this.products = response.data
            this.fetchComplete = true
            this.errorMessage = ''
            //this.cdr.detectChanges()
          } else {
            this.products = undefined
            this.fetchComplete = true
            this.errorMessage = response.message
          }
        },
        error: (e) => {
          this.products = undefined
          this.fetchComplete = true
          this.errorMessage = e.message
        }
      })
  }
}
