import { connectRouter, routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';

import { getUserFromLocalStorage, setUserToLocalStorage } from '../helpers/localStorage';
import locationReducer from './reducers/locationsReduser';
import productsReducer from './reducers/productsReducer';
import usersReducer from './reducers/usersReducer';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

export const history = createBrowserHistory();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  users: usersReducer,
  pages: productsReducer,
  products: productsReducer,
  locations: locationReducer,
  router: connectRouter(history),
});
export type rootState = ReturnType<typeof rootReducer>;

const middleware = [thunkMiddleware, routerMiddleware(history)];

const enhancers = composeEnhancers(applyMiddleware(...middleware));

const users = getUserFromLocalStorage();

const store = createStore(rootReducer, users, enhancers);

store.subscribe(() => setUserToLocalStorage({ users: { user: store.getState().users.user } }));

export default store;
