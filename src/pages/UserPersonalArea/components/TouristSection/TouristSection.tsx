import React, { useEffect } from 'react';
import { Col, Row, Table, Tabs } from 'antd';

import { useTypedSelectorHook } from '../../../../hooks/useTypedSelector';
import { useActions } from '../../../../hooks/useAction';

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
      title: 'Глэмпинг',
      dataIndex: 'accommodation',
      width: 150,
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
  ];

  const adaptiveReservations = reservationsOfUser.map(r => {
    return {
      _id: r._id,
      user: r.user.username,
      accommodation: r.accommodation.title,
      startDate: r.startDate,
      endDate: r.endDate,
    };
  });

  return (
    <Row className='mt-2'>
      <h2>Туристам</h2>
      <Col span={24} className='tabs'>
        <Tabs defaultActiveKey='1' type='card'>
          <TabPane tab='Ваши бырони' key='1'>
            <Table
              columns={columnsOfReservations}
              dataSource={adaptiveReservations}
              pagination={false}
              scroll={{ y: 240 }}
            />
          </TabPane>
          <TabPane tab='Отзывы' key='2'>
            <Table columns={columnsOfReviews} dataSource={reviewsOfUser} pagination={false} scroll={{ y: 240 }} />
          </TabPane>
        </Tabs>
      </Col>
    </Row>
  );
};

export default TouristSection;