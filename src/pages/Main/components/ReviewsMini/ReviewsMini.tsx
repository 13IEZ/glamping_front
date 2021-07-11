import './ReviewsMini.scss';
import React from 'react';
import { Card, Row, Typography } from 'antd';
import { Link } from 'react-router-dom';

const ReviewsMini: React.FC = () => {
  const clickHandler: any = () => {
    console.log('clicked');
  };

  const { Title } = Typography;

  return (
    <section className='reviews-mini'>
      <div className='reviews-mini-content'>
        <Title level={3}>Отзывы</Title>
        <Row className='reviews-mini-content__container' gutter={16}>
          <Card className='reviews-mini-content__card' title='Иванов Иван'>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit hic architecto maxime quam placeat
              temporibus! Sapiente, dolores inventore dolorem blanditiis quae voluptate dolorum non. Sed nam minima
              quas? Quod, rem...
            </p>
            <Link to='/reviews' onClick={clickHandler}>
              Читать полностью
            </Link>
          </Card>

          <Card className='reviews-mini-content__card' title='Иванов Иван'>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit hic architecto maxime quam placeat
              temporibus! Sapiente, dolores inventore dolorem blanditiis quae voluptate dolorum non. Sed nam minima
              quas? Quod, rem...
            </p>
            <Link to='/reviews' onClick={clickHandler}>
              Читать полностью
            </Link>
          </Card>

          <Card className='reviews-mini-content__card' title='Иванов Иван'>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit hic architecto maxime quam placeat
              temporibus! Sapiente, dolores inventore dolorem blanditiis quae voluptate dolorum non. Sed nam minima
              quas? Quod, rem...
            </p>
            <Link to='/reviews' onClick={clickHandler}>
              Читать полностью
            </Link>
          </Card>

          <Card className='reviews-mini-content__card' title='Иванов Иван'>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit hic architecto maxime quam placeat
              temporibus! Sapiente, dolores inventore dolorem blanditiis quae voluptate dolorum non. Sed nam minima
              quas? Quod, rem...
            </p>
            <Link to='/reviews' onClick={clickHandler}>
              Читать полностью
            </Link>
          </Card>
        </Row>
      </div>
    </section>
  );
};

export default ReviewsMini;
