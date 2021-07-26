import { UserState } from '../types/reducersTypes';
import { ActionsType, ActionTypes } from '../types/reducersActions';

const initialState: UserState = {
  user: null,
  signUpError: null,
  signInError: null,
  logoutError: null,
};

const reducer = (state = initialState, action: ActionsType): UserState => {
  switch (action.type) {
    case ActionTypes.SIGN_IN_SUCCESS:
      return { ...state, user: action.payload, signInError: null };
    case ActionTypes.SIGN_IN_ERROR:
      return { ...state, signInError: action.payload };
    case ActionTypes.SIGN_UP_SUCCESS:
      return { ...state, signUpError: null };
    case ActionTypes.SIGN_UP_ERROR:
      return { ...state, signUpError: action.payload };
    case ActionTypes.LOGOUT_USER_SUCCESS:
      return { ...state, logoutError: null, user: null };
    case ActionTypes.LOGOUT_USER_ERROR:
      return { ...state, logoutError: action.payload };
    default:
      return state;
  }
};

export default reducer;
