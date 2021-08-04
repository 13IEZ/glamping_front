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
      <Col key={product._id} className='gutter-row' style={{ margin: 10 }}>
        <StoreItem _id={product._id} title={product.title} price={product.price} rating={5} image={product.image} />
      </Col>
    );
  });

  const noPages = totalPages < 2;

  return (
    <div className='container'>
      <Layout className='store-body'>
        <StoreSidebar />
        <Content>
          <StoreMenu />
          <Row className='store-content'>
            {productsList}
            {productsList}
            {productsList}
            {productsList}
          </Row>
          <div className='pagination'>{noPages ? <></> : <Pagination total={totalPages} onChange={onChange} />}</div>
        </Content>
      </Layout>
    </div>
  );
};

export default Store;
