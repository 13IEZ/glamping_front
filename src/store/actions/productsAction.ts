import { Dispatch } from 'redux';
import { notification } from 'antd';

import ax from '../../settings/axios-glamping';
import { ProductsAction, ProductsActionTypes } from '../types/productsTypes';

export const fetchProducts = (sort: string, order: string): any => {
  return async (dispatch: Dispatch<ProductsAction>) => {
    try {
      let response;
      if (sort) {
        response = await ax.get('products?sort=' + sort + '&order=' + order);
      } else {
        response = await ax.get('products');
      }
      dispatch({ type: ProductsActionTypes.FETCH_PRODUCTS_SUCCESS, payload: response.data });
    } catch (error) {
      dispatch({ type: ProductsActionTypes.FETCH_PRODUCTS_FAILURE, payload: 'Ошибка при получении данных' });
      notification.error({
        message: 'Неудача!',
        description: 'Произошла ошибка при получении данных',
      });
    }
  };
};

export const fetchProductsByCategory = (id: string): any => {
  return async (dispatch: Dispatch<ProductsAction>) => {
    try {
      const response = await ax.get('products/category/' + id);
      dispatch({ type: ProductsActionTypes.FETCH_PRODUCTS_SUCCESS, payload: response.data });
    } catch (error) {
      dispatch({ type: ProductsActionTypes.FETCH_PRODUCTS_FAILURE, payload: 'Ошибка при получении данных' });
      notification.error({
        message: 'Неудача!',
        description: 'Произошла ошибка при получении данных',
      });
    }
  };
};

export const fetchLastFourProducts = (sort: string, order: string): any => {
  return async (dispatch: Dispatch<ProductsAction>) => {
    try {
      let response;
      if (sort) {
        response = await ax.get('products?sort=' + sort + '&order=' + order);
      } else {
        response = await ax.get('products');
      }
      dispatch({ type: ProductsActionTypes.FETCH_LAST_FOUR_PRODUCTS_SUCCESS, payload: response.data });
    } catch (error) {
      dispatch({ type: ProductsActionTypes.FETCH_LAST_FOUR_PRODUCTS_FAILURE, payload: 'Ошибка при получении данных' });
      notification.error({
        message: 'Неудача!',
        description: 'Произошла ошибка при получении данных',
      });
    }
  };
};
