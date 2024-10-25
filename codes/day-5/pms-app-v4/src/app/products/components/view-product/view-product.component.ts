import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Params, Router } from '@angular/router';
import { APP_CONSTANTS } from '../../../config/appconstants';
import { ServiceContract } from '../../services/abstraction/servicecontract';
import { Product } from '../../../models/product';
import { Subscription } from 'rxjs';
import { ApiResponse } from '../../../models/apiresponse';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrl: './view-product.component.css'
})
export class ViewProductComponent implements OnInit, OnDestroy {
  private getSubscription?: Subscription;
  productInfo?: Product;
  fetchComplete = false
  errorMessage = ''

  constructor(
    private currentRoute: ActivatedRoute,
    private router: Router,
    @Inject(APP_CONSTANTS.PRODUCT_SERVICE_TOKEN)
    private ps: ServiceContract<Product>
  ) {

  }
  goTo(id: number) {
    this.router.navigate(['/products', 'update', id])
  }
  ngOnDestroy(): void {
    this.getSubscription?.unsubscribe()
  }
  ngOnInit(): void {
    //this.currentRoute.params.subscribe({})
    const snapshot: ActivatedRouteSnapshot = this.currentRoute.snapshot
    const params: Params = snapshot.params
    const id = Number(params['id'])
    this.fetchProduct(id)
  }
  private fetchProduct(id: number) {
    this.getSubscription =
      this.ps.get(id)
        .subscribe(
          {
            next: (response: ApiResponse<Product>) => {
              if (response.data !== null) {
                this.productInfo = response.data
                this.errorMessage = ''
                this.fetchComplete = true
              } else {
                this.productInfo = undefined
                this.errorMessage = response.message
                this.fetchComplete = true
              }
            },
            error: (e) => {
              this.productInfo = undefined
              this.errorMessage = e.message
              this.fetchComplete = true
            }
          }
        )
  }
}
