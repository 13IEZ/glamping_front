import { FactoriesAction, FactoryActionTypes, IFactoriesState } from '../types/factoriesTypes';

const initialState: IFactoriesState = {
  factories: [],
  error: null,
};

const categoriesReducer = (state = initialState, action: FactoriesAction): IFactoriesState => {
  switch (action.type) {
    case FactoryActionTypes.FETCH_FACTORY_SUCCESS:
      return { ...state, factories: action.payload };
    case FactoryActionTypes.FETCH_FACTORY_FAILURE:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

export default categoriesReducer;
