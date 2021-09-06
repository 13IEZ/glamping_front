/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { notification } from 'antd';
import { Dispatch } from 'redux';

import ax from '../../settings/axios-glamping';
import { AccommodationsAction, AccommodationsActionTypes } from '../types/accommodationsTypes';

export const fetchAccommodationsCat = (filterOptions: Array<string>): any => {
  return async (dispatch: Dispatch<AccommodationsAction>) => {
    try {
      let queryStr;
      if (filterOptions.length > 0) {
        queryStr = JSON.stringify(filterOptions);
      } else {
        queryStr = '[]';
      }
      const response = await ax.get('accommodations/filters?queryStr=' + queryStr);
      dispatch({
        type: AccommodationsActionTypes.FETCH_ACCOMMODATIONS_SUCCESS,
        payload: response.data.allAccommodations,
      });
      dispatch({ type: AccommodationsActionTypes.FETCH_ACCOMMODATION_PAGES, payload: response.data.pages });
      dispatch({ type: AccommodationsActionTypes.SET_CURRENT_PAGE, payload: 1 });
    } catch (error) {
      dispatch({
        type: AccommodationsActionTypes.FETCH_ACCOMMODATIONS_FAILURE,
        payload: 'Ошибка при получении данных',
      });
    }
  };
};

export const fetchNextAccommodationPages = (currentPage: number, filterOptions: Array<string>): any => {
  return async (dispatch: Dispatch<AccommodationsAction>) => {
    try {
      let queryStr;
      if (filterOptions.length > 0) {
        queryStr = JSON.stringify(filterOptions);
      } else {
        queryStr = '[]';
      }
      const response = await ax.get(`accommodations/pages?page=${currentPage}&queryStr=` + queryStr);
      dispatch({
        type: AccommodationsActionTypes.FETCH_ACCOMMODATIONS_SUCCESS,
        payload: response.data.allAccommodations,
      });
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

export const bookAccommodation = (currentAccommodationId: string, startDate: any, endDate: any): any => {
  return async (dispatch: Dispatch<AccommodationsAction>) => {
    try {
      await ax.put(`accommodations/booked/${currentAccommodationId}?startDate=${startDate}&endDate=${endDate}`);
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
