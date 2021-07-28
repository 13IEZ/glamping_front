export interface IModule {
  _id: string;
  title: string;
  type: string;
  image: Array<string>;
  roominess: number;
  year: number;
  description: string;
  number: number;
  series: string;
  color: string;
  price: number;
  rent: number;
  status: boolean;
  published: boolean;
  factory: string;
}

export interface Istoere {
  items: number;
  pages: number;
  page: number;
  pageSize: number;
  modules: Array<IModule>;
}

export interface IStoreState {
  pages: Istoere | {};
  modules: Array<IModule> | [];
  lastFourModules: Array<IModule> | [];
  error: null | string;
  currentPage: number;
}

export enum StoreActionTypes {
  FETCH_STORE_PAGES = 'FETCH_STORE_PAGES',
  FETCH_STORE_PAGES_ERROR = 'FETCH_STORE_PAGES_ERROR',
  FETCH_MODULES_SUCCESS = 'FETCH_MODULES_SUCCESS',
  FETCH_MODULES_FAILURE = 'FETCH_MODULES_FAILURE',
  FETCH_LAST_FOUR_MODULES_SUCCESS = 'FETCH_LAST_FOUR_MODULES_SUCCESS',
  FETCH_LAST_FOUR_MODULES_FAILURE = 'FETCH_LAST_OUR_MODULES_FAILURE',
}

interface IFetchStorePagesAction {
  type: StoreActionTypes.FETCH_STORE_PAGES;
  payload: Istoere;
}

interface IFetchStorePagesErrorAction {
  type: StoreActionTypes.FETCH_STORE_PAGES_ERROR;
  payload: string;
}

interface IFetchModulesSuccessAction {
  type: StoreActionTypes.FETCH_MODULES_SUCCESS;
  payload: Array<IModule>;
}

interface IFetchModulesFailureAction {
  type: StoreActionTypes.FETCH_MODULES_FAILURE;
  payload: string;
}

interface IFetchLastFourModulesSuccessAction {
  type: StoreActionTypes.FETCH_LAST_FOUR_MODULES_SUCCESS;
  payload: Array<IModule>;
}

interface IFetchLastFourModulesFailureAction {
  type: StoreActionTypes.FETCH_LAST_FOUR_MODULES_FAILURE;
  payload: string;
}

export type StoreAction =
  | IFetchStorePagesAction
  | IFetchStorePagesErrorAction
  | IFetchModulesSuccessAction
  | IFetchModulesFailureAction
  | IFetchLastFourModulesSuccessAction
  | IFetchLastFourModulesFailureAction;
