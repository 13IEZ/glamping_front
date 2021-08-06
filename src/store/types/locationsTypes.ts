export interface ILocation {
  _id: string;
  coords: [number, number] | [];
  title: string;
  description: string;
  region: string;
  image: Array<string>;
  square: number;
  rent: number;
  status: boolean;
  electricity: boolean;
  water: boolean;
  road: boolean;
  published: boolean;
  owner: string;
}

export interface ILocationsState {
  locations: Array<ILocation> | [];
  lastFourLocations: Array<ILocation> | [];
  currentLocation: Partial<ILocation>;
  error: null | string;
}

export enum LocationsActionTypes {
  FETCH_LOCATIONS_SUCCESS = 'FETCH_LOCATIONS_SUCCESS',
  FETCH_LOCATIONS_FAILURE = 'FETCH_LOCATIONS_FAILURE',
  FETCH_LAST_FOUR_LOCATIONS_SUCCESS = 'FETCH_LAST_FOUR_LOCATIONS_SUCCESS',
  FETCH_LAST_FOUR_LOCATIONS_FAILURE = 'FETCH_LAST_FOUR_LOCATIONS_FAILURE',
  FETCH_CURRENT_LOCATION_SUCCESS = 'FETCH_CURRENT_LOCATION_SUCCESS',
  FETCH_CURRENT_LOCATION_FAILURE = 'FETCH_CURRENT_LOCATION_FAILURE',
}

interface IFetchLocationsSuccessAction {
  type: LocationsActionTypes.FETCH_LOCATIONS_SUCCESS;
  payload: Array<ILocation>;
}

interface IFetchLocationsFailureAction {
  type: LocationsActionTypes.FETCH_LOCATIONS_FAILURE;
  payload: string;
}

interface IFetchLastFourLocationsSuccessAction {
  type: LocationsActionTypes.FETCH_LAST_FOUR_LOCATIONS_SUCCESS;
  payload: Array<ILocation>;
}

interface IFetchLastFourLocationsFailureAction {
  type: LocationsActionTypes.FETCH_LAST_FOUR_LOCATIONS_FAILURE;
  payload: string;
}

interface IFetchCurrentLocationSuccessAction {
  type: LocationsActionTypes.FETCH_CURRENT_LOCATION_SUCCESS;
  payload: ILocation;
}

interface IFetchCurrentLocationFailureAction {
  type: LocationsActionTypes.FETCH_CURRENT_LOCATION_FAILURE;
  payload: string;
}

export type LocationsAction =
  | IFetchLocationsSuccessAction
  | IFetchLocationsFailureAction
  | IFetchLastFourLocationsSuccessAction
  | IFetchLastFourLocationsFailureAction
  | IFetchCurrentLocationSuccessAction
  | IFetchCurrentLocationFailureAction;
