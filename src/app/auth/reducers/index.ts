import { state } from '@angular/animations';
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createReducer,
  createSelector,
  MetaReducer,
  on
} from '@ngrx/store';
import { AuthAciton } from '../action-type';
import { User } from '../model/user.model';

export const authFeatureKey = 'auth';

export interface AuthState {
  user:User
}

export const initialAuthState: AuthState = {
  user: undefined
}

export const authReducer = createReducer(
  initialAuthState,

  on(AuthAciton.login, (state, action) => {
    return {
      user: action.user
    }
  }),

  on(AuthAciton.logout, (state, action) => {
    return {
      user: undefined
    }
  })
)