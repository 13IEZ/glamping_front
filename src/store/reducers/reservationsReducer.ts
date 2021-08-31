import { IReservationsState, ReservationsAction, ReservationsActionTypes } from '../types/reservationsTypes';

const initialState: IReservationsState = {
  accommodationReservations: [],
  pitchReservations: [],
  reservations: [],
  reservationsOfUser: [],
  error: null,
  reservationsOfLandOwner: [],
};

const reservationsReducer = (state = initialState, action: ReservationsAction): IReservationsState => {
  switch (action.type) {
    case ReservationsActionTypes.FETCH_ACCOMMODATION_RESERVATIONS_SUCCESS:
      return { ...state, accommodationReservations: action.payload };
    case ReservationsActionTypes.FETCH_ACCOMMODATION_RESERVATIONS_FAILURE:
      return { ...state, error: action.payload };
    case ReservationsActionTypes.FETCH_PITCH_RESERVATIONS_SUCCESS:
      return { ...state, pitchReservations: action.payload };
    case ReservationsActionTypes.FETCH_PITCH_RESERVATIONS_FAILURE:
      return { ...state, error: action.payload };
    case ReservationsActionTypes.FETCH_RESERVATIONS_SUCCESS:
      return { ...state, reservations: action.payload };
    case ReservationsActionTypes.FETCH_RESERVATIONS_FAILURE:
      return { ...state, error: action.payload };
    case ReservationsActionTypes.FETCH_RESERVATIONS_OF_USER_SUCCESS:
      return { ...state, reservationsOfUser: action.payload };
    case ReservationsActionTypes.FETCH_RESERVATIONS_OF_USER_FAILURE:
      return { ...state, error: action.payload };
    case ReservationsActionTypes.FETCH_RESERVATIONS_OF_LAND_OWNER_SUCCESS:
      return { ...state, reservationsOfLandOwner: action.payload };
    case ReservationsActionTypes.FETCH_RESERVATIONS_OF_LAND_OWNER_FAILURE:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

export default reservationsReducer;
