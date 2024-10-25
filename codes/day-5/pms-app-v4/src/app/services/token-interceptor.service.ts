import { inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpEvent, HttpHandler, HttpHandlerFn, HttpInterceptor, HttpInterceptorFn, HttpRequest } from "@angular/common/http";
import { TokenService } from "./tonen.service";

/*
@Injectable()
export class TokenInterceptorService implements HttpInterceptor {
    constructor(private tokenSvc: TokenService) {

    }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const token = this.tokenSvc.fetchToken()
        const authorizationHeader = `Bearer ${token}`

        const tokenizedRequest = req.clone({
            setHeaders: {
                Authorization: authorizationHeader
            }
        })
        console.log(tokenizedRequest);
        return next.handle(tokenizedRequest)
    }
}
*/

export const TokenInterceptorService: HttpInterceptorFn = (req: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>> => {
    const authSvc = inject(TokenService)
    const token = authSvc.fetchToken()
    //console.log(token);
    if (token) {
        const clonedRequest = req.clone({
            setHeaders: {
                Authorization: `Bearer ${token}`
            }
        })
        console.log(clonedRequest);
        return next(clonedRequest)
    } else
        return next(req)
}