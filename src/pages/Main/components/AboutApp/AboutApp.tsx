import './AboutApp.scss';

import React from 'react';

import { Card, Col, Row, Typography } from 'antd';
import { Link } from 'react-router-dom';

const { Title } = Typography;
const AboutApp: React.FC = () => {
  return (
    <section className='about_app'>
      <div className='container'>
        <Row>
          <Col className='about_app title' span={24}>
            <Title level={3}>Добро пожаловать на Glamping.kz!</Title>
          </Col>
        </Row>
        <Row className='about_app card'>
          <Col span={6}>
            <Card
              hoverable
              style={{ width: 250 }}
              cover={
                <img
                  alt='example'
                  src='https://obyektiv.press/sites/default/files/articles/c7e0b49947b49aa6256de78cf5ae84b6.jpg'
                />
              }
            >
              <p className='content_text'>
                В разделе <Link to='#'>Бронировать</Link> вы найдете огромную базу данных с разнообразными "Глэмпингами"
                расположенных в самых красивых местах Казахстана и готовых принять в гости!
              </p>
            </Card>
          </Col>
          <Col span={6}>
            <Card
              hoverable
              style={{ width: 250 }}
              cover={
                <img
                  alt='example'
                  src='data:image/jpeg;base64,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'
                />
              }
            >
              <p className='content_text'>
                Раздел <Link to='/store'>Магазин</Link> имеет широкий выбор жилых модулей на любой вкус, цвет, размер и
                кошелёк и готов предложить вам купить или продать жилой модуль!
              </p>
            </Card>
          </Col>
          <Col span={6}>
            <Card
              hoverable
              style={{ width: 250 }}
              cover={
                <img
                  alt='example'
                  src='https://st2.depositphotos.com/1891797/5736/i/950/depositphotos_57368605-stock-photo-fenced-ranch-at-sunrise.jpg'
                />
              }
            >
              <p className='content_text'>
                В разделе <Link to='/location'>Локации</Link> вы найдете огромную базу данных с участками для удобного
                расположения вашего модуля в самых красивых местах Казахстана!
              </p>
            </Card>
          </Col>
          <Col span={6}>
            <Card
              hoverable
              style={{ width: 250 }}
              cover={
                <img alt='example' src='https://i.pinimg.com/originals/df/6c/91/df6c915c6839c950947229259ad83749.jpg' />
              }
            >
              <p className='content_text'>
                В разделе <Link to='#'>Инвестиции</Link> наша команда профессионалов поможет разработать концепт и
                бизнес-план глэмпинга, найти земельный участок и финансирование.
              </p>
            </Card>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default AboutApp;
