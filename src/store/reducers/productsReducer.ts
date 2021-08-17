import { IProductsState, ProductsAction, ProductsActionTypes } from '../types/productsTypes';

const initialState: IProductsState = {
  products: [],
  pages: '',
  currentPage: 0,
  lastFourProducts: [],
  currentProduct: {},
  error: null,
  storeIsOpened: false,
};

const productsReducer = (state = initialState, action: ProductsAction): IProductsState => {
  switch (action.type) {
    case ProductsActionTypes.SET_CURRENT_PAGE:
      return { ...state, currentPage: action.payload };
    case ProductsActionTypes.SET_STORE_IS_OPENED:
      return { ...state, storeIsOpened: action.payload };
    case ProductsActionTypes.FETCH_STORE_PAGES:
      return { ...state, pages: action.payload };
    case ProductsActionTypes.FETCH_STORE_PAGES_ERROR:
      return { ...state, error: action.payload };
    case ProductsActionTypes.FETCH_PRODUCTS_SUCCESS:
      return { ...state, products: action.payload };
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
