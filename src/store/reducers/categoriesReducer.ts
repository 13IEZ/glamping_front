import { CategoriesAction, CategoryActionTypes, ICategoriesState } from '../types/categoriesTypes';

const initialState: ICategoriesState = {
  categories: [],
  factories: [],
  error: null,
};

const categoriesReducer = (state = initialState, action: CategoriesAction): ICategoriesState => {
  switch (action.type) {
    case CategoryActionTypes.FETCH_CATEGORY_SUCCESS:
      return { ...state, categories: action.payload };
    case CategoryActionTypes.FETCH_CATEGORY_FAILURE:
      return { ...state, error: action.payload };
    case CategoryActionTypes.FETCH_FACTORY_SUCCESS:
      return { ...state, factories: action.payload };
    case CategoryActionTypes.FETCH_FACTORY_FAILURE:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

export default categoriesReducer;
