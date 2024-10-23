import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './components/product-list/product-list.component';
import { FilterProductPipe } from './pipes/filter-product.pipe';
import { ProductContainerComponent } from './components/product-container/product-container.component';
import { ProductFilterComponent } from './components/product-filter/product-filter.component';



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
  exports: [ProductContainerComponent]
})
export class ProductsModule { }
