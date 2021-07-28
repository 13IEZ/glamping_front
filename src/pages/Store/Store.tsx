import './Store.scss';

import React, { useEffect } from 'react';

import { Col, Layout, Pagination, Row } from 'antd';

import StoreItem from './components/StoreItem/StoreItem';
import { useActions } from '../../hooks/useAction';
import { useTypedSelectorHook } from '../../hooks/useTypedSelector';
import StoreMenu from './components/StoreMenu/StoreMenu';
import StoreSidebar from './components/StoreSidebar/StoreSidebar';

const { Content } = Layout;

const Store: React.FC = () => {
  const { products } = useTypedSelectorHook(state => state.products);

  const { fetchProducts } = useActions();

  useEffect(() => {
    fetchProducts();
  }, []);

  const productsList = products.map(product => {
    return (
      <Col className='gutter-row' span={7} style={{ marginBottom: 20 }}>
        <StoreItem
          key={product._id}
          _id={product._id}
          title={product.title}
          price={Number(product.price.$numberDecimal)}
          // TODO На данный момент в бэке у модели product нет свойства rating, сделать!
          rating={5}
          image={product.image}
        />
      </Col>
    );
  });

  return (
    <div className='container'>
      <Layout>
        <StoreSidebar />

        <Layout style={{ padding: '0 24px 24px' }}>
          <Content>
            <StoreMenu />

            <Row justify='space-around' gutter={[16, 16]}>
              {productsList}
              {productsList}
              {productsList}
              {productsList}
              {productsList}
            </Row>
            <div className='pagination'>
              <Pagination defaultCurrent={1} total={50} />
            </div>
          </Content>
        </Layout>
      </Layout>
    </div>
  );
};

export default Store;
