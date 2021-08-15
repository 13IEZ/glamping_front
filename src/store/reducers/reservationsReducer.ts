import { IReservationsState, ReservationsAction, ReservationsActionTypes } from '../types/reservationsTypes';

const initialState: IReservationsState = {
  accommodationReservations: [],
  error: null,
};

const reservationsReducer = (state = initialState, action: ReservationsAction): IReservationsState => {
  switch (action.type) {
    case ReservationsActionTypes.FETCH_ACCOMMODATION_RESERVATIONS_SUCCESS:
      return { ...state, accommodationReservations: action.payload };
    case ReservationsActionTypes.FETCH_ACCOMMODATION_RESERVATIONS_FAILURE:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

export default reservationsReducer;
