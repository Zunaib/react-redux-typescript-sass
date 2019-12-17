export interface User {
  username: string;
  token: string;
  email: string;
  firstName: string;
  lastName: string;
  picture?: string;
  tenant: string;
}

export interface AuthState {
  user: User | null;
  loading: boolean;
  error: string | null;
}

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';

export interface LoginRequestAction {
  type: typeof LOGIN_REQUEST;
}

export interface LoginSuccessAction {
  type: typeof LOGIN_SUCCESS;
  user: User;
}

export interface LoginFailureAction {
  type: typeof LOGIN_FAILURE;
  error: string;
}


export type AuthAction =
  LoginRequestAction |
  LoginSuccessAction |
  LoginFailureAction;