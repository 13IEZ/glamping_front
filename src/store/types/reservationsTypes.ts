import { IAccommodation } from './accommodationsTypes';
import { IPich } from './pichesTypes';
import { IUser } from './users';

export interface IReservation {
  _id: string;
  pich: IPich;
  accommodation: IAccommodation;
  startDate: string;
  endDate: string;
  user: IUser;
}

export interface IReservationsState {
  reservations: Array<IReservation> | [];
  error: null | string;
}

export enum ReservationsActionTypes {
  FETCH_RESERVATIONS_SUCCESS = 'FETCH_RESERVATIONS_SUCCESS',
  FETCH_RESERVATIONS_FAILURE = 'FETCH_RESERVATIONS_FAILURE',
}

interface IFetchAccommodationReservationsSuccessAction {
  type: ReservationsActionTypes.FETCH_RESERVATIONS_SUCCESS;
  payload: Array<IReservation>;
}

interface IFetchAccommodationReservationsFailureAction {
  type: ReservationsActionTypes.FETCH_RESERVATIONS_FAILURE;
  payload: string;
}

export type ReservationsAction =
  | IFetchAccommodationReservationsSuccessAction
  | IFetchAccommodationReservationsFailureAction;
