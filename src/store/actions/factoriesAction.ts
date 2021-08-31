import { notification } from 'antd';
import { Dispatch } from 'redux';

import ax from '../../settings/axios-glamping';
import { FactoriesAction, FactoryActionTypes } from '../types/factoriesTypes';

export const fetchFactories = (): any => {
  return async (dispatch: Dispatch<FactoriesAction>) => {
    try {
      const response = await ax.get('factories');
      dispatch({
        type: FactoryActionTypes.FETCH_FACTORY_SUCCESS,
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: FactoryActionTypes.FETCH_FACTORY_FAILURE,
        payload: 'Ошибка при получении данных',
      });
      notification.error({
        message: 'Неудача!',
        description: 'Произошла ошибка при получении данных',
      });
    }
  };
};
