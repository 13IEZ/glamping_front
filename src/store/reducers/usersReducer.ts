import { UserState, UserAction, UserActionTypes } from './../types/users';

const initialState: UserState = {
  user: null,
  signUpError: null,
  signInError: null,
};

const reducer = (state = initialState, action: UserAction): UserState => {
  switch (action.type) {
    case UserActionTypes.SIGN_IN_SUCCESS:
      return { ...state, user: action.payload, signInError: null };
    default:
      return state;
  }
};

export default reducer;
