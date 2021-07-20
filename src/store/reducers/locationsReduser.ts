import { ILocationsState, LocationsAction, LocationsActionTypes } from '../types/locationsTypes';

const initialState: ILocationsState = {
  lastFourLocations: [],
  error: null,
};

const locationsReducer = (state = initialState, action: LocationsAction): ILocationsState => {
  switch (action.type) {
    case LocationsActionTypes.FETCH_LAST_FOUR_LOCATIONS_SUCCESS:
      return { ...state, lastFourLocations: action.payload };
    case LocationsActionTypes.FETCH_LAST_FOUR_LOCATIONS_FAILURE:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

export default locationsReducer;
