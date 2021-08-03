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

export interface IPage {
  items: number;
  pages: number;
  page: number;
  reviews: Array<IReview>;
}

export interface IReviewsState {
  pages: IPage | {};
  reviews: Array<IReview> | [];
  error: null | string;
  currentPage: number;
}

export enum ReviewsActionTypes {
  FETCH_REVIEWS_SUCCESS = 'FETCH_REVIEWS_SUCCESS',
  FETCH_REVIEWS_FAILURE = 'FETCH_REVIEWS_FAILURE',
  FETCH_REVIEW_PAGES = 'FETCH_REVIEW_PAGES',
  FETCH_REVIEW_PAGES_ERROR = 'FETCH_REVIEW_PAGES_ERROR',
}

interface IFetchReviewPagesAction {
  type: ReviewsActionTypes.FETCH_REVIEW_PAGES;
  payload: IPage;
}

interface IFetchReviewPagesErrorAction {
  type: ReviewsActionTypes.FETCH_REVIEW_PAGES_ERROR;
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
  | IFetchReviewPagesAction
  | IFetchReviewPagesErrorAction
  | IFetchReviewsSuccessAction
  | IFetchReviewsFailureAction;
