import { UserState, UserAction, UserActionTypes } from './../types/users';

const initialState: UserState = {
  user: null,
  signUpError: null,
  signInError: null,
  logoutError: null,
};

const reducer = (state = initialState, action: UserAction): UserState => {
  switch (action.type) {
    case UserActionTypes.SIGN_IN_SUCCESS:
      return { ...state, user: action.payload, signInError: null };
    case UserActionTypes.SIGN_IN_ERROR:
      return { ...state, signInError: action.payload };
    case UserActionTypes.SIGN_UP_SUCCESS:
      return { ...state, signUpError: null };
    case UserActionTypes.SIGN_UP_ERROR:
      return { ...state, signUpError: action.payload };
    case UserActionTypes.LOGOUT_USER_SUCCESS:
      return { ...state, logoutError: null, user: null };
    case UserActionTypes.LOGOUT_USER_ERROR:
      return { ...state, logoutError: action.payload };
    default:
      return state;
  }
};

export default reducer;
