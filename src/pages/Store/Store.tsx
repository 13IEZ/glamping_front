import './Store.scss';

import React, { useEffect, useState } from 'react';

import { Button, Col, Layout, Pagination, Row } from 'antd';

import { useActions } from '../../hooks/useAction';
import { useTypedSelectorHook } from '../../hooks/useTypedSelector';
import StoreItem from './components/StoreItem/StoreItem';
import StoreSidebar from './components/StoreSidebar/StoreSidebar';

const { Content } = Layout;

const Store: React.FC = () => {
  const { products, pages } = useTypedSelectorHook(state => state.products);
  const { fetchProducts } = useActions();
  const { fetchNextPages } = useActions();
  const { sortOptions } = useTypedSelectorHook(state => state.categories);
  const { filterOptions } = useTypedSelectorHook(state => state.categories);
  const [className, setClassName] = useState('sidebar');

  let paginator;

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

  if (
    sortOptions.fieldName === 'empty' &&
    sortOptions.fieldValue === 'empty' &&
    filterOptions.fieldName === 'empty' &&
    filterOptions.fieldValue === 'empty'
  ) {
    paginator = (
      <div className='pagination'>{noPages ? <></> : <Pagination total={totalPages} onChange={onChange} />}</div>
    );
  } else {
    paginator = null;
  }

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
            <Button className='openbtn' onClick={openSidebar}>
              показать фильтры
            </Button>
            <Button className='closebtn' onClick={closeSidebar}>
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
            {paginator}
          </Content>
        </div>
      </Layout>
    </div>
  );
};

export default Store;
