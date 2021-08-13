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

export interface ILocationPage {
  items: number;
  locationPages: number;
  page: number;
  pageSize: number;
  locations: Array<ILocation>;
}

export interface ILocationsState {
  locations: Array<ILocation> | [];
  lastFourLocations: Array<ILocation> | [];
  currentLocation: Partial<ILocation>;
  pages: ILocationPage | {};
  currentPage: number;
  error: null | string;
}

export enum LocationsActionTypes {
  FETCH_LOCATIONS_SUCCESS = 'FETCH_LOCATIONS_SUCCESS',
  FETCH_LOCATIONS_FAILURE = 'FETCH_LOCATIONS_FAILURE',
  FETCH_LAST_FOUR_LOCATIONS_SUCCESS = 'FETCH_LAST_FOUR_LOCATIONS_SUCCESS',
  FETCH_LAST_FOUR_LOCATIONS_FAILURE = 'FETCH_LAST_FOUR_LOCATIONS_FAILURE',
  FETCH_CURRENT_LOCATION_SUCCESS = 'FETCH_CURRENT_LOCATION_SUCCESS',
  FETCH_CURRENT_LOCATION_FAILURE = 'FETCH_CURRENT_LOCATION_FAILURE',
  FETCH_LOCATION_PAGES = 'FETCH_LOCATION_PAGES',
  FETCH_LOCATION_PAGES_ERROR = 'FETCH_LOCATION_PAGES_ERROR',
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

interface IFetchLocationPagesAction {
  type: LocationsActionTypes.FETCH_LOCATION_PAGES;
  payload: ILocationPage;
}

interface IFetchLocationPagesErrorAction {
  type: LocationsActionTypes.FETCH_LOCATION_PAGES_ERROR;
  payload: string;
}

export type LocationsAction =
  | IFetchLocationsSuccessAction
  | IFetchLocationsFailureAction
  | IFetchLastFourLocationsSuccessAction
  | IFetchLastFourLocationsFailureAction
  | IFetchCurrentLocationSuccessAction
  | IFetchCurrentLocationFailureAction
  | IFetchLocationPagesAction
  | IFetchLocationPagesErrorAction;
