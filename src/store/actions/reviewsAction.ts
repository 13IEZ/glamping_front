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
      dispatch({ type: ReviewsActionTypes.FETCH_REVIEW_PAGES, payload: response.data.pages });
    } catch (error) {
      dispatch({ type: ReviewsActionTypes.FETCH_REVIEWS_FAILURE, payload: 'Ошибка при получении данных' });
      notification.error({
        message: 'Неудача!',
        description: 'Произошла ошибка при получении данных',
      });
      dispatch({ type: ReviewsActionTypes.FETCH_REVIEW_PAGES_ERROR, payload: 'Ошибка при получении данных' });
      notification.error({
        message: 'Неудача!',
        description: 'Произошла ошибка при получении данных',
      });
    }
  };
};

export const fetchReviewsOfUser = (userId: string): any => {
  return async (dispatch: Dispatch<ReviewsAction>) => {
    try {
      const response = await ax.get(`/reviews?user=${userId}`);
      dispatch({
        type: ReviewsActionTypes.FETCH_REVIEWS_OF_USER_SUCCESS,
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: ReviewsActionTypes.FETCH_REVIEWS_OF_USER_FAILURE,
        payload: 'Ошибка при получении данных',
      });
      notification.error({
        message: 'Неудача!',
        description: 'Произошла ошибка при получении данных',
      });
    }
  };
};

export const fetchNextReviewPages = (currentPage: number, productId: string) => {
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

export const createReview = (state: any) => {
  return async () => {
    try {
      await ax.post('reviews', state);
      notification.success({
        message: 'Успех!',
        description: 'Комментарий успешно создан!',
      });
    } catch (error) {
      notification.error({
        message: 'Неудача!',
        description: 'Произошла ошибка при создании комментария!',
      });
    }
  };
};

export const fetchAccommodationReviews = (accommodationId: string): any => {
  return async (dispatch: Dispatch<ReviewsAction>) => {
    try {
      const response = await ax.get(`/reviews/pages?accommodation=${accommodationId}`);
      dispatch({
        type: ReviewsActionTypes.FETCH_ACCOMMODATION_REVIEWS_SUCCESS,
        payload: response.data.accommodationReviews,
      });
      dispatch({
        type: ReviewsActionTypes.FETCH_ACCOMMODATION_REVIEW_PAGES,
        payload: response.data.accommodationReviewPages,
      });
    } catch (error) {
      dispatch({
        type: ReviewsActionTypes.FETCH_ACCOMMODATION_REVIEWS_FAILURE,
        payload: 'Ошибка при получении данных',
      });
      notification.error({
        message: 'Неудача!',
        description: 'Произошла ошибка при получении данных',
      });
      dispatch({
        type: ReviewsActionTypes.FETCH_ACCOMMODATION_REVIEW_PAGES_ERROR,
        payload: 'Ошибка при получении данных',
      });
      notification.error({
        message: 'Неудача!',
        description: 'Произошла ошибка при получении данных',
      });
    }
  };
};

export const fetchNextAccommodationReviewPages = (currentPage: number, accommodationId: string) => {
  return async (dispatch: Dispatch<ReviewsAction>) => {
    try {
      const response = await ax.get(`reviews/pages?accommodation=${accommodationId}&page=${currentPage}`);
      dispatch({
        type: ReviewsActionTypes.FETCH_ACCOMMODATION_REVIEWS_SUCCESS,
        payload: response.data.accommodationReviews,
      });
    } catch (error) {
      dispatch({
        type: ReviewsActionTypes.FETCH_ACCOMMODATION_REVIEWS_FAILURE,
        payload: 'Ошибка при получении данных',
      });
      notification.error({
        message: 'Неудача!',
        description: 'Произошла ошибка при получении данных',
      });
    }
  };
};
