import { CategoriesAction, CategoryActionTypes, ICategoriesState } from '../types/categoriesTypes';

const initialState: ICategoriesState = {
  categories: [],
  factories: [],
  sortOptions: { fieldName: 'empty', fieldValue: 'empty' },
  filterOptions: { fieldName: 'empty', fieldValue: 'empty' },
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
    case CategoryActionTypes.SET_SORT_OPTIONS:
      return { ...state, sortOptions: action.payload };
    case CategoryActionTypes.SET_FILTER_OPTIONS:
      return { ...state, filterOptions: action.payload };
    default:
      return state;
  }
};

export default categoriesReducer;
