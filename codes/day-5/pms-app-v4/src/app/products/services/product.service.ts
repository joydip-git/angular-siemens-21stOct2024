import { Injectable } from '@angular/core';
import { ServiceContract } from './abstraction/servicecontract';
import { Product } from '../../models/product';
import { HttpClient } from '@angular/common/http';
import { APP_CONSTANTS } from '../../config/appconstants';
import { ApiResponse } from '../../models/apiresponse';
import { Observable } from 'rxjs';

@Injectable()
export class ProductService implements ServiceContract<Product> {
  constructor(private _http: HttpClient) {

  }
  getAll(): Observable<ApiResponse<Product[]>> {
    return this._http.get<ApiResponse<Product[]>>(APP_CONSTANTS.PRODUCT_SERVICE_URL)
  }
  get(id: number): Observable<ApiResponse<Product>> {
    return this._http.get<ApiResponse<Product>>(`${APP_CONSTANTS.PRODUCT_SERVICE_URL}/${id}`)
  }
}
