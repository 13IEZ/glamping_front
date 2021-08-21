import { IPichesState, PichesAction, PichesActionTypes } from '../types/pichesTypes';

const initialState: IPichesState = {
  piches: [],
  lastFourPiches: [],
  currentPitch: {},
  error: null,
};

const pichesReducer = (state = initialState, action: PichesAction): IPichesState => {
  switch (action.type) {
    case PichesActionTypes.FETCH_LAST_FOUR_PICHES_SUCCESS:
      return { ...state, lastFourPiches: action.payload };
    case PichesActionTypes.FETCH_LAST_FOUR_PICHES_FAILURE:
      return { ...state, error: action.payload };
    case PichesActionTypes.FETCH_PICHES_LOCATIONID_SUCCESS:
      return { ...state, piches: action.payload };
    case PichesActionTypes.FETCH_PICHES_LOCATIONID_FAILURE:
      return { ...state, error: action.payload };
    case PichesActionTypes.FETCH_CURRENT_PITCH_SUCCESS:
      return { ...state, currentPitch: action.payload };
    case PichesActionTypes.FETCH_CURRENT_PITCH_FAILURE:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

export default pichesReducer;
