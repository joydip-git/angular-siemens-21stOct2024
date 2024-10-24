import { Component, Inject } from '@angular/core';
import { DATA_SERVICE_TOKEN } from '../config/constants';
import { DataServiceContract } from '../services/abstraction/dataservicecontract';
//import { DataService } from '../services/data.service';

//@Injectable()
@Component({
  selector: 'app-nested',
  templateUrl: './nested.component.html',
  styleUrl: './nested.component.css',
  //providers: [DataService]
})
export class NestedComponent {
  title = 'default';
  private ds: DataServiceContract<string>;

  //constructor(_ds: DataService)
  //constructor(@Inject(DataSevice) _ds: DataServiceContract) 
  constructor(@Inject(DATA_SERVICE_TOKEN) _ds: DataServiceContract<string>) {
    this.ds = _ds
    this.title = this.ds.getData()
    console.log('Nested component instance created....');
  }
}
