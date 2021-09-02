import { notification } from 'antd';
import { Dispatch } from 'redux';

import ax from '../../settings/axios-glamping';
import { ApplicationsAction, ApplicationsActionTypes } from '../types/applicationsTypes';

export const fetchApplications = (): any => {
  return async (dispatch: Dispatch<ApplicationsAction>) => {
    try {
      const response = await ax.get('applications');

      dispatch({
        type: ApplicationsActionTypes.FETCH_APPLICATIONS_SUCCESS,
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: ApplicationsActionTypes.FETCH_APPLICATIONS_FAILURE,
        payload: 'Ошибка при получении данных',
      });

      notification.error({
        message: 'Неудача!',
        description: 'Произошла ошибка при получении данных',
      });
    }
  };
};

export const fetchCurrentApplication = (id: string): any => {
  return async (dispatch: Dispatch<ApplicationsAction>) => {
    try {
      const response = await ax.get(`applications/${id}`);
      dispatch({ type: ApplicationsActionTypes.FETCH_CURRENT_APPLICATION_SUCCESS, payload: response.data });
    } catch (error) {
      dispatch({
        type: ApplicationsActionTypes.FETCH_CURRENT_APPLICATION_FAILURE,
        payload: 'Ошибка при получении данных',
      });
      notification.error({
        message: 'Неудача!',
        description: 'Произошла ошибка при получении данных',
      });
    }
  };
};

export const createApplication = (state: {}): any => {
  return async () => {
    try {
      await ax.post('applications', state);
      notification.success({
        message: 'Успех!',
        description: 'Заявка успешно создана!',
      });
    } catch (error) {
      notification.error({
        message: 'Неудача!',
        description: 'Произошла ошибка при создании заявки!',
      });
    }
  };
};
