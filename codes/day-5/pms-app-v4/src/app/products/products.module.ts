import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './components/product-list/product-list.component';
import { FilterProductPipe } from './pipes/filter-product.pipe';
import { ProductContainerComponent } from './components/product-container/product-container.component';
import { ProductFilterComponent } from './components/product-filter/product-filter.component';
import { APP_CONSTANTS } from '../config/appconstants';
import { provideHttpClient } from '@angular/common/http';



@NgModule({
  declarations: [
    ProductListComponent,
    FilterProductPipe,
    ProductContainerComponent,
    ProductFilterComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    {
      provide: APP_CONSTANTS.PRODUCT_SERVICE_TOKEN,
      useClass: APP_CONSTANTS.PRODUCT_SERVICE_TYPE
    },
    provideHttpClient()
  ],
  exports: [ProductContainerComponent]
})
export class ProductsModule { }
