import { IReservationsState, ReservationsAction, ReservationsActionTypes } from '../types/reservationsTypes';

const initialState: IReservationsState = {
  accommodationReservations: [],
  reservations: [],
  reservationsOfUser: [],
  error: null,
};

const reservationsReducer = (state = initialState, action: ReservationsAction): IReservationsState => {
  switch (action.type) {
    case ReservationsActionTypes.FETCH_ACCOMMODATION_RESERVATIONS_SUCCESS:
      return { ...state, accommodationReservations: action.payload };
    case ReservationsActionTypes.FETCH_ACCOMMODATION_RESERVATIONS_FAILURE:
      return { ...state, error: action.payload };
    case ReservationsActionTypes.FETCH_RESERVATIONS_SUCCESS:
      return { ...state, reservations: action.payload };
    case ReservationsActionTypes.FETCH_RESERVATIONS_FAILURE:
      return { ...state, error: action.payload };
    case ReservationsActionTypes.FETCH_RESERVATIONS_OF_USER_SUCCESS:
      return { ...state, reservationsOfUser: action.payload };
    case ReservationsActionTypes.FETCH_RESERVATIONS_OF_USER_FAILURE:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

export default reservationsReducer;
