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

export interface IModulesState {
  modules: Array<IModule> | [];
  lastFourModules: Array<IModule> | [];
  currentModule: Array<IModule> | [];
  error: null | string;
}

export enum ModulesActionTypes {
  FETCH_MODULES_SUCCESS = 'FETCH_MODULES_SUCCESS',
  FETCH_MODULES_FAILURE = 'FETCH_MODULES_FAILURE',
  FETCH_LAST_FOUR_MODULES_SUCCESS = 'FETCH_LAST_FOUR_MODULES_SUCCESS',
  FETCH_LAST_FOUR_MODULES_FAILURE = 'FETCH_LAST_OUR_MODULES_FAILURE',
  FETCH_MODULE_SUCCESS = 'FETCH_MODULE_SUCCESS',
  FETCH_MODULE_FAILURE = 'FETCH_MODULE_FAILURE',
}

interface IFetchModulesSuccessAction {
  type: ModulesActionTypes.FETCH_MODULES_SUCCESS;
  payload: Array<IModule>;
}

interface IFetchModulesFailureAction {
  type: ModulesActionTypes.FETCH_MODULES_FAILURE;
  payload: string;
}

interface IFetchLastFourModulesSuccessAction {
  type: ModulesActionTypes.FETCH_LAST_FOUR_MODULES_SUCCESS;
  payload: Array<IModule>;
}

interface IFetchLastFourModulesFailureAction {
  type: ModulesActionTypes.FETCH_LAST_FOUR_MODULES_FAILURE;
  payload: string;
}

interface IFetchModuleSuccessAction {
  type: ModulesActionTypes.FETCH_MODULE_SUCCESS;
  payload: Array<IModule>;
}

interface IFetchModuleFailureAction {
  type: ModulesActionTypes.FETCH_MODULE_FAILURE;
  payload: string;
}

export type ModulesAction =
  | IFetchModulesSuccessAction
  | IFetchModulesFailureAction
  | IFetchLastFourModulesSuccessAction
  | IFetchLastFourModulesFailureAction
  | IFetchModuleSuccessAction
  | IFetchModuleFailureAction;
