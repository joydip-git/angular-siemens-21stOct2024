import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParentComponent } from './parent/parent.component';
import { FirstNestedComponent } from './first-nested/first-nested.component';
import { SecondNestedComponent } from './second-nested/second-nested.component';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    FirstNestedComponent,
    SecondNestedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
