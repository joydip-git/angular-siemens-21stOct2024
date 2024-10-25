import { Injectable } from '@angular/core';
import { ServiceContract } from './abstraction/servicecontract';
import { Product } from '../../models/product';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { APP_CONSTANTS } from '../../config/appconstants';
import { ApiResponse } from '../../models/apiresponse';
import { Observable } from 'rxjs';

@Injectable()
export class ProductService implements ServiceContract<Product> {
  constructor(private _http: HttpClient) {

  }
  getAll(): Observable<ApiResponse<Product[]>> {
    // return this._http.get<ApiResponse<Product[]>>(APP_CONSTANTS.PRODUCT_SERVICE_URL, {
    //   headers: new HttpHeaders({
    //     'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3Mjk4NTAwNDcsImV4cCI6MTcyOTg1MTI0N30.SJp2_3EnuOmm8RPFAtrc-U9OzG-QjNFTF0NJO4ykIKU'
    //   })
    // })
    return this._http.get<ApiResponse<Product[]>>(APP_CONSTANTS.PRODUCT_SERVICE_URL)
  }
  get(id: number): Observable<ApiResponse<Product>> {
    return this._http.get<ApiResponse<Product>>(`${APP_CONSTANTS.PRODUCT_SERVICE_URL}/${id}`)
  }
}
