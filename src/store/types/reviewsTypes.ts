export interface IReview {
  username: string;
  _id: string;
  pros: string;
  cons: string;
  review: string;
  date: any;
  user: any;
  rating: number;
}

export interface Istore {
  items: number;
  pages: number;
  page: number;
  pageSize: number;
  reviews: Array<IReview>;
}

export interface IReviewsState {
  pages: Istore | {};
  reviews: Array<IReview> | [];
  error: null | string;
  currentPage: number;
}

export enum ReviewsActionTypes {
  FETCH_REVIEWS_SUCCESS = 'FETCH_REVIEWS_SUCCESS',
  FETCH_REVIEWS_FAILURE = 'FETCH_REVIEWS_FAILURE',
  FETCH_STORE_PAGES = 'FETCH_STORE_PAGES',
  FETCH_STORE_PAGES_ERROR = 'FETCH_STORE_PAGES_ERROR',
}

interface IFetchStorePagesAction {
  type: ReviewsActionTypes.FETCH_STORE_PAGES;
  payload: Istore;
}

interface IFetchStorePagesErrorAction {
  type: ReviewsActionTypes.FETCH_STORE_PAGES_ERROR;
  payload: string;
}

interface IFetchReviewsSuccessAction {
  type: ReviewsActionTypes.FETCH_REVIEWS_SUCCESS;
  payload: Array<IReview>;
}

interface IFetchReviewsFailureAction {
  type: ReviewsActionTypes.FETCH_REVIEWS_FAILURE;
  payload: string;
}

export type ReviewsAction =
  | IFetchStorePagesAction
  | IFetchStorePagesErrorAction
  | IFetchReviewsSuccessAction
  | IFetchReviewsFailureAction;
