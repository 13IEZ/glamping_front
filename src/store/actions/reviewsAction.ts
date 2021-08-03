/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { notification } from 'antd';
import { Dispatch } from 'redux';

import ax from '../../settings/axios-glamping';
import { ReviewsAction, ReviewsActionTypes } from '../types/reviewsTypes';

export const fetchReviews = (productId: string): any => {
  return async (dispatch: Dispatch<ReviewsAction>) => {
    try {
      const response = await ax.get(`/reviews/pages?product=${productId}`);
      dispatch({ type: ReviewsActionTypes.FETCH_REVIEWS_SUCCESS, payload: response.data.reviews });
      dispatch({ type: ReviewsActionTypes.FETCH_STORE_PAGES, payload: response.data.pages });
    } catch (error) {
      dispatch({ type: ReviewsActionTypes.FETCH_REVIEWS_FAILURE, payload: 'Ошибка при получении данных' });
      notification.error({
        message: 'Неудача REVIEW!',
        description: 'Произошла ошибка при получении данных',
      });
      dispatch({ type: ReviewsActionTypes.FETCH_STORE_PAGES_ERROR, payload: 'Ошибка при получении данных' });
      notification.error({
        message: 'Неудача PAGES!',
        description: 'Произошла ошибка при получении данных',
      });
    }
  };
};

export const fetchNextPages = (currentPage: number, productId: string) => {
  return async (dispatch: Dispatch<ReviewsAction>) => {
    try {
      const response = await ax.get(`reviews/pages?product=${productId}&page=${currentPage}`);
      dispatch({ type: ReviewsActionTypes.FETCH_REVIEWS_SUCCESS, payload: response.data.reviews });
    } catch (error) {
      dispatch({ type: ReviewsActionTypes.FETCH_REVIEWS_FAILURE, payload: 'Ошибка при получении данных' });
      notification.error({
        message: 'Неудача!',
        description: 'Произошла ошибка при получении данных',
      });
    }
  };
};
