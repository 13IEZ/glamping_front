import './AccommodationMini.scss';

import React, { useEffect } from 'react';

import { Col, Row } from 'antd';
import { Link } from 'react-router-dom';

import { useActions } from '../../../../hooks/useAction';
import { useTypedSelectorHook } from '../../../../hooks/useTypedSelector';
import AccommodationMiniItem from './components/AccommodationMiniItem';

const AccommodationMini: React.FC = () => {
  const { lastFourAccommodations } = useTypedSelectorHook(state => state.accommodations);
  const { fetchLastFourAccommodations } = useActions();

  useEffect(() => {
    fetchLastFourAccommodations();
  }, []);

  const lastFourAccommodationsList = lastFourAccommodations.map(accommodation => {
    return (
      <Col key={accommodation._id} span={6} style={{ marginBottom: 20 }}>
        <AccommodationMiniItem
          _id={accommodation._id}
          title={accommodation.title}
          rent={accommodation.rent}
          image={accommodation.image}
          description={accommodation.description}
          roominess={accommodation.roominess}
          season={accommodation.season}
          category={accommodation.category}
          rating={accommodation.rating}
        />
      </Col>
    );
  });

  const noAccommodations = lastFourAccommodations.length < 1;

  if (noAccommodations) return <></>;

  return (
    <section className='accommodation'>
      <div className='container'>
        <h3 className='accommodation title'>Глэмпинги</h3>
        <div className='accommodation-header'>
          <div className='accommodation-header-row'>
            <Link to='/locations-map'>
              <p className='accommodation-header__link'>Показать на карте</p>
            </Link>
          </div>
        </div>
        <Row className='accommodation-card' justify='space-around' gutter={[2, 2]}>
          {lastFourAccommodationsList}
        </Row>
        <Link to='/accommodations'>
          <p className='accommodation__link'>Показать все</p>
        </Link>
      </div>
    </section>
  );
};

export default AccommodationMini;
