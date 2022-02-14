import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { select, State } from "@ngrx/store";

import { Observable } from "rxjs";
import { tap } from "rxjs/operators";
import { AppState } from "../reducers";
import { isLoggedIn } from "./auth.selector";

@Injectable({providedIn: 'root'})
export class AuthGuard implements CanActivate {
    constructor(private store: State<AppState>, private router: Router) {}
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        return this.store.pipe(
            select(isLoggedIn),
            tap((loggedIn) => {
                if (!loggedIn) this.router.navigateByUrl('/login');
            }
            )
        )
    }
}