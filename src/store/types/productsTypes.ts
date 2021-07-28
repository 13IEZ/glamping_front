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

export interface IProductsState {
  products: Array<IProduct> | [];
  lastFourProducts: Array<IProduct> | [];
  error: null | string;
}

export enum ProductsActionTypes {
  FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS',
  FETCH_PRODUCTS_FAILURE = 'FETCH_PRODUCTS_FAILURE',
  FETCH_LAST_FOUR_PRODUCTS_SUCCESS = 'FETCH_LAST_FOUR_PRODUCTS_SUCCESS',
  FETCH_LAST_FOUR_PRODUCTS_FAILURE = 'FETCH_LAST_OUR_PRODUCTS_FAILURE',
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
  | IFetchProductsSuccessAction
  | IFetchProductsFailureAction
  | IFetchLastFourProductsSuccessAction
  | IFetchLastFourProductsFailureAction;
