export interface IPich {
  _id: string;
  title: string;
  number: number;
  productId: string;
  locationId: string;
  roominess: number;
  season: string;
  image: Array<string>;
  rent: number;
  free: boolean;
  startDate: string;
  endDate: string;
  userId: string;
  description: string;
  published: boolean;
  rating: number;
  preview: string;
}

export interface IPichesState {
  piches: Array<IPich> | [];
  lastFourPiches: Array<IPich> | [];
  error: null | string;
}

export enum PichesActionTypes {
  FETCH_LAST_FOUR_PICHES_SUCCESS = 'FETCH_LAST_FOUR_PICHES_SUCCESS',
  FETCH_LAST_FOUR_PICHES_FAILURE = 'FETCH_LAST_FOUR_PICHES_FAILURE',
}

interface IFetchLastFourPichesSuccessAction {
  type: PichesActionTypes.FETCH_LAST_FOUR_PICHES_SUCCESS;
  payload: Array<IPich>;
}

interface IFetchLastFourPichesFailureAction {
  type: PichesActionTypes.FETCH_LAST_FOUR_PICHES_FAILURE;
  payload: string;
}

export type PichesAction = IFetchLastFourPichesSuccessAction | IFetchLastFourPichesFailureAction;
