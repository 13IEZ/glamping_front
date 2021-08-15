import { ILocationsState, LocationsAction, LocationsActionTypes } from '../types/locationsTypes';

const initialState: ILocationsState = {
  locations: [],
  pages: '',
  currentPage: 0,
  lastFourLocations: [],
  currentLocation: {},
  error: null,
};

const locationsReducer = (state = initialState, action: LocationsAction): ILocationsState => {
  switch (action.type) {
    case LocationsActionTypes.FETCH_LOCATION_PAGES:
      return { ...state, pages: action.payload };
    case LocationsActionTypes.FETCH_LOCATION_PAGES_ERROR:
      return { ...state, error: action.payload };
    case LocationsActionTypes.FETCH_LOCATIONS_SUCCESS:
      return { ...state, locations: action.payload, currentPage: 0 };
    case LocationsActionTypes.FETCH_LOCATIONS_FAILURE:
      return { ...state, error: action.payload };
    case LocationsActionTypes.FETCH_LAST_FOUR_LOCATIONS_SUCCESS:
      return { ...state, lastFourLocations: action.payload };
    case LocationsActionTypes.FETCH_LAST_FOUR_LOCATIONS_FAILURE:
      return { ...state, error: action.payload };
    case LocationsActionTypes.FETCH_CURRENT_LOCATION_SUCCESS:
      return { ...state, currentLocation: action.payload };
    case LocationsActionTypes.FETCH_CURRENT_LOCATION_FAILURE:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

export default locationsReducer;
