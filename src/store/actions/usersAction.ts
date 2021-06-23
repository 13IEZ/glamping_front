import { UserAction, UserActionTypes } from '../types/users';
import ax from '../../settings/axios-glamping';
// import { push } from 'connected-react-router';  еще не придумал как использовать но обязательно надо будет
import { Dispatch } from 'redux';

export const signInUser = (userData: {}): any => {
  return async (dispatch: Dispatch<UserAction>) => {
    try {
      const response = await ax.post('/users/sessions', userData);
      dispatch({ type: UserActionTypes.SIGN_IN_SUCCESS, payload: response.data });
    } catch (error) {
      dispatch({ type: UserActionTypes.SIGN_IN_ERROR, payload: 'Sign In Error' });
    }
  };
};

export const signUpUser = (userData: {}): any => {
  return async (dispatch: Dispatch<UserAction>) => {
    try {
      await ax.post('/users', userData);
      dispatch({ type: UserActionTypes.SIGN_UP_SUCCESS });
    } catch (error) {
      dispatch({ type: UserActionTypes.SIGN_UP_ERROR, payload: 'Sign Up Error' });
    }
  };
};

export const logoutUser = (): any => {
  return async (dispatch: Dispatch<UserAction>) => {
    try {
      await ax.delete('/users/sessions');
      dispatch({ type: UserActionTypes.LOGOUT_USER_SUCCESS });
    } catch (error) {
      dispatch({ type: UserActionTypes.LOGOUT_USER_ERROR, payload: 'Logout Error' });
    }
  };
};
