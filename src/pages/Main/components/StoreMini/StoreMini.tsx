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
      <Col key={product._id} span={6} style={{ marginBottom: 20 }}>
        <StoreMiniItem _id={product._id} title={product.title} price={product.price} image={product.image} />
      </Col>
    );
  });

  const noProducts = lastFourProducts.length < 1;

  if (noProducts) return <></>;

  return (
    <section className='store-mini'>
      <div className='container'>
        <h3 className='title'>Магазин</h3>
        <Row className='module-card'>{lastFourProductsList}</Row>
        <Link to='/store/[]'>
          <p className='module__link'>Показать все</p>
        </Link>
      </div>
    </section>
  );
};

export default StoreMini;
