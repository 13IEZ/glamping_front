export interface IProduct {
  _id: string;
  title: string;
  categoryId: string;
  userId: string;
  season: string;
  preview: string;
  rating: number;
  image: Array<string>;
  roominess: number;
  description: string;
  price: {
    $numberDecimal: string;
  };
  published: boolean;
  factory: string;
}

export interface Istore {
  items: number;
  pages: number;
  page: number;
  pageSize: number;
  products: Array<IProduct>;
}

export interface IProductsState {
  pages: Istore | {};
  products: Array<IProduct> | [];
  lastFourProducts: Array<IProduct> | [];
  error: null | string;
  currentPage: number;
}

export enum ProductsActionTypes {
  FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS',
  FETCH_PRODUCTS_FAILURE = 'FETCH_PRODUCTS_FAILURE',
  FETCH_LAST_FOUR_PRODUCTS_SUCCESS = 'FETCH_LAST_FOUR_PRODUCTS_SUCCESS',
  FETCH_LAST_FOUR_PRODUCTS_FAILURE = 'FETCH_LAST_FOUR_PRODUCTS_FAILURE',
  FETCH_STORE_PAGES = 'FETCH_STORE_PAGES',
  FETCH_STORE_PAGES_ERROR = 'FETCH_STORE_PAGES_ERROR',
}

interface IFetchStorePagesAction {
  type: ProductsActionTypes.FETCH_STORE_PAGES;
  payload: Istore;
}

interface IFetchStorePagesErrorAction {
  type: ProductsActionTypes.FETCH_STORE_PAGES_ERROR;
  payload: string;
}

interface IFetchProductsSuccessAction {
  type: ProductsActionTypes.FETCH_PRODUCTS_SUCCESS;
  payload: Array<IProduct>;
}

interface IFetchProductsFailureAction {
  type: ProductsActionTypes.FETCH_PRODUCTS_FAILURE;
  payload: string;
}

interface IFetchLastFourProductsSuccessAction {
  type: ProductsActionTypes.FETCH_LAST_FOUR_PRODUCTS_SUCCESS;
  payload: Array<IProduct>;
}

interface IFetchLastFourProductsFailureAction {
  type: ProductsActionTypes.FETCH_LAST_FOUR_PRODUCTS_FAILURE;
  payload: string;
}

export type ProductsAction =
  | IFetchStorePagesAction
  | IFetchStorePagesErrorAction
  | IFetchProductsSuccessAction
  | IFetchProductsFailureAction
  | IFetchLastFourProductsSuccessAction
  | IFetchLastFourProductsFailureAction;
