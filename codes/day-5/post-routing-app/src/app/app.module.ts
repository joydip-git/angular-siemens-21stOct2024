import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { POST_SERVICE_TOKEN, POST_SERVICE_TYPE } from './config/constants';;
import { provideHttpClient } from '@angular/common/http';
import { PostListComponent } from './post-list/post-list.component';
import { PostDetailComponent } from './post-detail/post-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    PostDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideHttpClient(),
    {
      provide: POST_SERVICE_TOKEN,
      useClass: POST_SERVICE_TYPE
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
