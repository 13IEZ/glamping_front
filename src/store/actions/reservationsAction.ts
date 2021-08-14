import { Dispatch } from 'redux';
import { notification } from 'antd';

import ax from '../../settings/axios-glamping';
import { ReservationsAction, ReservationsActionTypes } from '../types/reservationsTypes';

export const fetchReservations = (accommodationId: string): any => {
  return async (dispatch: Dispatch<ReservationsAction>) => {
    try {
      const response = await ax.get(`/reservations?accommodation=${accommodationId}`);
      dispatch({ type: ReservationsActionTypes.FETCH_RESERVATIONS_SUCCESS, payload: response.data });
    } catch (error) {
      dispatch({
        type: ReservationsActionTypes.FETCH_RESERVATIONS_FAILURE,
        payload: 'Ошибка при получении данных',
      });
      notification.error({
        message: 'Неудача!',
        description: 'Произошла ошибка при получении данных',
      });
    }
  };
};
