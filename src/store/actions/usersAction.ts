import ax from '../../settings/axios-glamping';
import { push } from 'connected-react-router';
import { notification } from 'antd';
import { reducersActions, ThunkType } from '../types/reducersActions';
import { IUser } from '../types/reducersTypes';

export const signInUser = (userData: { email: string; password: string }): ThunkType => {
  return async dispatch => {
    try {
      const response = await ax.post<IUser>('/users/sessions', userData);
      dispatch(reducersActions.signInSuccess(response.data));
      dispatch(push('/'));
      notification.success({
        message: 'Успех!',
        description: 'Вы удачно авторизовались!',
      });
    } catch (error) {
      dispatch(reducersActions.signInError('Sign In Error'));
      notification.error({
        message: 'Неудача!',
        description: 'Что-то пошло не так, проверьте заполняемые данные и соеднинение с интернетом!',
      });
    }
  };
};

export const signUpUser = (userData: { email: string; password: string }): ThunkType => {
  return async dispatch => {
    try {
      await ax.post('/users', userData);
      dispatch(reducersActions.signUpSuccess());
      dispatch(push('/login'));
      notification.success({
        message: 'Успех!',
        description: 'Вы удачно зарегистрировались!',
      });
    } catch (error) {
      dispatch(reducersActions.signUpError('Sign Up Error'));
      notification.error({
        message: 'Неудача!',
        description: 'Что-то пошло не так, проверьте заполняемые данные и соеднинение с интернетом!',
      });
    }
  };
};

export const logoutUser = (): ThunkType => {
  return async dispatch => {
    try {
      await ax.delete('/users/sessions');
      dispatch(reducersActions.logoutSuccess());
      dispatch(push('/login'));
      notification.success({
        message: 'Успех!',
        description: 'Вы удачно вышли!',
      });
    } catch (error) {
      dispatch(reducersActions.logoutError('Logout Error'));
      notification.error({
        message: 'Неудача!',
        description: 'У вас не получилось выйти, попробуйте позже!',
      });
    }
  };
};
