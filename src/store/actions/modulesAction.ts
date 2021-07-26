import { notification } from 'antd';
import ax from '../../settings/axios-glamping';
import { reducersActions, ThunkType } from '../types/reducersActions';
import { IModule } from '../types/reducersTypes';

export const fetchModules = (): ThunkType => {
  return async dispatch => {
    try {
      //контроль типов, получаемых с сервера
      const response = await ax.get<Array<IModule>>('modules');
      dispatch(reducersActions.fetchModules(response.data));
    } catch (error) {
      dispatch(reducersActions.fetchModulesFailure('Ошибка при получении данных'));
      notification.error({
        message: 'Неудача!',
        description: 'Произошла ошибка при получении данных',
      });
    }
  };
};

export const fetchLastFourModules = (): ThunkType => {
  return async dispatch => {
    try {
      const response = await ax.get<Array<IModule>>('modules/last');
      dispatch(reducersActions.fetchLastModules(response.data));
    } catch (error) {
      dispatch(reducersActions.fetchLastModulesFailure('Ошибка при получении данных'));
      notification.error({
        message: 'Неудача!',
        description: 'Произошла ошибка при получении данных',
      });
    }
  };
};
