import { NgModule } from "@angular/core";
import { RootComponent } from "./root.component";
import { BrowserModule } from "@angular/platform-browser";
import { AnotherComponent } from "./another/another.component";

@NgModule({
    //to register components
    declarations: [RootComponent, AnotherComponent],
    //to egister module files (built-in and feature modules)
    imports: [BrowserModule],
    //to mention the name(s) of bootstrapper component(s)
    //bootstrap: [RootComponent, AnotherComponent]
    bootstrap: [RootComponent]
})
export class RootModule {

}