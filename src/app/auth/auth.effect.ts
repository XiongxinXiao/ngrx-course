import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, createEffect, ofType } from "@ngrx/effects";

import { tap } from "rxjs/operators";
import { AuthAciton } from "./action-type";

@Injectable()
export class AuthEffect {
    constructor (private action$: Actions, private router: Router) {}

    login$ =  createEffect(() => {
        return this.action$.pipe(
            ofType(AuthAciton.login),
            tap(action => {
                localStorage.setItem('user', JSON.stringify(action.user))
            })
        )
    }, {dispatch: false});

    logout$ =  createEffect(() => {
        return this.action$.pipe(
            ofType(AuthAciton.logout),
            tap(action => {
                localStorage.removeItem('user');
                this.router.navigateByUrl('/login');
            })
        )
    }, {dispatch: false});
}