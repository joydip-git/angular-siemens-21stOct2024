import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NestedComponent } from './nested/nested.component';
import { DataService } from './services/data.service';
import { DATA_SERVICE_TOKEN, DATA_SERVICE_TYPE, POST_SERVICE_TOKEN, POST_SERVICE_TYPE } from './config/constants';
import { TitleService } from './services/title.service';
import { HttpClientModule, provideHttpClient } from '@angular/common/http';
import { PostListComponent } from './post-list/post-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NestedComponent,
    PostListComponent
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
    provideHttpClient(),
    //HttpClientModule,
    {
      provide: DATA_SERVICE_TOKEN,
      useClass: DATA_SERVICE_TYPE
    },
    {
      provide: POST_SERVICE_TOKEN,
      useClass: POST_SERVICE_TYPE
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
