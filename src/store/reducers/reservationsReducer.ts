import { IReservationsState, ReservationsAction, ReservationsActionTypes } from '../types/reservationsTypes';

const initialState: IReservationsState = {
  reservations: [],
  error: null,
};

const reservationsReducer = (state = initialState, action: ReservationsAction): IReservationsState => {
  switch (action.type) {
    case ReservationsActionTypes.FETCH_RESERVATIONS_SUCCESS:
      return { ...state, reservations: action.payload };
    case ReservationsActionTypes.FETCH_RESERVATIONS_FAILURE:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

export default reservationsReducer;
