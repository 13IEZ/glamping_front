import './AboutApp.scss';

import React from 'react';

import { Card, Col, Row, Typography } from 'antd';
import { Link } from 'react-router-dom';

const { Title } = Typography;
const AboutApp: React.FC = () => {
  return (
    <section className='about_app'>
      <div>
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
              <p>
                В разделе <Link to='#'>Бронировать</Link> вы найдете огромную базу данных с разнообразными "Глампигами"
                расположеных в самых красивых местах Казахстана и готовых принять в гости!
              </p>
            </Card>
          </Col>
          <Col span={6}>
            <Card hoverable style={{ width: 250 }} className='test2'>
              <p className='content_text'>
                Раздел <Link to='/store'>Магазин</Link> имеет широкий выбор жилых модулей на любой вкус, цвет, размер и
                кошелёк и готов предложить вам купить или продать жилой модуль!
              </p>
            </Card>
          </Col>
          <Col span={6}>
            <Card className='test1' hoverable style={{ width: 250 }}>
              <p className='content_text'>
                В разделе <Link to='/location'>Локации</Link> вы найдете огромную базу данных с участками для удобного
                расположения вашего модуляв в самых красивых местах Казахстана!
              </p>
            </Card>
          </Col>

          <Col span={6}>
            <Card hoverable style={{ width: 250 }}>
              <p>
                В разделе <Link to='#'>Инвестировать</Link> наша команда професионалов поможет разработать концепт и
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
