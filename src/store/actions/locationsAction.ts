import { Dispatch } from 'redux';
import { notification } from 'antd';

import ax from '../../settings/axios-glamping';
import { LocationsAction, LocationsActionTypes } from '../types/locationsTypes';

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
