import React, { useEffect } from 'react';
import { Tabs, Col, Divider, Typography } from 'antd';
import ReviewForm from '../../../ReviewForm/ReviewForm';
import { useTypedSelectorHook } from '../../../../hooks/useTypedSelector';
import { useActions } from '../../../../hooks/useAction';
import ReviewItem from './components/ReviewItem';
import './ProductDetailTab.scss';

const { TabPane } = Tabs;
const { Paragraph } = Typography;

interface ICurrentProductProps {
  productId?: string;
  season?: string;
  roominess?: number;
  description?: string;
  factory?: string;
}

const ProductDetailTab: React.FC<ICurrentProductProps> = ({ season, roominess, description, factory, productId }) => {
  switch (season) {
    case 'summer':
      season = 'Лето';
      break;
    case 'winter':
      season = 'Зима';
      break;
    case 'all':
      season = 'Круглый год';
      break;
    default:
      season = 'Нет информации';
  }

  const { user } = useTypedSelectorHook(state => state.users);
  const { reviews } = useTypedSelectorHook(state => state.reviews);
  const { fetchReviews } = useActions();

  useEffect(() => {
    fetchReviews(productId);
  }, []);

  const reviewsList = reviews.map(review => {
    return (
      <Col span={24} style={{ marginBottom: 20 }}>
        <ReviewItem
          key={review._id}
          _id={review._id}
          pros={review.pros}
          cons={review.cons}
          review={review.review}
          date={review.date}
          user={review.username}
          rating={review.rating}
        />
        <Divider />
      </Col>
    );
  });

  return (
    <Tabs defaultActiveKey='1' type='card'>
      <TabPane tab='Отзывы' key='1'>
        {user !== null ? <ReviewForm /> : null}
        {reviewsList.length !== 0 ? (
          <Paragraph>
            {' '}
            {reviewsList} {reviewsList}
          </Paragraph>
        ) : null}
      </TabPane>
      <TabPane tab='Характеристики' key='2'>
        <Paragraph>Сезон: {season}</Paragraph>
        <Paragraph>Вместимость: {roominess}</Paragraph>
        <Paragraph>Описание: {description}</Paragraph>
        <Paragraph>Производитель: {factory}</Paragraph>
      </TabPane>
      <TabPane tab='Условия покупки' key='3'></TabPane>
    </Tabs>
  );
};

export default ProductDetailTab;
