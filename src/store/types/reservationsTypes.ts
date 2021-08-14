export interface IReservation {
  _id: string;
  pich: string;
  accommodation: string;
  startDate: any;
  endDate: any;
  user: any;
}

export interface IReservationsState {
  reservations: Array<IReservation> | [];
  error: null | string;
}

export enum ReservationsActionTypes {
  FETCH_RESERVATIONS_SUCCESS = 'FETCH_RESERVATIONS_SUCCESS',
  FETCH_RESERVATIONS_FAILURE = 'FETCH_RESERVATIONS_FAILURE',
}

interface IFetchReservationsSuccessAction {
  type: ReservationsActionTypes.FETCH_RESERVATIONS_SUCCESS;
  payload: Array<IReservation>;
}

interface IFetchReservationsFailureAction {
  type: ReservationsActionTypes.FETCH_RESERVATIONS_FAILURE;
  payload: string;
}

export type ReservationsAction = IFetchReservationsSuccessAction | IFetchReservationsFailureAction;
