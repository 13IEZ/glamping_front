export interface ICategory {
  _id: string;
  title: string;
}

export interface IFactory {
  _id: string;
  title: string;
}

export interface ICategoriesState {
  categories: Array<ICategory> | [];
  factories: Array<IFactory> | [];
  error: null | string;
}

export enum CategoryActionTypes {
  FETCH_CATEGORY_SUCCESS = 'FETCH_CATEGORY_SUCCESS',
  FETCH_CATEGORY_FAILURE = 'FETCH_CATEGORY_FAILURE',
  FETCH_FACTORY_SUCCESS = 'FETCH_FACTORY_SUCCESS',
  FETCH_FACTORY_FAILURE = 'FETCH_FACTORY_FAILURE',
}

interface IFetchCategoriesSuccessAction {
  type: CategoryActionTypes.FETCH_CATEGORY_SUCCESS;
  payload: Array<ICategory>;
}

interface IFetchCategoriesFailureAction {
  type: CategoryActionTypes.FETCH_CATEGORY_FAILURE;
  payload: string;
}

interface IFetchFactoriesSuccessAction {
  type: CategoryActionTypes.FETCH_FACTORY_SUCCESS;
  payload: Array<ICategory>;
}

interface IFetchFactoriesFailureAction {
  type: CategoryActionTypes.FETCH_FACTORY_FAILURE;
  payload: string;
}

export type CategoriesAction =
  | IFetchCategoriesSuccessAction
  | IFetchCategoriesFailureAction
  | IFetchFactoriesSuccessAction
  | IFetchFactoriesFailureAction;
