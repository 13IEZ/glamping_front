import './GlampingMini.scss';

import React, { useEffect } from 'react';

import { Col, Row } from 'antd';
import { Link } from 'react-router-dom';

import { useActions } from '../../../../hooks/useAction';
import { useTypedSelectorHook } from '../../../../hooks/useTypedSelector';
import GlampingMiniItem from './components/GlampingMiniItem';

const GlampingMini: React.FC = () => {
  const { lastFourPiches } = useTypedSelectorHook(state => state.piches);
  const { fetchLastFourPiches } = useActions();

  useEffect(() => {
    fetchLastFourPiches();
  }, []);

  const lastFourPichesList = lastFourPiches.map(pich => {
    return (
      <Col span={6} style={{ marginBottom: 20 }}>
        <GlampingMiniItem
          key={pich._id}
          _id={pich._id}
          title={pich.title}
          rent={pich.rent}
          // square={pich.square}
          image={pich.image}
        />
      </Col>
    );
  });

  const noLocations = lastFourPiches.length < 1;

  if (noLocations) return <></>;

  return (
    <section className='glamping'>
      <div className='container'>
        <h3 className='title'>Глэмпинги</h3>
        <div className='glamping-header'>
          <div className='glamping-header-row'>
            <Link to='/glamping'>
              <p className='glamping-header__link'>Показать на карте</p>
            </Link>
          </div>
        </div>
        <Row className='glamping-card' justify='space-around' gutter={[2, 2]}>
          {lastFourPichesList}
        </Row>
        <Link to='/glamping'>
          <p className='glamping__link'>Показать все</p>
        </Link>
      </div>
    </section>
  );
};

export default GlampingMini;
