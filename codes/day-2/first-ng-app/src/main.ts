import { PlatformRef } from "@angular/core";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { RootModule } from "./app/root.module";

const platformObj: PlatformRef = platformBrowserDynamic()
platformObj
  .bootstrapModule(RootModule)
  .catch(err => console.log(err))
