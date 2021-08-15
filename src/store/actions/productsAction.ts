/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { notification } from 'antd';
import { Dispatch } from 'redux';
import ax from '../../settings/axios-glamping';
import { ProductsAction, ProductsActionTypes } from '../types/productsTypes';

export const fetchNextPages = (currentPage: number, filterOptions: Array<string>) => {
  return async (dispatch: Dispatch<ProductsAction>) => {
    try {
      let queryStr;
      if (filterOptions.length > 0) {
        queryStr = JSON.stringify(filterOptions);
      } else {
        queryStr = '[]';
      }
      const response = await ax.get(`products/pages?page=${currentPage}&queryStr=` + queryStr);
      dispatch({ type: ProductsActionTypes.FETCH_PRODUCTS_SUCCESS, payload: response.data.products });
    } catch (error) {
      console.log(error);
      dispatch({ type: ProductsActionTypes.FETCH_PRODUCTS_FAILURE, payload: 'Ошибка при получении данных' });
      notification.error({
        message: 'Неудача!',
        description: 'Произошла ошибка при получении данных',
      });
    }
  };
};

export const fetchModulesCat = (filterOptions: Array<string>): any => {
  return async (dispatch: Dispatch<ProductsAction>) => {
    try {
      let queryStr;
      if (filterOptions.length > 0) {
        queryStr = JSON.stringify(filterOptions);
      } else {
        queryStr = '[]';
      }
      const response = await ax.get('products/filters?queryStr=' + queryStr);
      dispatch({ type: ProductsActionTypes.FETCH_PRODUCTS_SUCCESS, payload: response.data.products });
      dispatch({ type: ProductsActionTypes.FETCH_STORE_PAGES, payload: response.data.pages });
    } catch (error) {
      dispatch({ type: ProductsActionTypes.FETCH_PRODUCTS_FAILURE, payload: 'Ошибка при получении данных' });
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

export const fetchLastFourProducts = (): any => {
  return async (dispatch: Dispatch<ProductsAction>) => {
    try {
      const response = await ax.get('products/last');
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

export const setFilters = (filters: Array<string>): any => {
  return async (dispatch: Dispatch<ProductsAction>) => {
    dispatch({ type: ProductsActionTypes.SET_FILTERS, payload: filters });
  };
};

export const fetchCurrentProduct = (id: string): any => {
  return async (dispatch: Dispatch<ProductsAction>) => {
    try {
      const response = await ax.get(`products/${id}`);
      dispatch({ type: ProductsActionTypes.FETCH_CURRENT_PRODUCT_SUCCESS, payload: response.data });
    } catch (error) {
      dispatch({ type: ProductsActionTypes.FETCH_CURRENT_PRODUCT_FAILURE, payload: 'Ошибка при получении данных' });
      notification.error({
        message: 'Неудача!',
        description: 'Произошла ошибка при получении данных',
      });
      dispatch({ type: ProductsActionTypes.FETCH_STORE_PAGES_ERROR, payload: 'Ошибка при получении данных' });
      notification.error({
        message: 'Неудача!',
        description: 'Произошла ошибка при получении данных',
      });
    }
  };
};
