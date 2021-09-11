import React, { useEffect } from 'react';

import { Col, Row, Table, Tabs } from 'antd';

import { useActions } from '../../../../hooks/useAction';
import { useTypedSelectorHook } from '../../../../hooks/useTypedSelector';

const { TabPane } = Tabs;

const InvestorSection: React.FC = () => {
  const { user } = useTypedSelectorHook(state => state.users);
  const { productsOfUser } = useTypedSelectorHook(state => state.products);

  const { fetchProductsOfUser } = useActions();

  useEffect(() => {
    fetchProductsOfUser(user?._id);
  }, []);

  const columnsOfProducts = [
    {
      title: 'Название',
      dataIndex: 'title',
      width: 150,
    },
    {
      title: 'Тип модуля',
      dataIndex: 'categoryId',
      width: 150,
    },
    {
      title: 'Производитель',
      dataIndex: 'factoryId',
      width: 150,
    },
    {
      title: 'Цена',
      dataIndex: 'price',
      width: 150,
    },
  ];

  const adaptiveProductsOfUser = productsOfUser.map(product => {
    return {
      _id: product._id,
      key: product._id,
      title: product.title,
      price: product.price,
      categoryId: product.categoryId.title,
      factoryId: product.factoryId.title,
    };
  });

  return (
    <Row className='mt-2'>
      <h2>Блок инвестора</h2>
      <Col span={24} className='tabs'>
        <Tabs defaultActiveKey='1' type='card'>
          <TabPane tab='Модули' key='1'>
            <Table
              columns={columnsOfProducts}
              dataSource={adaptiveProductsOfUser}
              pagination={false}
              scroll={{ y: 240 }}
            />
          </TabPane>
        </Tabs>
      </Col>
    </Row>
  );
};

export default InvestorSection;
