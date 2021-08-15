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
  accommodationReservations: Array<IReservation> | [];
  accommodation: IAccommodation;
  pich: IPich;
  user: IUser;
  startDate: string;
  endDate: string;
  reservations: Array<IReservation> | [];
  reservationsOfUser: Array<IReservation> | [];
  error: null | string;
}

export enum ReservationsActionTypes {
  FETCH_ACCOMMODATION_RESERVATIONS_SUCCESS = 'FETCH_ACCOMMODATION_RESERVATIONS_SUCCESS',
  FETCH_ACCOMMODATION_RESERVATIONS_FAILURE = 'FETCH_ACCOMMODATION_RESERVATIONS_FAILURE',
  FETCH_RESERVATIONS_SUCCESS = 'FETCH_RESERVATIONS_SUCCESS',
  FETCH_RESERVATIONS_FAILURE = 'FETCH_RESERVATIONS_FAILURE',
  FETCH_RESERVATIONS_OF_USER_SUCCESS = 'FETCH_RESERVATIONS_OF_USER_SUCCESS',
  FETCH_RESERVATIONS_OF_USER_FAILURE = 'FETCH_RESERVATIONS_OF_USER_FAILURE',
}

interface IFetchAccommodationReservationsSuccessAction {
  type: ReservationsActionTypes.FETCH_ACCOMMODATION_RESERVATIONS_SUCCESS;
  payload: Array<IReservation>;
}

interface IFetchAccommodationReservationsFailureAction {
  type: ReservationsActionTypes.FETCH_ACCOMMODATION_RESERVATIONS_FAILURE;
  payload: Array<IReservation>;
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
  | IFetchAccommodationReservationsSuccessAction
  | IFetchAccommodationReservationsFailureAction
  | IFetchReservationsSuccessAction
  | IFetchReservationsFailureAction
  | IFetchReservationsOfUserSuccessAction
  | IFetchReservationsOfUserFailureAction;

