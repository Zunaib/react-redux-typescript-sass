import { AppAction } from '..';
import { AuthState, LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT_SUCCESS } from './types';

const initialState: AuthState = {
  user: null,
  loading: false,
  error: null,
};

export function authReducer(
  state = initialState,
  action: AppAction
): AuthState {
  switch (action.type) {
    case LOGIN_REQUEST: return {
      ...state,
      loading: true
    };

    case LOGIN_FAILURE: return {
      ...state,
      loading: false,
      error: action.error
    };

    case LOGIN_SUCCESS: return {
      ...state,
      loading: false,
      user: action.user,
      error: null
    };

    default: return state;
  }
}