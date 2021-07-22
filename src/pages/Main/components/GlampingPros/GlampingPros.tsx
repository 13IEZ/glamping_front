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
    <div className='container'>
      <Row className='glamping-pros' gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col className='gutter-row' span={6}>
          <div className='glamping-pros-card'>
            <img src={tentIcon} />
            <p className='glamping-pros__text'>Купол с удобными кроватями</p>
          </div>
        </Col>
        <Col className='gutter-row' span={6}>
          <div className='glamping-pros'>
            <img src={showerIcon} />
            <p className='glamping-pros__text'>Ванная комната и бассейн</p>
          </div>
        </Col>
        <Col className='gutter-row' span={6}>
          <div className='glamping-pros'>
            <img src={wifiIcon} />
            <p className='glamping-pros__text'>Электричество и Wi-Fi</p>
          </div>
        </Col>
        <Col className='gutter-row' span={6}>
          <div className='glamping-pros'>
            <img src={cocktailIcon} />
            <p className='glamping-pros__text'>Ресторан и бар</p>
          </div>
        </Col>
        <Col className='gutter-row' span={6}>
          <div className='glamping-pros'>
            <img src={bonfireIcon} />
            <p className='glamping-pros__text'>Бесценные посиделки у костра</p>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default GlampingPros;
