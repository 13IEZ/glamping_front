import { Dispatch } from 'redux';
import { notification } from 'antd';

import ax from '../../settings/axios-glamping';
import { LocationsAction, LocationsActionTypes } from '../types/locationsTypes';

export const fetchLocations = (): any => {
  return async (dispatch: Dispatch<LocationsAction>) => {
    try {
      const response = await ax.get('locations/pages');
      dispatch({ type: LocationsActionTypes.FETCH_LOCATIONS_SUCCESS, payload: response.data.locations });
      dispatch({ type: LocationsActionTypes.FETCH_LOCATION_PAGES, payload: response.data.pages });
    } catch (error) {
      dispatch({ type: LocationsActionTypes.FETCH_LOCATIONS_FAILURE, payload: 'Ошибка при получении данных' });
      notification.error({
        message: 'Неудача!',
        description: 'Произошла ошибка при получении данных',
      });
      dispatch({ type: LocationsActionTypes.FETCH_LOCATION_PAGES_ERROR, payload: 'Ошибка при получении данных' });
      notification.error({
        message: 'Неудача!',
        description: 'Произошла ошибка при получении данных',
      });
    }
  };
};

export const fetchNextLocationPages = (currentPage: number): any => {
  return async (dispatch: Dispatch<LocationsAction>) => {
    try {
      const response = await ax.get(`locations/pages?page=${currentPage}`);
      dispatch({ type: LocationsActionTypes.FETCH_LOCATIONS_SUCCESS, payload: response.data.locations });
    } catch (error) {
      dispatch({ type: LocationsActionTypes.FETCH_LOCATIONS_FAILURE, payload: 'Ошибка при получении данных' });
      notification.error({
        message: 'Неудача!',
        description: 'Произошла ошибка при получении данных',
      });
    }
  };
};

export const fetchLastFourLocations = (): any => {
  return async (dispatch: Dispatch<LocationsAction>) => {
    try {
      const response = await ax.get('locations/last');
      dispatch({ type: LocationsActionTypes.FETCH_LAST_FOUR_LOCATIONS_SUCCESS, payload: response.data });
    } catch (error) {
      dispatch({
        type: LocationsActionTypes.FETCH_LAST_FOUR_LOCATIONS_FAILURE,
        payload: 'Ошибка при получении данных',
      });
      notification.error({
        message: 'Неудача!',
        description: 'Произошла ошибка при получении данных',
      });
    }
  };
};

export const fetchCurrentLocation = (currentLocationId: string): any => {
  return async (dispatch: Dispatch<LocationsAction>) => {
    try {
      const response = await ax.get(`locations/${currentLocationId}`);
      dispatch({ type: LocationsActionTypes.FETCH_CURRENT_LOCATION_SUCCESS, payload: response.data });
    } catch (error) {
      dispatch({ type: LocationsActionTypes.FETCH_CURRENT_LOCATION_FAILURE, payload: 'Ошибка при получении данных' });
      notification.error({
        message: 'Неудача!',
        description: 'Произошла ошибка при получении данных',
      });
    }
  };
};
