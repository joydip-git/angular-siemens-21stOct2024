import { Component, Inject, Input, OnDestroy, OnInit } from '@angular/core';
import { Product } from '../../../models/product';
import { APP_CONSTANTS } from '../../../config/appconstants';
import { ServiceContract } from '../../services/abstraction/servicecontract';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit, OnDestroy {
  products?: Product[];
  fetchComplete = false
  errorMessage = ''
  @Input() filterText = ''
  private getSubscription?: Subscription;

  constructor(@Inject(APP_CONSTANTS.PRODUCT_SERVICE_TOKEN)
  private ps: ServiceContract<Product>
  ) {
  }

  ngOnDestroy(): void {
    this.getSubscription?.unsubscribe()
  }

  ngOnInit(): void {
    this.fetchProducts()
  }

  fetchProducts() {
    this.getSubscription = this.ps.getAll()
      .subscribe({
        next: (response) => {
          if (response.data !== null) {
            this.products = response.data
            this.fetchComplete = true
            this.errorMessage = ''
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
