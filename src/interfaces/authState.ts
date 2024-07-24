import { IUser } from '../interfaces/user';

export interface AuthState {
  isLoggedIn: boolean;
  user: IUser | null;
}

export const initialAuthState: AuthState = {
  isLoggedIn: false,
  user: null,
};
