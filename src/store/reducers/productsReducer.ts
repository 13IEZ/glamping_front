import { IProductsState, ProductsAction, ProductsActionTypes } from '../types/productsTypes';

const initialState: IProductsState = {
  products: [],
  lastFourProducts: [],
  error: null,
};

const productsReducer = (state = initialState, action: ProductsAction): IProductsState => {
  switch (action.type) {
    case ProductsActionTypes.FETCH_PRODUCTS_SUCCESS:
      return { ...state, products: action.payload };
    case ProductsActionTypes.FETCH_PRODUCTS_FAILURE:
      return { ...state, error: action.payload };
    case ProductsActionTypes.FETCH_LAST_FOUR_PRODUCTS_SUCCESS:
      return { ...state, lastFourProducts: action.payload };
    case ProductsActionTypes.FETCH_LAST_FOUR_PRODUCTS_FAILURE:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

export default productsReducer;
