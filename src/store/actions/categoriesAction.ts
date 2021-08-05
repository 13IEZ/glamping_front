import { Dispatch } from 'redux';
import { notification } from 'antd';

import ax from '../../settings/axios-glamping';
import { CategoriesAction, CategoryActionTypes } from '../types/categoriesTypes';

export const fetchCategories = (): any => {
  return async (dispatch: Dispatch<CategoriesAction>) => {
    try {
      const response = await ax.get('categories');

      dispatch({
        type: CategoryActionTypes.FETCH_CATEGORY_SUCCESS,
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: CategoryActionTypes.FETCH_CATEGORY_FAILURE,
        payload: 'Ошибка при получении данных',
      });

      notification.error({
        message: 'Неудача!',
        description: 'Произошла ошибка при получении данных',
      });
    }
  };
};

export const fetchFactories = (): any => {
  return async (dispatch: Dispatch<CategoriesAction>) => {
    try {
      const response = await ax.get('factories');
      dispatch({
        type: CategoryActionTypes.FETCH_FACTORY_SUCCESS,
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: CategoryActionTypes.FETCH_FACTORY_FAILURE,
        payload: 'Ошибка при получении данных',
      });
      notification.error({
        message: 'Неудача!',
        description: 'Произошла ошибка при получении данных',
      });
    }
  };
};

export const setSortOptions = (fieldName: string, fieldValue: string): any => {
  return async (dispatch: Dispatch<CategoriesAction>) => {
    try {
      dispatch({
        type: CategoryActionTypes.SET_SORT_OPTIONS,
        payload: { fieldName, fieldValue },
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const setFilterOptions = (fieldName: string, fieldValue: string): any => {
  return async (dispatch: Dispatch<CategoriesAction>) => {
    console.log(fieldName, fieldValue);
    try {
      dispatch({
        type: CategoryActionTypes.SET_FILTER_OPTIONS,
        payload: { fieldName, fieldValue },
      });
    } catch (error) {
      console.log(error);
    }
  };
};
