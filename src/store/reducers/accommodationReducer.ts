import { IAccommodationsState, AccommodationsAction, AccommodationsActionTypes } from '../types/accommodationsTypes';

const initialState: IAccommodationsState = {
  accommodations: [],
  lastFourAccommodations: [],
  currentAccommodation: {},
  error: null,
};

const accommodationsReducer = (state = initialState, action: AccommodationsAction): IAccommodationsState => {
  switch (action.type) {
    case AccommodationsActionTypes.FETCH_ACCOMMODATIONS_SUCCESS:
      return { ...state, accommodations: action.payload };
    case AccommodationsActionTypes.FETCH_ACCOMMODATIONS_FAILURE:
      return { ...state, error: action.payload };
    case AccommodationsActionTypes.FETCH_LAST_FOUR_ACCOMMODATIONS_SUCCESS:
      return { ...state, lastFourAccommodations: action.payload };
    case AccommodationsActionTypes.FETCH_LAST_FOUR_ACCOMMODATIONS_FAILURE:
      return { ...state, error: action.payload };
    case AccommodationsActionTypes.FETCH_CURRENT_ACCOMMODATION_SUCCESS: {
      const data: any = action.payload;
      data.season = data.productId.season;
      data.roominess = data.productId.roominess;
      data.water = data.pichId.locationId.water;
      data.road = data.pichId.locationId.road;
      data.electricity = data.pichId.locationId.electricity;
      return { ...state, currentAccommodation: data };
    }
    case AccommodationsActionTypes.FETCH_CURRENT_ACCOMMODATION_FAILURE:
      return { ...state, error: action.payload };
    case AccommodationsActionTypes.BOOK_ACCOMMODATION_SUCCESS:
      return { ...state, error: null };
    case AccommodationsActionTypes.BOOK_ACCOMMODATION_FAILURE:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

export default accommodationsReducer;
