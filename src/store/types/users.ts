export enum UserActionTypes {
  SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS',
  SIGN_UP_ERROR = 'SIGN_UP_ERROR',

  SIGN_IN_SUCCESS = 'SIGN_IN_SUCCESS',
  SIGN_IN_ERROR = 'SIGN_IN_ERROR',

  LOGOUT_USER = 'LOGOUT_USER',
}

export interface IUser {
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
}

interface SignUpSuccess {
  type: UserActionTypes.SIGN_IN_SUCCESS;
  payload: null | IUser;
}

export type UserAction = SignUpSuccess;
