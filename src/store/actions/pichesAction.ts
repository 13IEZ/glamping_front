import { Dispatch } from 'redux';
import ax from '../../settings/axios-glamping';
import { notification } from 'antd';
import { PichesAction, PichesActionTypes } from '../types/pichesTypes';

export const fetchLastFourPiches = (): any => {
  return async (dispatch: Dispatch<PichesAction>) => {
    try {
      const response = await ax.get('piches/last');
      dispatch({ type: PichesActionTypes.FETCH_LAST_FOUR_PICHES_SUCCESS, payload: response.data });
    } catch (error) {
      dispatch({ type: PichesActionTypes.FETCH_LAST_FOUR_PICHES_FAILURE, payload: 'Ошибка при получении данных' });
      notification.error({
        message: 'Неудача!',
        description: 'Произошла ошибка при получении данных',
      });
    }
  };
};
