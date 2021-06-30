import {
  Card,
  Col,
  Layout,
  Row,
  Typography,
} from 'antd';
import { Link } from 'react-router-dom';

import CustomCarousel from '../../components/UI/Carousel/CustomCarousel';
import { useTypedSelectorHook } from '../../hooks/useTypedSelector';
import React from 'react';

const Reviews: React.FC = () => {
  const { Title } = Typography;
  const { user } = useTypedSelectorHook(state => state.users);
  const { Header } = Layout;

  return (
    <div className="Reviews">
      <Header className='header'>
      <Row justify='space-around' align='middle'>
        <Col>
          <Link to='/'>
            <Title level={2}>
              Отзывы
            </Title>
          </Link>
        </Col>
        <Col>
          {user ?
            <Link color="primary" type="link" to="/reviews/new">
              Написать отзыв
            </Link> : null
          }
        </Col>
      </Row>
    </Header>
      <CustomCarousel />
      <Row>
        <Col span={24}>
          <Card>
            <Card type="inner" title="Иванов Иван">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit hic architecto maxime quam placeat
              temporibus! Sapiente, dolores inventore dolorem blanditiis quae voluptate dolorum non. Sed nam minima quas?
              Quod, rem. 
            </Card>
          </Card>
        </Col>
        <Col span={24}>
          <Card>
            <Card type="inner" title="Иванов Иван">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit hic architecto maxime quam placeat
              temporibus! Sapiente, dolores inventore dolorem blanditiis quae voluptate dolorum non. Sed nam minima quas?
              Quod, rem. 
            </Card>
          </Card>
        </Col>
        <Col span={24}>
          <Card>
            <Card type="inner" title="Иванов Иван">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit hic architecto maxime quam placeat
              temporibus! Sapiente, dolores inventore dolorem blanditiis quae voluptate dolorum non. Sed nam minima quas?
              Quod, rem. 
            </Card>
          </Card>
        </Col>
      </Row>
    </div>
  )
};

export default Reviews;