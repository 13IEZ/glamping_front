export interface ICategory {
  _id: string;
  title: string;
}

export interface ICategoriesState {
  categories: Array<ICategory> | [];
  error: null | string;
}

export enum CategoryActionTypes {
  FETCH_CATEGORY_SUCCESS = 'FETCH_CATEGORY_SUCCESS',
  FETCH_CATEGORY_FAILURE = 'FETCH_CATEGORY_FAILURE',
}

interface IFetchCategoriesSuccessAction {
  type: CategoryActionTypes.FETCH_CATEGORY_SUCCESS;
  payload: Array<ICategory>;
}

interface IFetchCategoriesFailureAction {
  type: CategoryActionTypes.FETCH_CATEGORY_FAILURE;
  payload: string;
}

export type CategoriesAction = IFetchCategoriesSuccessAction | IFetchCategoriesFailureAction;
