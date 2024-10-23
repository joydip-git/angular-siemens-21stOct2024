import { NgModule } from "@angular/core";
import { RootComponent } from "./root.component";
import { BrowserModule } from "@angular/platform-browser";
import { AnotherComponent } from "./another/another.component";
import { AnotherModule } from "./another/another.module";

@NgModule({
    //to register components
    declarations: [RootComponent],
    //to register module files (built-in and feature modules)
    imports: [BrowserModule, AnotherModule],
    //to mention the name(s) of bootstrapper component(s)
    //bootstrap: [RootComponent, AnotherComponent]
    bootstrap: [RootComponent]
})
export class RootModule {

}