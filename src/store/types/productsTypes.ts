export interface IFactory {
  _id: string;
  title: string;
}

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
  price: string;
  published: boolean;
  factoryId: IFactory;
  reviewsQuantity: number;
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
  currentProduct: Partial<IProduct>;
  filters: Array<string>;
}

export enum ProductsActionTypes {
  FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS',
  FETCH_PRODUCTS_FAILURE = 'FETCH_PRODUCTS_FAILURE',
  FETCH_LAST_FOUR_PRODUCTS_SUCCESS = 'FETCH_LAST_FOUR_PRODUCTS_SUCCESS',
  FETCH_LAST_FOUR_PRODUCTS_FAILURE = 'FETCH_LAST_FOUR_PRODUCTS_FAILURE',
  FETCH_STORE_PAGES = 'FETCH_STORE_PAGES',
  FETCH_STORE_PAGES_ERROR = 'FETCH_STORE_PAGES_ERROR',
  FETCH_CURRENT_PRODUCT_SUCCESS = 'FETCH_CURRENT_PRODUCT_SUCCESS',
  FETCH_CURRENT_PRODUCT_FAILURE = 'FETCH_CURRENT_PRODUCT_FAILURE',
  SET_FILTERS = 'SET_FILTERS',
}

interface ISetFilters {
  type: ProductsActionTypes.SET_FILTERS;
  payload: Array<string>;
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

interface IFetchCurrentProductSuccessAction {
  type: ProductsActionTypes.FETCH_CURRENT_PRODUCT_SUCCESS;
  payload: IProduct;
}

interface IFetchCurrentProductFailureAction {
  type: ProductsActionTypes.FETCH_CURRENT_PRODUCT_FAILURE;
  payload: string;
}

export type ProductsAction =
  | IFetchStorePagesAction
  | IFetchStorePagesErrorAction
  | IFetchProductsSuccessAction
  | IFetchProductsFailureAction
  | IFetchLastFourProductsSuccessAction
  | IFetchLastFourProductsFailureAction
  | IFetchCurrentProductSuccessAction
  | IFetchCurrentProductFailureAction
  | ISetFilters;
