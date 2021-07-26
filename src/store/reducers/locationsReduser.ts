import { ILocationsState } from '../types/reducersTypes';
import { ActionsType, ActionTypes } from '../types/reducersActions';

const initialState: ILocationsState = {
  lastFourLocations: [],
  error: null,
};

const locationsReducer = (state = initialState, action: ActionsType): ILocationsState => {
  switch (action.type) {
    case ActionTypes.FETCH_LAST_FOUR_LOCATIONS_SUCCESS:
      return { ...state, lastFourLocations: action.payload };
    case ActionTypes.FETCH_LAST_FOUR_LOCATIONS_FAILURE:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

export default locationsReducer;
