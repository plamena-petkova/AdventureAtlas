import { computed, inject } from "@angular/core";
import { AuthService } from "../auth/auth.service";
import { IUser } from "../interfaces/user";
import { patchState, signalStore, withComputed, withMethods, withState } from '@ngrx/signals';
import { HttpErrorResponse, HttpEventType, HttpHeaders } from "@angular/common/http";

type UserState = {
    users: IUser[];
    loading: boolean;
    currentUser: IUser | null;
    error:HttpErrorResponse;
}


const initialState : UserState = {
    users: [],
    loading:false,
    currentUser:null,
    error: {
        name: "HttpErrorResponse",
        message: "",
        error: undefined,
        ok: false,
        headers: new HttpHeaders,
        status: 0,
        statusText: "",
        url: null,
        type: HttpEventType.ResponseHeader
    },
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
                patchState(store, { currentUser, loading: false});
            } catch (error:HttpErrorResponse| any) {
                console.log('e', error.error.msg)
                patchState(store, { currentUser: null, loading: false, error});
            }
        },
        logout() {
            patchState(store, { currentUser: null});
        }
    })
    )
    
)