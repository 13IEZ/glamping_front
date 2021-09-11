import React, { useEffect } from 'react';

import { Col, Row, Table, Tabs } from 'antd';

import { useActions } from '../../../../hooks/useAction';
import { useTypedSelectorHook } from '../../../../hooks/useTypedSelector';

const { TabPane } = Tabs;

const LandOwnerSection: React.FC = () => {
  const { user } = useTypedSelectorHook(state => state.users);
  const { reservationsOfLandOwner, reservationsOfAccommodations } = useTypedSelectorHook(state => state.reservations);

  const { fetchReservationsOfLandOwner, fetchReservationsOfAccommodations } = useActions();

  useEffect(() => {
    fetchReservationsOfLandOwner(user?._id);

    fetchReservationsOfAccommodations(user?._id);
  }, []);

  const columnsOfReservationsOfPiches = [
    {
      title: 'Название Глэмпинга',
      dataIndex: 'title',
      width: 150,
    },
    {
      title: 'Номер Пичи',
      dataIndex: 'number',
      width: 150,
    },
    {
      title: 'Цена',
      dataIndex: 'rent',
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
      width: 150,
    },
  ];

  const adaptiveReservationsOfLandOwner: any = [];

  reservationsOfLandOwner.forEach(r => {
    const reservation = {
      key: r._id,
      title: r.pich.locationId.title,
      number: r.pich.number,
      rent: r.pich.rent,
      startDate: r.startDate,
      endDate: r.endDate,
    };
    adaptiveReservationsOfLandOwner.push(reservation);
  });

  const columnsOfReservationsOfAccommodations = [
    {
      title: 'Название Глэмпинга',
      dataIndex: 'title',
      width: 150,
    },
    {
      title: 'Название размещения',
      dataIndex: 'titleOfAccommodation',
      width: 150,
    },
    {
      title: 'Цена',
      dataIndex: 'rent',
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
      width: 150,
    },
  ];

  const adaptiveReservationsOfAccommodations: any = [];

  reservationsOfAccommodations.forEach(r => {
    const reservation = {
      key: r._id,
      title: r.accommodation.pichId.locationId.title,
      titleOfAccommodation: r.accommodation.title,
      rent: r.accommodation.rent,
      startDate: r.startDate,
      endDate: r.endDate,
    };
    adaptiveReservationsOfAccommodations.push(reservation);
  });

  return (
    <Row className='mt-2'>
      <h2>Блок глэмпинга</h2>
      <Col span={24} className='tabs'>
        <Tabs defaultActiveKey='1' type='card'>
          <TabPane tab='Брони пичей' key='1'>
            <Table
              columns={columnsOfReservationsOfPiches}
              dataSource={adaptiveReservationsOfLandOwner}
              pagination={false}
              scroll={{ y: 240 }}
            />
          </TabPane>
          <TabPane tab='Брони размещений' key='2'>
            <Table
              columns={columnsOfReservationsOfAccommodations}
              dataSource={adaptiveReservationsOfAccommodations}
              pagination={false}
              scroll={{ y: 240 }}
            />
          </TabPane>
        </Tabs>
      </Col>
    </Row>
  );
};

export default LandOwnerSection;
