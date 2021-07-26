import { ILocation, IModule, IUser } from './reducersTypes';
import { rootState } from '../configureStore';
import { ThunkAction } from 'redux-thunk';
import { CallHistoryMethodAction } from 'connected-react-router';

export enum ActionTypes {
  //users
  SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS',
  SIGN_UP_ERROR = 'SIGN_UP_ERROR',
  SIGN_IN_SUCCESS = 'SIGN_IN_SUCCESS',
  SIGN_IN_ERROR = 'SIGN_IN_ERROR',
  LOGOUT_USER_SUCCESS = 'LOGOUT_USER_SUCCESS',
  LOGOUT_USER_ERROR = 'LOGOUT_USER_ERROR',
  //locations
  FETCH_LAST_FOUR_LOCATIONS_SUCCESS = 'FETCH_LAST_FOUR_LOCATIONS_SUCCESS',
  FETCH_LAST_FOUR_LOCATIONS_FAILURE = 'FETCH_LAST_FOUR_LOCATIONS_FAILURE',
  //modules
  FETCH_MODULES_SUCCESS = 'FETCH_MODULES_SUCCESS',
  FETCH_MODULES_FAILURE = 'FETCH_MODULES_FAILURE',
  FETCH_LAST_FOUR_MODULES_SUCCESS = 'FETCH_LAST_FOUR_MODULES_SUCCESS',
  FETCH_LAST_FOUR_MODULES_FAILURE = 'FETCH_LAST_OUR_MODULES_FAILURE',
}

export const reducersActions = {
  //users
  signUpSuccess: () => ({ type: ActionTypes.SIGN_UP_SUCCESS } as const),
  signUpError: (payload: string) => ({ type: ActionTypes.SIGN_UP_ERROR, payload } as const),
  signInSuccess: (payload: IUser) => ({ type: ActionTypes.SIGN_IN_SUCCESS, payload } as const),
  signInError: (payload: string) => ({ type: ActionTypes.SIGN_IN_ERROR, payload } as const),
  logoutSuccess: () => ({ type: ActionTypes.LOGOUT_USER_SUCCESS } as const),
  logoutError: (payload: string) => ({ type: ActionTypes.LOGOUT_USER_ERROR, payload } as const),
  //locations
  fetchLastFourLocations: (payload: Array<ILocation>) =>
    ({ type: ActionTypes.FETCH_LAST_FOUR_LOCATIONS_SUCCESS, payload } as const),
  fetchLastFourLocationsFailure: (payload: string) =>
    ({ type: ActionTypes.FETCH_LAST_FOUR_LOCATIONS_FAILURE, payload } as const),
  //modules
  fetchModules: (payload: Array<IModule>) => ({ type: ActionTypes.FETCH_MODULES_SUCCESS, payload } as const),
  fetchModulesFailure: (payload: string) => ({ type: ActionTypes.FETCH_MODULES_FAILURE, payload } as const),
  fetchLastModules: (payload: Array<IModule>) =>
    ({ type: ActionTypes.FETCH_LAST_FOUR_MODULES_SUCCESS, payload } as const),
  fetchLastModulesFailure: (payload: string) =>
    ({ type: ActionTypes.FETCH_LAST_FOUR_MODULES_FAILURE, payload } as const),
};

export type PropertiesType<T> = T extends { [key: string]: infer U } ? U : never;
export type GetActionsType<T extends { [key: string]: (...args: any[]) => any }> = ReturnType<PropertiesType<T>>;

export type ActionsType = GetActionsType<typeof reducersActions> | CallHistoryMethodAction<[string, unknown?]>;

export type ThunkType = ThunkAction<Promise<void>, rootState, unknown, ActionsType>;
