import React from 'react';
import Moment from 'moment';
import { Typography } from 'antd';

import './ReviewItem.scss';

const { Paragraph } = Typography;

interface IReviewItemProps {
  _id: string;
  pros: string;
  cons: string;
  review: string;
  date: any;
  user: string;
  rating: number;
}

const ReviewItem: React.FC<IReviewItemProps> = ({ pros, cons, review, date, user, rating }) => {
  const formatedDate: string = Moment(date).format('DD-MM-YYYY');

  return (
    <div>
      {pros ? <Paragraph> Достоинства: {pros} </Paragraph> : null}
      {cons ? <Paragraph> Недостатки: {cons} </Paragraph> : null}
      <Paragraph> Комментарий: {review} </Paragraph>
      <Paragraph> {formatedDate}</Paragraph>
      <Paragraph className='capitalize'> {user} </Paragraph>
      {rating === 5 ? <span className='rating-five'></span> : null}
      {rating === 4 ? <span className='rating-four'></span> : null}
      {rating === 3 ? <span className='rating-three'></span> : null}
      {rating === 2 ? <span className='rating-two'></span> : null}
      {rating === 1 ? <span className='rating-one'></span> : null}
    </div>
  );
};

export default ReviewItem;
