import { Dispatch } from 'redux';
import { notification } from 'antd';

import ax from '../../settings/axios-glamping';
import { ModulesAction, ModulesActionTypes } from '../types/modulesTypes';

export const fetchModules = (): any => {
  return async (dispatch: Dispatch<ModulesAction>) => {
    try {
      const response = await ax.get('modules');
      dispatch({ type: ModulesActionTypes.FETCH_MODULES_SUCCESS, payload: response.data });

      notification.success({
        message: 'Успех!',
        description: 'Данные успешно получены!',
      });
    } catch (error) {
      dispatch({ type: ModulesActionTypes.FETCH_MODULES_FAILURE, payload: 'Ошибка при получении данных' });
      notification.error({
        message: 'Неудача!',
        description: 'Произошла ошибка при получении данных',
      });
    }
  };
};
