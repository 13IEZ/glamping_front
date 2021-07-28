import { IStoreState, StoreAction, StoreActionTypes } from '../types/storeTypes';

const initialState: IStoreState = {
  modules: [],
  pages: '',
  currentPage: 0,
  lastFourModules: [],
  error: null,
};

const storeReducer = (state = initialState, action: StoreAction): IStoreState => {
  switch (action.type) {
    case StoreActionTypes.FETCH_STORE_PAGES:
      return { ...state, pages: action.payload };
    case StoreActionTypes.FETCH_STORE_PAGES_ERROR:
      return { ...state, error: action.payload };
    case StoreActionTypes.FETCH_MODULES_SUCCESS:
      return { ...state, modules: action.payload, currentPage: 0 };
    case StoreActionTypes.FETCH_MODULES_FAILURE:
      return { ...state, error: action.payload };
    case StoreActionTypes.FETCH_LAST_FOUR_MODULES_SUCCESS:
      return { ...state, lastFourModules: action.payload };
    case StoreActionTypes.FETCH_LAST_FOUR_MODULES_FAILURE:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

export default storeReducer;
