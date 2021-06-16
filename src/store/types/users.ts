export enum UserActionTypes {
  SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS',
  SIGN_UP_ERROR = 'SIGN_UP_ERROR',

  SIGN_IN_SUCCESS = 'SIGN_IN_SUCCESS',
  SIGN_IN_ERROR = 'SIGN_IN_ERROR',

  LOGOUT_USER = 'LOGOUT_USER',
}

export interface UserState {
  user: null | [];
  signUpError: null | {};
  signInError: null | {};
}

interface SignUpSuccess {
  type: UserActionTypes.SIGN_IN_SUCCESS;
  payload: null | [];
}

export type UserAction = SignUpSuccess;
