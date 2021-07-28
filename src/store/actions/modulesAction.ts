import { Dispatch } from 'redux';
import { notification } from 'antd';

import ax from '../../settings/axios-glamping';
import { ModulesAction, ModulesActionTypes } from '../types/modulesTypes';

export const fetchModules = (sort: string, order: string): any => {
  return async (dispatch: Dispatch<ModulesAction>) => {
    try {
      let response;
      if (sort) {
        response = await ax.get('modules?sort=' + sort + '&order=' + order);
      } else {
        response = await ax.get('modules');
      }
      dispatch({ type: ModulesActionTypes.FETCH_MODULES_SUCCESS, payload: response.data });
    } catch (error) {
      dispatch({ type: ModulesActionTypes.FETCH_MODULES_FAILURE, payload: 'Ошибка при получении данных' });
      notification.error({
        message: 'Неудача!',
        description: 'Произошла ошибка при получении данных',
      });
    }
  };
};

export const fetchLastFourModules = (sort: string, order: string): any => {
  return async (dispatch: Dispatch<ModulesAction>) => {
    try {
      let response;
      if (sort) {
        response = await ax.get('modules?sort=' + sort + '&order=' + order);
      } else {
        response = await ax.get('modules');
      }
      dispatch({ type: ModulesActionTypes.FETCH_LAST_FOUR_MODULES_SUCCESS, payload: response.data });
    } catch (error) {
      dispatch({ type: ModulesActionTypes.FETCH_LAST_FOUR_MODULES_FAILURE, payload: 'Ошибка при получении данных' });
      notification.error({
        message: 'Неудача!',
        description: 'Произошла ошибка при получении данных',
      });
    }
  };
};

export const fetchModule = (id: string): any => {
  return async (dispatch: Dispatch<ModulesAction>) => {
    try {
      const response = await ax.get(`modules/${id}`);
      dispatch({ type: ModulesActionTypes.FETCH_MODULE_SUCCESS, payload: response.data });
    } catch (error) {
      dispatch({ type: ModulesActionTypes.FETCH_MODULE_FAILURE, payload: 'Ошибка при получении данных' });
      notification.error({
        message: 'Неудача!',
        description: 'Произошла ошибка при получении данных',
      });
    }
  };
};
