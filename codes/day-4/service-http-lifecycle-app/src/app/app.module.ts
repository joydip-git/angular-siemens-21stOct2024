import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NestedComponent } from './nested/nested.component';
import { DataService } from './services/data.service';
import { DATA_SERVICE_TOKEN, DATA_SERVICE_TYPE } from './config/constants';
import { TitleService } from './services/title.service';

@NgModule({
  declarations: [
    AppComponent,
    NestedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    //DataService
    // {
    //   provide: DataService,
    //   useClass: DataService
    // }
    TitleService,
    {
      provide: DATA_SERVICE_TOKEN,
      useClass: DATA_SERVICE_TYPE
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
