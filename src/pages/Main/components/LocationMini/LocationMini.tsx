import './LocationMini.scss';

import React, { useEffect } from 'react';

import { Button, Col, Row } from 'antd';
import { Link } from 'react-router-dom';

import { useActions } from '../../../../hooks/useAction';
import { useTypedSelectorHook } from '../../../../hooks/useTypedSelector';
import LocationMiniItem from './components/LocationMiniItem';

const LocationMini: React.FC = () => {
  const { lastFourLocations } = useTypedSelectorHook(state => state.locations);
  const { fetchLastFourLocations } = useActions();

  useEffect(() => {
    fetchLastFourLocations();
  }, []);

  const lastFourLocationsList = lastFourLocations.map(location => {
    return (
      <Col span={6} style={{ marginBottom: 20 }}>
        <LocationMiniItem
          key={location._id}
          _id={location._id}
          title={location.title}
          rent={location.rent}
          square={location.square}
          image={location.image}
        />
      </Col>
    );
  });

  const noLocations = lastFourLocations.length < 1;

  if (noLocations) return <></>;

  return (
    <section className='location'>
      <div className='container'>
        <h3 className='title'>Локации</h3>
        <div className='location-header'>
          <div className='location-header-row'>
            <Link to='/location'>
              <p className='location-header__link'>Показать на карте</p>
            </Link>
          </div>
          <div className='location-header-row'>
            <p className='location-header__text'>Есть земля? Сдавай и зарабатывай</p>
            <Button className='location-header__button location-header__button_transparent'>Сдать</Button>
          </div>
        </div>
        <Row className='location-card' justify='space-around' gutter={[2, 2]}>
          {lastFourLocationsList}
        </Row>
        <Link to='/locations'>
          <p className='location__link'>Показать все</p>
        </Link>
      </div>
    </section>
  );
};

export default LocationMini;
