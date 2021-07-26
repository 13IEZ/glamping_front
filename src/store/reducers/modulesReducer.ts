import { IModulesState } from '../types/reducersTypes';
import { ActionsType, ActionTypes } from '../types/reducersActions';

const initialState: IModulesState = {
  modules: [],
  lastFourModules: [],
  error: null,
};

const modulesReducer = (state = initialState, action: ActionsType): IModulesState => {
  switch (action.type) {
    case ActionTypes.FETCH_MODULES_SUCCESS:
      return { ...state, modules: action.payload };
    case ActionTypes.FETCH_MODULES_FAILURE:
      return { ...state, error: action.payload };
    case ActionTypes.FETCH_LAST_FOUR_MODULES_SUCCESS:
      return { ...state, lastFourModules: action.payload };
    case ActionTypes.FETCH_LAST_FOUR_MODULES_FAILURE:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

export default modulesReducer;
