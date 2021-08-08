import React, { useEffect } from 'react';
import { Tabs, Col, Divider, Typography, Pagination } from 'antd';
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
  reviewsQuantity?: number;
}

const ProductDetailTab: React.FC<ICurrentProductProps> = ({
  season,
  roominess,
  description,
  factory,
  productId,
  reviewsQuantity,
}) => {
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
  const { reviews, pages } = useTypedSelectorHook(state => state.reviews);
  const { fetchReviews } = useActions();
  const { fetchNextReviewPages } = useActions();

  useEffect(() => {
    fetchReviews(productId);
  }, [productId]);

  const onChange = (pageNumber: number) => {
    fetchNextReviewPages(pageNumber - 1, productId);
  };

  const totalPages = Number(pages) * 10;

  const reviewsList = reviews.map(review => {
    return (
      <Col key={review._id} span={24} style={{ marginBottom: 20 }}>
        <ReviewItem
          _id={review._id}
          pros={review.pros}
          cons={review.cons}
          review={review.review}
          date={review.date}
          user={review.user.username}
          rating={review.rating}
        />
        <Divider />
      </Col>
    );
  });

  return (
    <Tabs defaultActiveKey='1' type='card'>
      <TabPane tab={<>Отзывы ({reviewsQuantity})</>} key='1'>
        {user !== null && productId && <ReviewForm productId={productId} />}

        {reviewsList.length !== 0 ? (
          <>
            <Paragraph>
              {reviewsList}
              {reviewsList}
              {reviewsList}
              {reviewsList}
            </Paragraph>
          </>
        ) : null}
        <div className='pagination'>
          {reviewsList.length !== 0 ? (
            <Pagination total={totalPages} onChange={onChange} />
          ) : (
            <Paragraph>Отзывов пока нет</Paragraph>
          )}
        </div>
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
