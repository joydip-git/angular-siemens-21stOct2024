import { Injectable } from "@angular/core";
import { ServiceContract } from "./abstraction/servicecontract";
import { TitleService } from "./title.service";
import { of } from "rxjs";


//registering the service at the root module level directly with token name (DataService) same as that of the class name (DataService)
// @Injectable({
//     providedIn: 'root'
// })

@Injectable()
export class DataService implements ServiceContract<string> {
    constructor(private ts: TitleService) {
        console.log('DataService instance created ');
    }
    getData(): string {
        return this.ts.getTitle()
    }
    getAll() {
        return of([''])
    }
}