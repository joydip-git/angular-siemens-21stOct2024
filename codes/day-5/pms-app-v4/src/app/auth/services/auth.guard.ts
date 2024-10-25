import { Injectable } from "@angular/core";
import { inject } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, GuardResult, MaybeAsync, RouterStateSnapshot } from "@angular/router";
import { AuthService } from "./auth.service";

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private authSvc: AuthService) { }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): MaybeAsync<GuardResult> {
        console.log('in guard');
        return this.authSvc.isLoggedIn()
    }
}

// export const authGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot): MaybeAsync<GuardResult> => {
//     const authSvc = inject(AuthService)
//     console.log('in guard');
//     return authSvc.isLoggedIn()
// }