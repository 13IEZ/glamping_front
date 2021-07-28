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
          price={product.price}
          image={product.image}
        />
      </Col>
    );
  });

  const noModules = lastFourProducts.length < 1;

  if (noModules) return <></>;

  return (
    <div className='container module'>
      <h3 className='title'>Магазин</h3>
      <Row className='module-card' justify='space-around' gutter={[2, 2]}>
        {lastFourProductsList}
      </Row>
      <Link to='/store'>
        <p className='module__link'>Показать все</p>
      </Link>
    </div>
  );
};

export default StoreMini;
