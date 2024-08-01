import { inject } from "@angular/core";
import { AuthService } from "../auth/auth.service";
import { IUser } from "../interfaces/user";
import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';

type UserState = {
    users: IUser[];
    loading: boolean;
    currentUser: IUser | null;
    error: string | null;
}


const initialState : UserState = {
    users: [],
    loading:false,
    currentUser:null,
    error: null,
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

        },
        async login(credentials: { username: string; password: string }) {
            patchState(store, { loading: true });
            try {
                const currentUser = await authService.login(credentials);
                patchState(store, { currentUser, loading: false, error: null });
            } catch (error:unknown) {
                patchState(store, { currentUser: null, loading: false, });
            }
        },
        logout() {
            patchState(store, { currentUser: null});
        }
    })
    )
)