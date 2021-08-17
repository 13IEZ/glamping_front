import { IReviewsState, ReviewsAction, ReviewsActionTypes } from '../types/reviewsTypes';

const initialState: IReviewsState = {
  reviews: [],
  reviewsOfUser: [],
  accommodationReviews: [],
  pages: '',
  accommodationReviewPages: '',
  currentPage: 0,
  currentAccommodationReviewPage: 0,
  error: null,
};

const reviewsReducer = (state = initialState, action: ReviewsAction): IReviewsState => {
  switch (action.type) {
    case ReviewsActionTypes.FETCH_REVIEW_PAGES:
      return { ...state, pages: action.payload };
    case ReviewsActionTypes.FETCH_REVIEW_PAGES_ERROR:
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

    case ReviewsActionTypes.FETCH_REVIEWS_OF_USER_SUCCESS:
      return { ...state, reviewsOfUser: action.payload };

    case ReviewsActionTypes.FETCH_REVIEWS_OF_USER_FAILURE:
      return { ...state, error: action.payload };

    case ReviewsActionTypes.FETCH_ACCOMMODATION_REVIEWS_SUCCESS: {
      const data: any = action.payload;
      for (let i = 0; i < data.length; i++) {
        data[i].username = data[i].user.username;
      }
      return { ...state, accommodationReviews: data, currentAccommodationReviewPage: 0 };
    }
    case ReviewsActionTypes.FETCH_ACCOMMODATION_REVIEWS_FAILURE:
      return { ...state, error: action.payload };

    case ReviewsActionTypes.FETCH_ACCOMMODATION_REVIEW_PAGES:
      return { ...state, accommodationReviewPages: action.payload };
    case ReviewsActionTypes.FETCH_ACCOMMODATION_REVIEW_PAGES_ERROR:
      return { ...state, error: action.payload };

    default:
      return state;
  }
};

export default reviewsReducer;
