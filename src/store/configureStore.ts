import { connectRouter, routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';

import { getUserFromLocalStorage, setUserToLocalStorage } from '../helpers/localStorage';
import categoriesReducer from './reducers/categoriesReducer';
import locationReducer from './reducers/locationsReduser';
import pichesReducer from './reducers/pichesReducer';
import productsReducer from './reducers/productsReducer';
import usersReducer from './reducers/usersReducer';
import reviewsReducer from './reducers/reviewsReducer';
import accommodationsReducer from './reducers/accommodationReducer';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

export const history = createBrowserHistory();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  users: usersReducer,
  products: productsReducer,
  locations: locationReducer,
  categories: categoriesReducer,
  piches: pichesReducer,
  reviews: reviewsReducer,
  accommodations: accommodationsReducer,
  router: connectRouter(history),
});
export type rootState = ReturnType<typeof rootReducer>;

const middleware = [thunkMiddleware, routerMiddleware(history)];

const enhancers = composeEnhancers(applyMiddleware(...middleware));

const users = getUserFromLocalStorage();

const store = createStore(rootReducer, users, enhancers);

store.subscribe(() => setUserToLocalStorage({ users: { user: store.getState().users.user } }));

export default store;
