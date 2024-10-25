import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './components/product-list/product-list.component';
import { FilterProductPipe } from './pipes/filter-product.pipe';
import { ProductContainerComponent } from './components/product-container/product-container.component';
import { ProductFilterComponent } from './components/product-filter/product-filter.component';
import { APP_CONSTANTS } from '../config/appconstants';
import { provideHttpClient } from '@angular/common/http';
import { AddProductComponent } from './components/add-product/add-product.component';
import { ViewProductComponent } from './components/view-product/view-product.component';
import { UpdateProductComponent } from './components/update-product/update-product.component';
import { Routes, RouterModule } from '@angular/router';
//import { authGuard } from '../auth/services/auth.guard';
import { AuthModule } from '../auth/auth.module';
import { AuthGuard } from '../auth/services/auth.guard';

// const productRoutes: Routes = [
//   {
//     path: 'products', component: ProductContainerComponent
//   },
//   {
//     path: 'products/add', component: AddProductComponent
//   },
//   {
//     path: 'products/view/:id', component: ViewProductComponent
//   },
//   {
//     path: 'products/update/:id', component: UpdateProductComponent
//   }
// ]

const productRoutes: Routes = [
  {
    path: 'products',
    canActivateChild: [AuthGuard],
    //or
    //canActivate: [authGuard],
    children: [
      {
        path: '', component: ProductContainerComponent
      },
      {
        path: 'add', component: AddProductComponent
      },
      {
        path: 'view/:id', component: ViewProductComponent
      },
      {
        path: 'update/:id', component: UpdateProductComponent
      }
    ]
  }
]

@NgModule({
  declarations: [
    ProductListComponent,
    FilterProductPipe,
    ProductContainerComponent,
    ProductFilterComponent,
    AddProductComponent,
    ViewProductComponent,
    UpdateProductComponent
  ],
  imports: [
    CommonModule,
    AuthModule,
    RouterModule.forChild(productRoutes)
    //RouterModule.forRoot(productRoutes)
  ],
  providers: [
    {
      provide: APP_CONSTANTS.PRODUCT_SERVICE_TOKEN,
      useClass: APP_CONSTANTS.PRODUCT_SERVICE_TYPE
    },
    provideHttpClient(),
    //AuthGuard
  ],
  exports: [ProductContainerComponent]
})
export class ProductsModule { }
