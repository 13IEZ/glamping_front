export interface IAccommodation {
  _id: string;
  title: string;
  productId: string;
  pichId: string;
  startDate: string;
  endDate: string;
  userId: string;
  preview: string;
  rating: number;
  image: Array<string>;
  description: string;
  rent: string;
  status: boolean;
  published: boolean;
  category: string;
  season: string;
  roominess: number;
  electricity: boolean;
  water: boolean;
  road: boolean;
  reviewsQuantity: number;
}

export interface IAccommodationPage {
  items: number;
  pages: number;
  page: number;
  pageSize: number;
  allAccommodations: Array<IAccommodation>;
}

export interface IAccommodationsState {
  accommodations: Array<IAccommodation> | [];
  lastFourAccommodations: Array<IAccommodation> | [];
  currentAccommodation: Partial<IAccommodation>;
  allAccommodations: Array<IAccommodation> | [];
  pages: IAccommodationPage | {};
  currentPage: number;
  filters: Array<string>;
  error: null | string;
}

export enum AccommodationsActionTypes {
  FETCH_ACCOMMODATIONS_SUCCESS = 'FETCH_ACCOMMODATIONS_SUCCESS',
  FETCH_ACCOMMODATIONS_FAILURE = 'FETCH_ACCOMMODATIONS_FAILURE',
  FETCH_LAST_FOUR_ACCOMMODATIONS_SUCCESS = 'FETCH_LAST_FOUR_ACCOMMODATIONS_SUCCESS',
  FETCH_LAST_FOUR_ACCOMMODATIONS_FAILURE = 'FETCH_LAST_FOUR_ACCOMMODATIONS_FAILURE',
  FETCH_CURRENT_ACCOMMODATION_SUCCESS = 'FETCH_CURRENT_ACCOMMODATION_SUCCESS',
  FETCH_CURRENT_ACCOMMODATION_FAILURE = 'FETCH_CURRENT_ACCOMMODATION_FAILURE',
  BOOK_ACCOMMODATION_SUCCESS = 'BOOK_ACCOMMODATION_SUCCESS',
  BOOK_ACCOMMODATION_FAILURE = 'BOOK_ACCOMMODATION_FAILURE',
  FETCH_ALL_ACCOMMODATIONS_SUCCESS = 'FETCH_ALL_ACCOMMODATIONS_SUCCESS',
  FETCH_ALL_ACCOMMODATIONS_FAILURE = 'FETCH_ALL_ACCOMMODATIONS_FAILURE',
  FETCH_ACCOMMODATION_PAGES = 'FETCH_ACCOMMODATION_PAGES',
  FETCH_ACCOMMODATION_PAGES_ERROR = 'FETCH_ACCOMMODATION_PAGES_ERROR',
  SET_ACCOMMODATIONS_FILTERS = 'SET_ACCOMMODATIONS_FILTERS',
}

interface ISetAccommodationsFilters {
  type: AccommodationsActionTypes.SET_ACCOMMODATIONS_FILTERS;
  payload: Array<string>;
}

interface IFetchAccommodationsSuccessAction {
  type: AccommodationsActionTypes.FETCH_ACCOMMODATIONS_SUCCESS;
  payload: Array<IAccommodation>;
}

interface IFetchAccommodationsFailureAction {
  type: AccommodationsActionTypes.FETCH_ACCOMMODATIONS_FAILURE;
  payload: string;
}

interface IFetchLastFourAccommodationsSuccessAction {
  type: AccommodationsActionTypes.FETCH_LAST_FOUR_ACCOMMODATIONS_SUCCESS;
  payload: Array<IAccommodation>;
}

interface IFetchLastFourAccommodationsFailureAction {
  type: AccommodationsActionTypes.FETCH_LAST_FOUR_ACCOMMODATIONS_FAILURE;
  payload: string;
}

interface IFetchCurrentAccommodationSuccessAction {
  type: AccommodationsActionTypes.FETCH_CURRENT_ACCOMMODATION_SUCCESS;
  payload: IAccommodation;
}

interface IFetchCurrentAccommodationFailureAction {
  type: AccommodationsActionTypes.FETCH_CURRENT_ACCOMMODATION_FAILURE;
  payload: string;
}

interface IBookAccommodationSuccessAction {
  type: AccommodationsActionTypes.BOOK_ACCOMMODATION_SUCCESS;
}

interface IBookAccommodationFailureAction {
  type: AccommodationsActionTypes.BOOK_ACCOMMODATION_FAILURE;
  payload: string;
}

interface IFetchAllAccommodationsSuccessAction {
  type: AccommodationsActionTypes.FETCH_ALL_ACCOMMODATIONS_SUCCESS;
  payload: Array<IAccommodation>;
}

interface IFetchAllAccommodationsFailureAction {
  type: AccommodationsActionTypes.FETCH_ALL_ACCOMMODATIONS_FAILURE;
  payload: string;
}

interface IFetchAccommodationPagesAction {
  type: AccommodationsActionTypes.FETCH_ACCOMMODATION_PAGES;
  payload: IAccommodationPage;
}

interface IFetchAccommodationPagesErrorAction {
  type: AccommodationsActionTypes.FETCH_ACCOMMODATION_PAGES_ERROR;
  payload: string;
}

export type AccommodationsAction =
  | IFetchAccommodationsSuccessAction
  | IFetchAccommodationsFailureAction
  | IFetchLastFourAccommodationsSuccessAction
  | IFetchLastFourAccommodationsFailureAction
  | IFetchCurrentAccommodationSuccessAction
  | IFetchCurrentAccommodationFailureAction
  | IBookAccommodationSuccessAction
  | IBookAccommodationFailureAction
  | IFetchAllAccommodationsSuccessAction
  | IFetchAllAccommodationsFailureAction
  | IFetchAccommodationPagesAction
  | IFetchAccommodationPagesErrorAction
  | ISetAccommodationsFilters;
