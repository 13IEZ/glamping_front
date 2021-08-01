import { IProductsState, ProductsAction, ProductsActionTypes } from '../types/productsTypes';

const initialState: IProductsState = {
  products: [],
  pages: '',
  currentPage: 0,
  lastFourProducts: [],
  currentProduct: {},
  error: null,
};

const productsReducer = (state = initialState, action: ProductsAction): IProductsState => {
  switch (action.type) {
    case ProductsActionTypes.FETCH_STORE_PAGES:
      return { ...state, pages: action.payload };
    case ProductsActionTypes.FETCH_STORE_PAGES_ERROR:
      return { ...state, error: action.payload };
    case ProductsActionTypes.FETCH_PRODUCTS_SUCCESS:
      return { ...state, products: action.payload, currentPage: 0 };
    case ProductsActionTypes.FETCH_PRODUCTS_FAILURE:
      return { ...state, error: action.payload };
    case ProductsActionTypes.FETCH_LAST_FOUR_PRODUCTS_SUCCESS:
      return { ...state, lastFourProducts: action.payload };
    case ProductsActionTypes.FETCH_LAST_FOUR_PRODUCTS_FAILURE:
      return { ...state, error: action.payload };
    case ProductsActionTypes.FETCH_CURRENT_PRODUCT_SUCCESS:
      return { ...state, currentProduct: action.payload };
    case ProductsActionTypes.FETCH_CURRENT_PRODUCT_FAILURE:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

export default productsReducer;
