/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { notification } from 'antd';
import { Dispatch } from 'redux';

import ax from '../../settings/axios-glamping';
import { AccommodationsAction, AccommodationsActionTypes } from '../types/accommodationsTypes';

export const fetchAccommodations = (currentLocationId: string): any => {
  return async (dispatch: Dispatch<AccommodationsAction>) => {
    try {
      const response = await ax.get(`/accommodations/?location=${currentLocationId}`);
      dispatch({ type: AccommodationsActionTypes.FETCH_ACCOMMODATIONS_SUCCESS, payload: response.data });
    } catch (error) {
      dispatch({
        type: AccommodationsActionTypes.FETCH_ACCOMMODATIONS_FAILURE,
        payload: 'Ошибка при получении данных',
      });
      notification.error({
        message: 'Неудача!',
        description: 'Произошла ошибка при получении данных',
      });
    }
  };
};
