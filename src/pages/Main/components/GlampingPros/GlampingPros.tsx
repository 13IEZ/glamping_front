import React from 'react';
import { Col, Row } from 'antd';
import './GlampingPros.scss';
import tentIcon from '../../../../assets/tent.png';
import wifiIcon from '../../../../assets/wifi.png';
import showerIcon from '../../../../assets/shower.png';
import bonfireIcon from '../../../../assets/bonfire.png';
import cocktailIcon from '../../../../assets/cocktail.png';

const GlampingPros: React.FC = () => {
  return (
    <section className='glamping-pros container'>
      <Row className='content'>
        <Col className='gutter-row'>
          <div className='glamping-pros-card'>
            <img src={tentIcon} alt='Not Found' />
            <p className='glamping-pros__text'>Купол с удобными кроватями</p>
          </div>
        </Col>
        <Col className='gutter-row'>
          <div className='glamping-pros-card'>
            <img src={showerIcon} alt='Not Found' />
            <p className='glamping-pros__text'>Ванная комната и бассейн</p>
          </div>
        </Col>
        <Col className='gutter-row'>
          <div className='glamping-pros-card'>
            <img src={wifiIcon} alt='Not Found' />
            <p className='glamping-pros__text'>Электричество и Wi-Fi</p>
          </div>
        </Col>
        <Col className='gutter-row'>
          <div className='glamping-pros-card'>
            <img src={cocktailIcon} alt='Not Found' />
            <p className='glamping-pros__text'>Ресторан и бар</p>
          </div>
        </Col>
        <Col className='gutter-row'>
          <div className='glamping-pros-card'>
            <img src={bonfireIcon} alt='Not Found' />
            <p className='glamping-pros__text'>Бесценные посиделки у костра</p>
          </div>
        </Col>
      </Row>
    </section>
  );
};

export default GlampingPros;
