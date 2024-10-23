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
  //register modules
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  //register services
  providers: [],
  bootstrap: [AppComponent],
  //mention the name of assets of the same module to be exported outside. you can use this also to re-export already imported modules
  exports: []
})
export class AppModule { }
