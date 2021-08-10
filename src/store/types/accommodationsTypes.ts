export interface IAccommodation {
  _id: string;
  title: string;
  productId: string;
  pichId: string;
  startDate: string;
  endDate: string;
  userId: string;
  preview: string;
  rating: number;
  image: Array<string>;
  description: string;
  rent: string;
  status: boolean;
  published: boolean;
  categoryId: any;
}

export interface IAccommodationsState {
  accommodations: Array<IAccommodation> | [];
  lastFourAccommodations: Array<IAccommodation> | [];
  error: null | string;
}

export enum AccommodationsActionTypes {
  FETCH_ACCOMMODATIONS_SUCCESS = 'FETCH_ACCOMMODATIONS_SUCCESS',
  FETCH_ACCOMMODATIONS_FAILURE = 'FETCH_ACCOMMODATIONS_FAILURE',
  FETCH_LAST_FOUR_ACCOMMODATIONS_SUCCESS = 'FETCH_LAST_FOUR_ACCOMMODATIONS_SUCCESS',
  FETCH_LAST_FOUR_ACCOMMODATIONS_FAILURE = 'FETCH_LAST_FOUR_ACCOMMODATIONS_FAILURE',
}

interface IFetchAccommodationsSuccessAction {
  type: AccommodationsActionTypes.FETCH_ACCOMMODATIONS_SUCCESS;
  payload: Array<IAccommodation>;
}

interface IFetchAccommodationsFailureAction {
  type: AccommodationsActionTypes.FETCH_ACCOMMODATIONS_FAILURE;
  payload: string;
}

interface IFetchLastFourAccommodationsSuccessAction {
  type: AccommodationsActionTypes.FETCH_LAST_FOUR_ACCOMMODATIONS_SUCCESS;
  payload: Array<IAccommodation>;
}

interface IFetchLastFourAccommodationsFailureAction {
  type: AccommodationsActionTypes.FETCH_LAST_FOUR_ACCOMMODATIONS_FAILURE;
  payload: string;
}

export type AccommodationsAction =
  | IFetchAccommodationsSuccessAction
  | IFetchAccommodationsFailureAction
  | IFetchLastFourAccommodationsSuccessAction
  | IFetchLastFourAccommodationsFailureAction;
