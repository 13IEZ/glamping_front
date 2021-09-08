import './PreviewForm.scss';

import React, { useState } from 'react';

import { Button, Form, Input, Rate } from 'antd';

import { useActions } from '../../hooks/useAction';

interface IReviewFormProps {
  productId?: string;
  idCurrentAccommodation?: string;
}

const ReviewForm: React.FC<IReviewFormProps> = ({ productId, idCurrentAccommodation }) => {
  const { createReview, fetchReviews, fetchAccommodationReviews } = useActions();

  const [state, setState] = useState({
    review: '',
    pros: '',
    cons: '',
    rating: 1,
    product: productId,
    accommodation: idCurrentAccommodation,
  });

  const [rating, setRating] = useState(1);

  const submitFormHandler = async () => {
    await createReview(state, productId || idCurrentAccommodation);

    setState({
      review: '',
      pros: '',
      cons: '',
      rating: 1,
      product: productId,
      accommodation: idCurrentAccommodation,
    });

    setRating(1);

    if (productId) {
      fetchReviews(productId);
    } else if (idCurrentAccommodation) {
      fetchAccommodationReviews(idCurrentAccommodation);
    }
  };

  const inputChangeHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setState(prevState => ({ ...prevState, [name]: value }));
  };

  const ratingChangeHandler = (value: number) => {
    if (value === 0) return;
    setState(prevState => ({ ...prevState, rating: value }));
    setRating(value);
  };

  return (
    <Form name='nest-messages' onFinish={submitFormHandler}>
      <Form.Item>
        <Input.TextArea
          name='review'
          required={true}
          onChange={inputChangeHandler}
          value={state.review}
          placeholder='Комментарий'
        />
      </Form.Item>
      <Form.Item>
        <Input.TextArea name='pros' onChange={inputChangeHandler} value={state.pros} placeholder='Достоинства' />
      </Form.Item>
      <Form.Item>
        <Input.TextArea name='cons' onChange={inputChangeHandler} value={state.cons} placeholder='Недостатки' />
      </Form.Item>
      <span>
        <Rate className='rate' onChange={ratingChangeHandler} value={rating} />
      </span>
      <Form.Item>
        <Button className='review_button' htmlType='submit'>
          Оставить отзыв
        </Button>
      </Form.Item>
    </Form>
  );
};

export default ReviewForm;
