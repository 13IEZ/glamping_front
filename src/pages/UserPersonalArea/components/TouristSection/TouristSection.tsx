import React, { useEffect } from 'react';

import { Col, Row, Table, Tabs } from 'antd';

import { useActions } from '../../../../hooks/useAction';
import { useTypedSelectorHook } from '../../../../hooks/useTypedSelector';

const { TabPane } = Tabs;

const TouristSection: React.FC = () => {
  const { user } = useTypedSelectorHook(state => state.users);
  const { reservationsOfUser } = useTypedSelectorHook(state => state.reservations);
  const { reviewsOfUser } = useTypedSelectorHook(state => state.reviews);

  const { fetchReservationsOfUser, fetchReviewsOfUser } = useActions();

  useEffect(() => {
    fetchReservationsOfUser(user?._id);

    fetchReviewsOfUser(user?._id);
  }, []);

  const columnsOfReservations = [
    {
      title: 'Размещение',
      dataIndex: 'accommodation',
      width: 300,
    },
    {
      title: 'Начальная дата',
      dataIndex: 'startDate',
      width: 150,
    },
    {
      title: 'Конечная дата',
      dataIndex: 'endDate',
    },
  ];

  const columnsOfReviews = [
    {
      title: 'Коммент',
      dataIndex: 'review',
      width: 300,
    },
    {
      title: 'Плюсы',
      dataIndex: 'pros',
      width: 200,
    },
    {
      title: 'Минусы',
      dataIndex: 'cons',
      width: 200,
    },
    {
      title: 'Размещение',
      dataIndex: 'accommodation',
      width: 200,
    },
  ];

  const adaptiveReservations: any = [];

  reservationsOfUser.forEach(r => {
    if (r.accommodation) {
      const adaptiveReservation = {
        _id: r._id,
        key: r._id,
        user: r.user.username,
        accommodation: r.accommodation.title,
        startDate: r.startDate,
        endDate: r.endDate,
      };

      adaptiveReservations.push(adaptiveReservation);
    }
  });

  const adaptiveReviews: any = [];

  reviewsOfUser.forEach(review => {
    if (review.accommodation) {
      const adaptiveReview = {
        ...review,
        key: review._id,
        accommodation: review.accommodation.title,
      };
      adaptiveReviews.push(adaptiveReview);
    }
  });

  return (
    <Row className='mt-2'>
      <h2>Блок туриста</h2>
      <Col span={24} className='tabs'>
        <Tabs defaultActiveKey='1' type='card'>
          <TabPane tab='Ваши брони' key='1'>
            <Table
              columns={columnsOfReservations}
              dataSource={adaptiveReservations}
              pagination={false}
              scroll={{ y: 240 }}
            />
          </TabPane>
          <TabPane tab='Отзывы' key='2'>
            <Table columns={columnsOfReviews} dataSource={adaptiveReviews} pagination={false} scroll={{ y: 240 }} />
          </TabPane>
        </Tabs>
      </Col>
    </Row>
  );
};

export default TouristSection;
