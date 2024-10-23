import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SortPeoplePipe } from './pipes/sort-people.pipe';

@NgModule({
  //register components, pipes, directives
  declarations: [
    AppComponent, SortPeoplePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  //register services
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
