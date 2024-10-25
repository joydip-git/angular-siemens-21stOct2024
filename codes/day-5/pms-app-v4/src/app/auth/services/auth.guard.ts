import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, CanActivateFn, GuardResult, MaybeAsync, RouterStateSnapshot } from "@angular/router";
import { TokenService } from "../../services/tonen.service";

@Injectable()
export class AuthGuard implements CanActivateChild {
    constructor(private tokenSvc: TokenService) { }
    canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): MaybeAsync<GuardResult> {
        console.log('in guard');
        return this.tokenSvc.isLoggedIn()
    }
}

// export const authGuard: CanActivateChildFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot): MaybeAsync<GuardResult> => {
//     const authSvc = inject(AuthService)
//     console.log('in guard');
//     return authSvc.isLoggedIn()
// }