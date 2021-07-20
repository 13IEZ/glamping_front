export interface ILocation {
  _id: string;
  title: string;
  image: Array<string>;
  description: string;
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
  lastFourLocations: Array<ILocation> | [];
  error: null | string;
}

export enum LocationsActionTypes {
  FETCH_LAST_FOUR_LOCATIONS_SUCCESS = 'FETCH_LAST_FOUR_LOCATIONS_SUCCESS',
  FETCH_LAST_FOUR_LOCATIONS_FAILURE = 'FETCH_LAST_FOUR_LOCATIONS_FAILURE',
}

interface IFetchLastFourLocationsSuccessAction {
  type: LocationsActionTypes.FETCH_LAST_FOUR_LOCATIONS_SUCCESS;
  payload: Array<ILocation>;
}

interface IFetchLastFourLocationsFailureAction {
  type: LocationsActionTypes.FETCH_LAST_FOUR_LOCATIONS_FAILURE;
  payload: string;
}

export type LocationsAction = IFetchLastFourLocationsSuccessAction | IFetchLastFourLocationsFailureAction;
