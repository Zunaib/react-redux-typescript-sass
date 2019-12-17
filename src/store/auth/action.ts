import { AuthAction, LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, User } from './types';

export function loginRequest(): AuthAction {
  return {
    type: LOGIN_REQUEST
  };
}

export function loginSuccess(user: User): AuthAction {
  return {
    type: LOGIN_SUCCESS,
    user
  };
}

export function loginFailure(error: string): AuthAction {
  return {
    type: LOGIN_FAILURE,
    error
  };
}
