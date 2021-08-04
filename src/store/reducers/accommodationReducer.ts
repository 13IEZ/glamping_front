import { IAccommodationsState, AccommodationsAction, AccommodationsActionTypes } from '../types/accommodationsTypes';

const initialState: IAccommodationsState = {
  accommodations: [],
  error: null,
};

const accommodationsReducer = (state = initialState, action: AccommodationsAction): IAccommodationsState => {
  switch (action.type) {
    case AccommodationsActionTypes.FETCH_ACCOMMODATIONS_SUCCESS:
      return { ...state, accommodations: action.payload };
    case AccommodationsActionTypes.FETCH_ACCOMMODATIONS_FAILURE:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

export default accommodationsReducer;
