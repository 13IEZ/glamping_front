import { notification } from 'antd';
import ax from '../../settings/axios-glamping';
import { reducersActions, ThunkType } from '../types/reducersActions';
import { ILocation } from '../types/reducersTypes';

export const fetchLastFourLocations = (): ThunkType => {
  return async dispatch => {
    try {
      const response = await ax.get<Array<ILocation>>('locations/last');
      dispatch(reducersActions.fetchLastFourLocations(response.data));
    } catch (error) {
      dispatch(reducersActions.fetchLastFourLocationsFailure('Ошибка при получении данных'));
      notification.error({
        message: 'Неудача!',
        description: 'Произошла ошибка при получении данных',
      });
    }
  };
};
