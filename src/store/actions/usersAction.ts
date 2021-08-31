import { notification } from 'antd';
import { CallHistoryMethodAction, push } from 'connected-react-router';
import { Dispatch } from 'redux';

import ax from '../../settings/axios-glamping';
import { UserAction, UserActionTypes } from '../types/users';

export const signInUser = (userData: { email: string; password: string }): any => {
  return async (dispatch: Dispatch<UserAction | CallHistoryMethodAction<[string, unknown?]>>) => {
    try {
      const response = await ax.post('/users/sessions', userData);
      dispatch({ type: UserActionTypes.SIGN_IN_SUCCESS, payload: response.data });
      dispatch(push('/'));
      notification.success({
        message: 'Успех!',
        description: 'Вы удачно авторизовались!',
      });
    } catch (error) {
      dispatch({ type: UserActionTypes.SIGN_IN_ERROR, payload: 'Sign In Error' });
      notification.error({
        message: 'Неудача!',
        description: 'Что-то пошло не так, проверьте заполняемые данные и соеднинение с интернетом!',
      });
    }
  };
};

export const signUpUser = (userData: { email: string; password: string }): any => {
  return async (dispatch: Dispatch<UserAction | CallHistoryMethodAction<[string, unknown?]>>) => {
    try {
      await ax.post('/users', userData);
      dispatch({ type: UserActionTypes.SIGN_UP_SUCCESS });
      dispatch(push('/login'));
      notification.success({
        message: 'Успех!',
        description: 'Вы удачно зарегистрировались!',
      });
    } catch (error) {
      dispatch({ type: UserActionTypes.SIGN_UP_ERROR, payload: 'Sign Up Error' });
      notification.error({
        message: 'Неудача!',
        description: 'Что-то пошло не так, проверьте заполняемые данные и соеднинение с интернетом!',
      });
    }
  };
};

export const logoutUser = (): any => {
  return async (dispatch: Dispatch<UserAction | CallHistoryMethodAction<[string, unknown?]>>) => {
    try {
      await ax.delete('/users/sessions');
      dispatch({ type: UserActionTypes.LOGOUT_USER_SUCCESS });
      dispatch(push('/login'));
      notification.success({
        message: 'Успех!',
        description: 'Вы удачно вышли!',
      });
    } catch (error) {
      dispatch({ type: UserActionTypes.LOGOUT_USER_ERROR, payload: 'Logout Error' });
      notification.error({
        message: 'Неудача!',
        description: 'У вас не получилось выйти, попробуйте позже!',
      });
    }
  };
};
