/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { notification } from 'antd';
import { Dispatch } from 'redux';

import ax from '../../settings/axios-glamping';
import { StoreAction, StoreActionTypes } from '../types/storeTypes';

export const fetchStore = (): any => {
  return async (dispatch: Dispatch<StoreAction>) => {
    try {
      const response = await ax.get('store/pages');
      dispatch({ type: StoreActionTypes.FETCH_MODULES_SUCCESS, payload: response.data.modules });
      dispatch({ type: StoreActionTypes.FETCH_STORE_PAGES, payload: response.data.pages });
    } catch (error) {
      dispatch({ type: StoreActionTypes.FETCH_MODULES_FAILURE, payload: 'Ошибка при получении данных' });
      notification.error({
        message: 'Неудача!',
        description: 'Произошла ошибка при получении данных',
      });
      dispatch({ type: StoreActionTypes.FETCH_STORE_PAGES_ERROR, payload: 'Ошибка при получении данных' });
      notification.error({
        message: 'Неудача!',
        description: 'Произошла ошибка при получении данных',
      });
    }
  };
};

export const fetchLastFourModules = (): any => {
  return async (dispatch: Dispatch<StoreAction>) => {
    try {
      const response = await ax.get('store/last');
      dispatch({ type: StoreActionTypes.FETCH_LAST_FOUR_MODULES_SUCCESS, payload: response.data });
    } catch (error) {
      dispatch({ type: StoreActionTypes.FETCH_LAST_FOUR_MODULES_FAILURE, payload: 'Ошибка при получении данных' });
      notification.error({
        message: 'Неудача!',
        description: 'Произошла ошибка при получении данных',
      });
    }
  };
};

export const fetchNextPages = (currentPage: number) => {
  return async (dispatch: Dispatch<StoreAction>) => {
    try {
      const response = await ax.get(`store/pages?page=${currentPage}`);
      dispatch({ type: StoreActionTypes.FETCH_MODULES_SUCCESS, payload: response.data.modules });
    } catch (error) {
      dispatch({ type: StoreActionTypes.FETCH_MODULES_FAILURE, payload: 'Ошибка при получении данных' });
      notification.error({
        message: 'Неудача!',
        description: 'Произошла ошибка при получении данных',
      });
    }
  };
};
