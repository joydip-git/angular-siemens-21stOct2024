import { Injectable } from "@angular/core";
import { DataServiceContract } from "./abstraction/dataservicecontract";
import { TitleService } from "./title.service";


//registering the service at the root module level directly with token name (DataService) same as that of the class name (DataService)
// @Injectable({
//     providedIn: 'root'
// })

@Injectable()
export class DataService implements DataServiceContract<string> {
    constructor(private ts: TitleService) {
        console.log('DataService instance created ');
    }
    getData(): string {
        return this.ts.getTitle()
    }
}