import './Store.scss';

import React, { useState } from 'react';

import { Button, Col, Layout, Pagination, Row } from 'antd';

import { useActions } from '../../hooks/useAction';
import { useTypedSelectorHook } from '../../hooks/useTypedSelector';
import StoreItem from './components/StoreItem/StoreItem';
import StoreSidebar from './components/StoreSidebar/StoreSidebar';

const { Content } = Layout;

const Store: React.FC = () => {
  const { products, pages } = useTypedSelectorHook(state => state.products);
  const { fetchNextPages } = useActions();
  const [className, setClassName] = useState('sidebar');
  const { filters } = useTypedSelectorHook(state => state.products);

  const onChange = (pageNumber: number) => {
    fetchNextPages(pageNumber - 1, filters);
  };

  const totalPages = Number(pages) * 10;

  let productsList;
  if (products.length > 0) {
    productsList = products.map(product => {
      return (
        <Col key={product._id} className='gutter-row' style={{ margin: 10 }}>
          <StoreItem _id={product._id} title={product.title} price={product.price} rating={5} image={product.image} />
        </Col>
      );
    });
  } else {
    productsList = null;
  }

  const noPages = totalPages < 2;

  const openSidebar = () => {
    setClassName('sidebar-active');
  };

  const closeSidebar = () => {
    setClassName('sidebar');
  };

  return (
    <div className='container'>
      <Layout className='store-body'>
        <div className='sider'>
          <div className='buttons'>
            <Button className='btn openbtn' onClick={openSidebar}>
              показать фильтры
            </Button>
            <Button className='btn closebtn' onClick={closeSidebar}>
              скрыть фильтры
            </Button>
          </div>
          <div className={className}>
            <StoreSidebar />
          </div>
        </div>
        <div className='content'>
          <Content className='cont'>
            <Row className='store-content'>
              {productsList}
              {productsList}
              {productsList}
              {productsList}
            </Row>
            <div className='pagination'>{noPages ? <></> : <Pagination total={totalPages} onChange={onChange} />}</div>
          </Content>
        </div>
      </Layout>
    </div>
  );
};

export default Store;
