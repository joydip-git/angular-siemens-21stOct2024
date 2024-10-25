import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductsModule } from './products/products.module';
import { HomeComponent } from './home/home.component';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { ViewNotFoundComponent } from './view-not-found/view-not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { TokenInterceptorService } from './services/token-interceptor.service';
import { HTTP_INTERCEPTORS, HttpClientModule, provideHttpClient, withInterceptors } from '@angular/common/http';
import { AuthModule } from './auth/auth.module';
import { TokenService } from './services/tonen.service';

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
    AppRoutingModule,
    //HttpClientModule
  ],
  providers: [
    TokenService,
    provideHttpClient(
      withInterceptors(
        [TokenInterceptorService]
      )
    )
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: TokenInterceptorService,
    //   multi: true
    // }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
