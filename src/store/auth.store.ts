import { inject } from "@angular/core";
import { AuthService } from "../auth/auth.service";
import { IUser } from "../interfaces/user";
import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';

type UserState = {
    users: IUser[];
    loading: boolean;
}


const initialState : UserState = {
    users: [],
    loading:false
}

export const AuthStore = signalStore(
    {providedIn:'root'},
    withState(initialState),
    withMethods(
    (store, authService = inject(AuthService)) => ({
        async loadAll() {

            patchState(store, {loading:true});

            const users = await authService.getUsers();

            patchState(store,{users, loading:false})

        }
    })
    )
)