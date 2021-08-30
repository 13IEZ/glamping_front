import './CurrentAccommodation.scss';

import React, { useEffect } from 'react';

import { Col, Divider, Pagination, Space, Typography } from 'antd';

import { useActions } from '../../hooks/useAction';
import { useTypedSelectorHook } from '../../hooks/useTypedSelector';
import ReviewForm from '../ReviewForm/ReviewForm';
import Calendar from './components/Calendar/Calendar';
import CurrentAccommodationDescription from './components/CurrentAccommodationDescription/CurrentAccommodationDescription';
import CurrentAccommodationGallery from './components/CurrentAccommodationGallery/CurrentAccommodationGallery';
import ReviewItem from './components/ReviewItem/ReviewItem';

const { Paragraph } = Typography;
const { Title } = Typography;

const CurrentAccommodation: React.FC = (props: any) => {
  const idCurrentAccommodation = props.match.params.id;
  const { currentAccommodation } = useTypedSelectorHook(state => state.accommodations);
  const { fetchCurrentAccommodation } = useActions();
  const { accommodationReviews, accommodationReviewPages } = useTypedSelectorHook(state => state.reviews);
  const { fetchAccommodationReviews } = useActions();
  const { fetchNextAccommodationReviewPages } = useActions();
  const { accommodationReservations } = useTypedSelectorHook(state => state.reservations);
  const { fetchAccommodationReservations } = useActions();
  const { user } = useTypedSelectorHook(state => state.users);

  useEffect(() => {
    fetchAccommodationReservations(idCurrentAccommodation);
    fetchCurrentAccommodation(idCurrentAccommodation);
    fetchAccommodationReviews(idCurrentAccommodation);
  }, [idCurrentAccommodation]);

  const reservedDates = accommodationReservations.map(reservation => {
    return { startDate: reservation.startDate, endDate: reservation.endDate };
  });

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
    <div className='container' style={{ paddingTop: 50 }}>
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
        <Space direction='vertical' size={12}>
          <Calendar accommodationId={currentAccommodation._id} reservedDates={reservedDates} />
        </Space>
        <Paragraph>Оставьте комментарий</Paragraph>
        {user !== null && idCurrentAccommodation && <ReviewForm idCurrentAccommodation={idCurrentAccommodation} />}
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
