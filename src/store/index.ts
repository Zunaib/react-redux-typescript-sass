import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk, { ThunkMiddleware } from 'redux-thunk';
import { authReducer } from './auth/reducers';
import { testReducer } from './test/reducers';
import { TestAction } from './test/types';
import { AuthAction } from './auth/types';

const rootReducer = combineReducers({
  auth: authReducer,
});

export type AppState = ReturnType<typeof rootReducer>;
export type AppAction =
  | TestAction
  | AuthAction;

export function makeStore(initialState: AppState) {
  if (process.env.NODE_ENV === "development") {
    return createStore(
      rootReducer,
      initialState,
      composeWithDevTools(
        applyMiddleware(thunk as ThunkMiddleware<AppState, AppAction>)
      )
    );
  } else {
    return createStore(
      rootReducer,
      initialState,
      applyMiddleware(thunk as ThunkMiddleware<AppState, AppAction>)
    );
  }
}

export type AppStore = ReturnType<typeof makeStore>;
