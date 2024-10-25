// import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpInterceptorFn, HttpRequest } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { AuthService } from "../auth/services/auth.service";
import { HttpEvent, HttpHandler, HttpHandlerFn, HttpHeaders, HttpInterceptorFn, HttpRequest } from "@angular/common/http";

// @Injectable()
// export class AppInterceptorService implements HttpInterceptor {
//     constructor(private authSvc: AuthService) {

//     }
//     intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
//         const token = this.authSvc.getAuthToken()
//         console.log(token);
//         if (token) {
//             const clonedRequest = req.clone({
//                 headers: new HttpHeaders({
//                     'Authorization': `Bearer ${token}`
//                 })
//             })
//             console.log(clonedRequest);
//             return next.handle(clonedRequest)
//         } else
//             return next.handle(req)
//     }

// }

export const AppInterceptorService: HttpInterceptorFn = (req: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>> => {
    const authSvc = inject(AuthService)
    const token = authSvc.getAuthToken()
    console.log(token);
    if (token) {
        const clonedRequest = req.clone({
            headers: new HttpHeaders({
                'Authorization': `Bearer ${token}`
            })
        })
        console.log(clonedRequest);
        return next(clonedRequest)
    } else
        return next(req)
}