import { IModulesState, ModulesAction, ModulesActionTypes } from '../types/modulesTypes';

const initialState: IModulesState = {
  modules: [],
  lastFourModules: [],
  currentModule: [],
  error: null,
};

const modulesReducer = (state = initialState, action: ModulesAction): IModulesState => {
  switch (action.type) {
    case ModulesActionTypes.FETCH_MODULES_SUCCESS:
      return { ...state, modules: action.payload };
    case ModulesActionTypes.FETCH_MODULES_FAILURE:
      return { ...state, error: action.payload };
    case ModulesActionTypes.FETCH_LAST_FOUR_MODULES_SUCCESS:
      return { ...state, lastFourModules: action.payload };
    case ModulesActionTypes.FETCH_LAST_FOUR_MODULES_FAILURE:
      return { ...state, error: action.payload };
    case ModulesActionTypes.FETCH_MODULE_SUCCESS:
      return { ...state, currentModule: action.payload };
    case ModulesActionTypes.FETCH_MODULE_FAILURE:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

export default modulesReducer;
