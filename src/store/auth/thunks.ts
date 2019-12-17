import { ThunkAction } from 'redux-thunk';
import { AppAction, AppState } from '..';
import { loginFailure, loginRequest, loginSuccess } from './action';
import { User } from './types';

export function login(
  user: User
): ThunkAction<Promise<User>, AppState, undefined, AppAction> {
  return async dispatch => {
    dispatch(loginRequest());

    try {
      dispatch(loginSuccess(user));
      return user;
    } catch (err) {
      dispatch(loginFailure(err.message));
      throw err;
    }
  };
}

