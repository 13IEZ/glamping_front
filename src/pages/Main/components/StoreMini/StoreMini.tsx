import './StoreMini.scss';

import React, { useEffect } from 'react';

import { Col, Row } from 'antd';
import { Link } from 'react-router-dom';

import { useActions } from '../../../../hooks/useAction';
import { useTypedSelectorHook } from '../../../../hooks/useTypedSelector';
import StoreMiniItem from './components/StoreMiniItem';

const StoreMini: React.FC = () => {
  const { lastFourProducts } = useTypedSelectorHook(state => state.products);
  const { fetchLastFourProducts } = useActions();

  useEffect(() => {
    fetchLastFourProducts();
  }, []);

  const lastFourProductsList = lastFourProducts.map(product => {
    return (
      <Col span={6} style={{ marginBottom: 20 }}>
        <StoreMiniItem
          key={product._id}
          _id={product._id}
          title={product.title}
          price={Number(product.price.$numberDecimal)}
          image={product.image}
        />
      </Col>
    );
  });

  const noProducts = lastFourProducts.length < 1;

  if (noProducts) return <></>;

  return (
    <div className='container product'>
      <h3 className='title'>Магазин</h3>
      <Row className='product-card' justify='space-around' gutter={[2, 2]}>
        {lastFourProductsList}
      </Row>
      <Link to='/store'>
        <p className='product__link'>Показать все</p>
      </Link>
    </div>
  );
};

export default StoreMini;
