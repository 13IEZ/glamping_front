/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { notification } from 'antd';
import { Dispatch } from 'redux';

import ax from '../../settings/axios-glamping';
import { AccommodationsAction, AccommodationsActionTypes } from '../types/accommodationsTypes';

// get all accommodations related to current location
export const fetchAccommodations = (currentLocationId: string): any => {
  return async (dispatch: Dispatch<AccommodationsAction>) => {
    try {
      const response = await ax.get(`/accommodations?locationId=${currentLocationId}`);
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

export const fetchLastFourAccommodations = (): any => {
  return async (dispatch: Dispatch<AccommodationsAction>) => {
    try {
      const response = await ax.get('/accommodations/last');
      dispatch({ type: AccommodationsActionTypes.FETCH_LAST_FOUR_ACCOMMODATIONS_SUCCESS, payload: response.data });
    } catch (error) {
      dispatch({
        type: AccommodationsActionTypes.FETCH_LAST_FOUR_ACCOMMODATIONS_FAILURE,
        payload: 'Ошибка при получении данных',
      });
      notification.error({
        message: 'Неудача!',
        description: 'Произошла ошибка при получении данных',
      });
    }
  };
};

export const fetchCurrentAccommodation = (currentAccommodationId: string): any => {
  return async (dispatch: Dispatch<AccommodationsAction>) => {
    try {
      const response = await ax.get(`accommodations/${currentAccommodationId}`);
      dispatch({ type: AccommodationsActionTypes.FETCH_CURRENT_ACCOMMODATION_SUCCESS, payload: response.data });
    } catch (error) {
      dispatch({
        type: AccommodationsActionTypes.FETCH_CURRENT_ACCOMMODATION_FAILURE,
        payload: 'Ошибка при получении данных',
      });
      notification.error({
        message: 'Неудача!',
        description: 'Произошла ошибка при получении данных',
      });
    }
  };
};

export const bookAccommodation = (currentAccommodationId: string, startDay: any, endDay: any): any => {
  return async (dispatch: Dispatch<AccommodationsAction>) => {
    try {
      await ax.put(`accommodations/booked/${currentAccommodationId}?startDay=${startDay}&endDay=${endDay}`);
      dispatch({ type: AccommodationsActionTypes.BOOK_ACCOMMODATION_SUCCESS });
    } catch (error) {
      dispatch({
        type: AccommodationsActionTypes.BOOK_ACCOMMODATION_FAILURE,
        payload: 'Ошибка при отправке данных',
      });
      notification.error({
        message: 'Неудача!',
        description: 'Произошла ошибка при отправке данных',
      });
    }
  };
};
