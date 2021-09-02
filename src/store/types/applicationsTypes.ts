import { IUser } from './users';

export interface IPich {
  _id: string;
  numer: string;
}

export interface IApplication {
  _id: string;
  title: string;
  pichId: IPich;
  startDate: string;
  endDate: string;
  userId: IUser;
  rating: number;
  image: Array<string>;
  description: string;
  rent: string;
  status: boolean;
  published: boolean;
  reviewsQuantity: number;
}

export interface IApplicationsState {
  applications: Array<IApplication> | [];
  currentApplication: Partial<IApplication>;
  error: null | string;
}

export enum ApplicationsActionTypes {
  FETCH_APPLICATIONS_SUCCESS = 'FETCH_APPLICATIONS_SUCCESS',
  FETCH_APPLICATIONS_FAILURE = 'FETCH_APPLICATIONS_FAILURE',
  FETCH_CURRENT_APPLICATION_SUCCESS = 'FETCH_CURRENT_APPLICATION_SUCCESS',
  FETCH_CURRENT_APPLICATION_FAILURE = 'FETCH_CURRENT_APPLICATION_FAILURE',
}

interface IFetchApplicationsSuccessAction {
  type: ApplicationsActionTypes.FETCH_APPLICATIONS_SUCCESS;
  payload: Array<IApplication>;
}

interface IFetchApplicationsFailureAction {
  type: ApplicationsActionTypes.FETCH_APPLICATIONS_FAILURE;
  payload: string;
}

interface IFetchCurrentApplicationSuccessAction {
  type: ApplicationsActionTypes.FETCH_CURRENT_APPLICATION_SUCCESS;
  payload: IApplication;
}

interface IFetchCurrentApplicationFailureAction {
  type: ApplicationsActionTypes.FETCH_CURRENT_APPLICATION_FAILURE;
  payload: string;
}

export type ApplicationsAction =
  | IFetchApplicationsSuccessAction
  | IFetchApplicationsFailureAction
  | IFetchCurrentApplicationSuccessAction
  | IFetchCurrentApplicationFailureAction;
