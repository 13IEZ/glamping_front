import React, { useEffect } from 'react';
import { Col, Row, Table } from 'antd';

import { useTypedSelectorHook } from '../../../../hooks/useTypedSelector';
import { useActions } from '../../../../hooks/useAction';

const TouristSection: React.FC = () => {
  const { user } = useTypedSelectorHook(state => state.users);
  const { reservationsOfUser } = useTypedSelectorHook(state => state.reservations);

  const { fetchReservationsOfUser } = useActions();

  useEffect(() => {
    fetchReservationsOfUser(user?._id);
  }, []);

  const columns = [
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

  return (
    <Row className='mt-2'>
      <h2>Туристам</h2>
      <Col span={24} className='tabs'>
        <Table columns={columns} dataSource={reservationsOfUser} scroll={{ y: 240 }} />
      </Col>
    </Row>
  );
};

export default TouristSection;
