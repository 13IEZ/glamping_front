import { IReviewsState, ReviewsAction, ReviewsActionTypes } from '../types/reviewsTypes';

const initialState: IReviewsState = {
  reviews: [],
  pages: '',
  currentPage: 0,
  error: null,
};

const reviewsReducer = (state = initialState, action: ReviewsAction): IReviewsState => {
  switch (action.type) {
    case ReviewsActionTypes.FETCH_STORE_PAGES:
      return { ...state, pages: action.payload };
    case ReviewsActionTypes.FETCH_STORE_PAGES_ERROR:
      return { ...state, error: action.payload };
    case ReviewsActionTypes.FETCH_REVIEWS_SUCCESS: {
      const data: any = action.payload;
      for (let i = 0; i < data.length; i++) {
        data[i].username = data[i].user.username;
      }
      return { ...state, reviews: data, currentPage: 0 };
    }
    case ReviewsActionTypes.FETCH_REVIEWS_FAILURE:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

export default reviewsReducer;
