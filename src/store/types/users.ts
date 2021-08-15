export enum UserActionTypes {
  SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS',
  SIGN_UP_ERROR = 'SIGN_UP_ERROR',

  SIGN_IN_SUCCESS = 'SIGN_IN_SUCCESS',
  SIGN_IN_ERROR = 'SIGN_IN_ERROR',

  LOGOUT_USER_SUCCESS = 'LOGOUT_USER_SUCCESS',
  LOGOUT_USER_ERROR = 'LOGOUT_USER_ERROR',
}

export interface IUser {
  _id: string;
  username: string;
  token: string;
  role: string;
  phone: string;
  email: string;
  description: string;
}

export interface UserState {
  user: null | IUser;
  signUpError: null | string;
  signInError: null | string;
  logoutError: null | string;
}

interface SignUpSuccess {
  type: UserActionTypes.SIGN_UP_SUCCESS;
}

interface SignUpError {
  type: UserActionTypes.SIGN_UP_ERROR;
  payload: string;
}

interface SignInSuccess {
  type: UserActionTypes.SIGN_IN_SUCCESS;
  payload: IUser;
}

interface SignInError {
  type: UserActionTypes.SIGN_IN_ERROR;
  payload: string;
}

interface LogoutSuccess {
  type: UserActionTypes.LOGOUT_USER_SUCCESS;
}

interface LogoutError {
  type: UserActionTypes.LOGOUT_USER_ERROR;
  payload: string;
}

export type UserAction = SignUpSuccess | SignUpError | SignInSuccess | SignInError | LogoutSuccess | LogoutError;
