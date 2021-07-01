import './ReviewsMini.scss';

import { Card, Col, Row, Typography } from 'antd';
import { Link } from 'react-router-dom';
import React from 'react';

const ReviewsMini: React.FC = () => {
  const clickHandler: any = () => {
    console.log('clicked');
  };

  const { Title } = Typography;

  return (
    <section className='reviews-mini'>
      <div className='reviews-mini-content'>
        <Title level={3}>Отзывы</Title>
        <Row gutter={16}>
          <Col span={8}>
            <Card title='Иванов Иван' style={{ maxWidth: 300 }}>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit hic architecto maxime quam placeat
                temporibus! Sapiente, dolores inventore dolorem blanditiis quae voluptate dolorum non. Sed nam minima
                quas? Quod, rem...
              </p>
              <Link to='/reviews' onClick={clickHandler}>
                Читать полностью
              </Link>
            </Card>
          </Col>
          <Col span={8}>
            <Card title='Иванов Иван' style={{ maxWidth: 300 }}>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit hic architecto maxime quam placeat
                temporibus! Sapiente, dolores inventore dolorem blanditiis quae voluptate dolorum non. Sed nam minima
                quas? Quod, rem...
              </p>
              <Link to='/reviews' onClick={clickHandler}>
                Читать полностью
              </Link>
            </Card>
          </Col>
          <Col span={8}>
            <Card title='Иванов Иван' style={{ maxWidth: 300 }}>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit hic architecto maxime quam placeat
                temporibus! Sapiente, dolores inventore dolorem blanditiis quae voluptate dolorum non. Sed nam minima
                quas? Quod, rem...
              </p>
              <Link to='/reviews' onClick={clickHandler}>
                Читать полностью
              </Link>
            </Card>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default ReviewsMini;
