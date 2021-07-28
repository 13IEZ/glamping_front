import './Store.scss';

import React, { useEffect } from 'react';

import { Col, Layout, Pagination, Row } from 'antd';

import { useActions } from '../../hooks/useAction';
import { useTypedSelectorHook } from '../../hooks/useTypedSelector';
import StoreItem from './components/StoreItem/StoreItem';
import StoreMenu from './components/StoreMenu/StoreMenu';
import StoreSidebar from './components/StoreSidebar/StoreSidebar';

const { Content } = Layout;

const Store: React.FC = () => {
  const { products } = useTypedSelectorHook(state => state.products);
  const { pages } = useTypedSelectorHook(state => state.pages);
  const { fetchProducts } = useActions();
  const { fetchNextPages } = useActions();

  useEffect(() => {
    fetchProducts();
  }, []);

  const onChange = (pageNumber: number) => {
    fetchNextPages(pageNumber - 1);
  };

  const totalPages = Number(pages) * 10;

  const productsList = products.map(product => {
    return (
      <Col className='gutter-row' span={7} style={{ marginBottom: 20 }}>
        <StoreItem
          key={product._id}
          _id={product._id}
          title={product.title}
          price={product.price}
          // TODO На данный момент в бэке у модели module нет свойства rating, сделать!
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
              <Pagination total={totalPages} onChange={onChange} />
            </div>
          </Content>
        </Layout>
      </Layout>
    </div>
  );
};

export default Store;
