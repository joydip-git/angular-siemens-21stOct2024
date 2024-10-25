import { Injectable } from "@angular/core";
import { User } from "../models/user";
import { HttpClient } from "@angular/common/http";
import { APP_CONSTANTS } from "../../config/appconstants";
import { Observable } from "rxjs";
import { ApiResponse } from "../../models/apiresponse";

@Injectable()
export class AuthService {
    constructor(private _http: HttpClient) {

    }

    login(user: User): Observable<ApiResponse<string>> {
        return this._http.post<ApiResponse<string>>(`${APP_CONSTANTS.AUTH_SERVICE_URL}/login`, user)
    }

    register(user: User): Observable<ApiResponse<User>> {
        return this._http.post<ApiResponse<User>>(`${APP_CONSTANTS.AUTH_SERVICE_URL}/register`, user)
    }

    saveAuthToken(token: string) {
        sessionStorage.setItem('token', token)
    }
    getAuthToken() {
        return sessionStorage.getItem('token')
    }
    removeAuthToken() {

    }
    isLoggedIn() {
        return true
    }
}