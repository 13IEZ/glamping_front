import { Dispatch } from 'redux';
import { notification } from 'antd';

import ax from '../../settings/axios-glamping';
import { ReservationsAction, ReservationsActionTypes } from '../types/reservationsTypes';

export const fetchAccommodationReservations = (accommodationId: string): any => {
  return async (dispatch: Dispatch<ReservationsAction>) => {
    try {
      const response = await ax.get(`/reservations?accommodation=${accommodationId}`);
      dispatch({ type: ReservationsActionTypes.FETCH_ACCOMMODATION_RESERVATIONS_SUCCESS, payload: response.data });
    } catch (error) {
      dispatch({
        type: ReservationsActionTypes.FETCH_ACCOMMODATION_RESERVATIONS_FAILURE,
        payload: 'Ошибка при получении данных',
      });
      notification.error({
        message: 'Неудача!',
        description: 'Произошла ошибка при получении данных',
      });
    }
  };
};

export const fetchReservations = (): any => {
  return async (dispatch: Dispatch<ReservationsAction>) => {
    try {
      const response = await ax.get('reservations');

      dispatch({
        type: ReservationsActionTypes.FETCH_RESERVATIONS_SUCCESS,
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: ReservationsActionTypes.FETCH_RESERVATIONS_FAILURE,
        payload: 'Ошибка при получении данных',
      });
    }
  };
};

export const createReservation = (reservation: {}): any => {
  return async () => {
    try {
      await ax.post('reservations', reservation);
      notification.success({
        message: 'Успех!',
        description: 'Бронирование прошло успешно!',
      });
    } catch (error) {
      notification.error({
        message: 'Неудача!',
        description: 'Произошла ошибка при бронировании!',
      });
    }
  };
};

export const fetchReservationsOfUser = (id: string): any => {
  return async (dispatch: Dispatch<ReservationsAction>) => {
    try {
      const response = await ax.get('reservations?user=' + id);
      dispatch({
        type: ReservationsActionTypes.FETCH_RESERVATIONS_OF_USER_SUCCESS,
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: ReservationsActionTypes.FETCH_RESERVATIONS_OF_USER_FAILURE,
        payload: 'Ошибка при получении данных',
      });

      notification.error({
        message: 'Неудача!',
        description: 'Произошла ошибка при получении данных',

      
