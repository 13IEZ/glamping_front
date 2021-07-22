import './Presentation.scss';

import React from 'react';

import { Col, Row } from 'antd';

const Presentation: React.FC = () => {
  return (
    <section className='presentation'>
      <Row className='presentation-container'>
        <Col xs={0} lg={14}></Col>
        <Col xs={24} lg={10}>
          <p className='presentation-title'>
            Мы – это группа компаний, учредители и члены Казахстанской ассоциации кемпингового туризма и караванинга.
          </p>
          <p className='presentation-list-title'>Группа компаний объединяет</p>
          <ul className='presentation-list'>
            <li>строительную компанию</li>
            <li>производителя кемпингового оборудования и поставщика европейских жилых туристических прицепов</li>
            <li>казахстанского туроператора</li>
            <li>консалтинговой компании</li>
            <li>учебный центр для сферы кемпинга и караваннинга</li>
          </ul>
        </Col>
      </Row>
    </section>
  );
};

export default Presentation;
