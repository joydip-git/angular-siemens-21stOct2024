import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductsModule } from './products/products.module';
import { HomeComponent } from './home/home.component';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { ViewNotFoundComponent } from './view-not-found/view-not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { AppInterceptorService } from './services/app-interceptor.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthModule } from './auth/auth.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DashBoardComponent,
    ViewNotFoundComponent
  ],
  imports: [
    BrowserModule,
    ProductsModule,
    AuthModule,
    AppRoutingModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useExisting: AppInterceptorService
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
