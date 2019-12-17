import { applyMiddleware, combineReducers, createStore, Store } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk, { ThunkMiddleware } from 'redux-thunk';
import { authReducer } from './auth/reducers';
import { testReducer } from './test/reducers';
import { TestAction } from './test/types';
import { AuthAction } from './auth/types';

const rootReducer = combineReducers({
  auth: authReducer,
  test: testReducer,
});

const initialState = {};


export type AppState = ReturnType<typeof rootReducer>;
export type AppAction =
  | TestAction
  | AuthAction;

let store: Store = null;

if (process.env.NODE_ENV === "development") {
  store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(
      applyMiddleware(thunk as ThunkMiddleware<AppState, AppAction>)
    )
  );
} else {
  store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(thunk as ThunkMiddleware<AppState, AppAction>)
  );
}

export default store;
