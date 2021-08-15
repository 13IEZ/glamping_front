import React from 'react';
import { Col, Row, Tabs } from 'antd';

const { TabPane } = Tabs;

const InvestorSection: React.FC = () => {
  return (
    <Row className='mt-2'>
      <h2>Инвесторам</h2>
      <Col span={24} className='tabs'>
        <Tabs defaultActiveKey='1' type='card'>
          <TabPane tab='Продукты' key='1'>
            Здесь должен быть контент
          </TabPane>
          <TabPane tab='Глэмпинги' key='2'>
            Здесь должен быть контент
          </TabPane>
          <TabPane tab='Отзывы инвестора' key='3'>
            Здесь должен быть контент
          </TabPane>
        </Tabs>
      </Col>
    </Row>
  );
};

export default InvestorSection;
