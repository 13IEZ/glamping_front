import { IAccommodation } from './accommodationsTypes';
import { IPich } from './pichesTypes';
import { IUser } from './users';

export interface IReservation {
  _id: string;
  accommodation: IAccommodation;
  pich: IPich;
  user: IUser;
  startDate: string;
  endDate: string;
}

export interface IReservationsState {
  reservations: Array<IReservation> | [];
  reservationsOfUser: Array<IReservation> | [];
  error: null | string;
}

export enum ReservationsActionTypes {
  FETCH_RESERVATIONS_SUCCESS = 'FETCH_RESERVATIONS_SUCCESS',
  FETCH_RESERVATIONS_FAILURE = 'FETCH_RESERVATIONS_FAILURE',
  FETCH_RESERVATIONS_OF_USER_SUCCESS = 'FETCH_RESERVATIONS_OF_USER_SUCCESS',
  FETCH_RESERVATIONS_OF_USER_FAILURE = 'FETCH_RESERVATIONS_OF_USER_FAILURE',
}

interface IFetchReservationsSuccessAction {
  type: ReservationsActionTypes.FETCH_RESERVATIONS_SUCCESS;
  payload: Array<IReservation>;
}

interface IFetchReservationsFailureAction {
  type: ReservationsActionTypes.FETCH_RESERVATIONS_FAILURE;
  payload: string;
}

interface IFetchReservationsOfUserSuccessAction {
  type: ReservationsActionTypes.FETCH_RESERVATIONS_OF_USER_SUCCESS;
  payload: Array<IReservation>;
}

interface IFetchReservationsOfUserFailureAction {
  type: ReservationsActionTypes.FETCH_RESERVATIONS_OF_USER_FAILURE;
  payload: string;
}

export type ReservationsAction =
  | IFetchReservationsSuccessAction
  | IFetchReservationsFailureAction
  | IFetchReservationsOfUserSuccessAction
  | IFetchReservationsOfUserFailureAction;
