import React, { useEffect } from 'react';
import { Col, Button, Space, DatePicker, Typography, Divider, Pagination } from 'antd';
import { useActions } from '../../hooks/useAction';
import { useTypedSelectorHook } from '../../hooks/useTypedSelector';
import CurrentAccommodationGallery from './components/CurrentAccommodationGallery/CurrentAccommodationGallery';
import CurrentAccommodationDescription from './components/CurrentAccommodationDescription/CurrentAccommodationDescription';
import ReviewItem from './components/ReviewItem/ReviewItem';
import './CurrentAccommodation.scss';

const { RangePicker } = DatePicker;
const { Paragraph } = Typography;
const { Title } = Typography;

const CurrentAccommodation: React.FC = (props: any) => {
  const idCurrentAccommodation = props.match.params.id;
  const { currentAccommodation } = useTypedSelectorHook(state => state.accommodations);
  const { fetchCurrentAccommodation } = useActions();
  const { accommodationReviews, accommodationReviewPages } = useTypedSelectorHook(state => state.reviews);
  const { fetchAccommodationReviews } = useActions();
  const { fetchNextAccommodationReviewPages } = useActions();

  useEffect(() => {
    fetchCurrentAccommodation(idCurrentAccommodation);
    fetchAccommodationReviews(idCurrentAccommodation);
  }, [idCurrentAccommodation]);

  const onChange = (pageNumber: number) => {
    fetchNextAccommodationReviewPages(pageNumber - 1, idCurrentAccommodation);
  };

  const totalPages = Number(accommodationReviewPages) * 10;

  const reviewsList = accommodationReviews.map(review => {
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
    <div className='container' style={{ backgroundColor: '#e5e5e5', paddingTop: 50 }}>
      <CurrentAccommodationGallery images={currentAccommodation.image ? currentAccommodation.image : []} />
      <div className='current-accommodation'>
        <CurrentAccommodationDescription
          title={currentAccommodation.title}
          description={currentAccommodation.description}
          rating={currentAccommodation.rating}
          season={currentAccommodation.season}
          roominess={currentAccommodation.roominess}
          electricity={currentAccommodation.electricity}
          road={currentAccommodation.road}
          water={currentAccommodation.water}
        />

        <div className='datePicker'>
          <Space direction='vertical' size={12}>
            <RangePicker />
          </Space>
          <Button className='item__button' style={{ marginTop: 20 }}>
            Бронировать
          </Button>
        </div>
        <Title level={4}>Отзывы {currentAccommodation.reviewsQuantity}</Title>
        {reviewsList.length !== 0 ? (
          <>
            <Paragraph>
              {reviewsList}
              {reviewsList}
            </Paragraph>
          </>
        ) : null}
        <div className='pagination'>
          {reviewsList.length !== 0 ? <Pagination total={totalPages} onChange={onChange} /> : null}
        </div>
      </div>
    </div>
  );
};

export default CurrentAccommodation;
