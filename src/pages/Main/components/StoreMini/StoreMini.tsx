import './StoreMini.scss';

import React, { useEffect } from 'react';

import { Button, Col, Row } from 'antd';
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
        <div className='store-header'>
          <h3 className='title'>Магазин</h3>
          <Button className='location-header__button store-header__button_transparent'>
            <Link to='/newProduct'>Разместить товар</Link>
          </Button>
        </div>
        <Row className='module-card'>{lastFourProductsList}</Row>
        <Link className='module__link__store' to='/store/[]'>
          <p className='module__link'>Показать всё</p>
        </Link>
      </div>
    </section>
  );
};

export default StoreMini;
