import { NgModule } from "@angular/core";
import { AnotherComponent } from "./another.component";

@NgModule({
    declarations: [AnotherComponent],
    exports: [AnotherComponent]
})
export class AnotherModule {

}