import { Injectable } from '@angular/core';
import { ServiceContract } from './abstraction/servicecontract';
import { Product } from '../../models/product';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { APP_CONSTANTS } from '../../config/appconstants';
import { ApiResponse } from '../../models/apiresponse';
import { Observable } from 'rxjs';
import { TokenService } from '../../services/tonen.service';

@Injectable()
export class ProductService implements ServiceContract<Product> {
  constructor(
    private _http: HttpClient,
    private tokenSvc: TokenService
  ) {

  }
  getAll(): Observable<ApiResponse<Product[]>> {
    // return this._http.get<ApiResponse<Product[]>>(APP_CONSTANTS.PRODUCT_SERVICE_URL, { headers: this.createAuthHeader() })
    return this._http.get<ApiResponse<Product[]>>(APP_CONSTANTS.PRODUCT_SERVICE_URL)
  }
  get(id: number): Observable<ApiResponse<Product>> {
    // return this._http.get<ApiResponse<Product>>(`${APP_CONSTANTS.PRODUCT_SERVICE_URL}/${id}`, { headers: this.createAuthHeader() })
    return this._http.get<ApiResponse<Product>>(`${APP_CONSTANTS.PRODUCT_SERVICE_URL}/${id}`)
  }

  private createAuthHeader() {
    const token = this.tokenSvc.fetchToken()
    const authHeader = `Bearer ${token}`
    return new HttpHeaders({
      'Authorization': authHeader
    })
  }
}
