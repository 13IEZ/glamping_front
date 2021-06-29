import './ReviewsMini.scss';

import {
  Card,
  Col,
  Row,
  Typography,
} from 'antd';
import { Link } from 'react-router-dom';

const ReviewsMini: React.FC = () => {
  const clickHandler: any = () => {
    console.log('clicked');
  };

  const { Title } = Typography;

  return (
    <section style={{ padding: '0 50px' }}>
      <div className="Reviews">
      <Title level={3}>Отзывы</Title>
        <Row gutter={16}>
          <Col span={8}>
            <Card title="Иванов Иван" style={{ width: 300 }} >
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit hic architecto maxime quam placeat
                temporibus! Sapiente, dolores inventore dolorem blanditiis quae voluptate dolorum non. Sed nam minima quas?
                Quod, rem...
              </p>
              <Link to='/reviews' onClick={clickHandler}>Читать полностью</Link>
            </Card>
          </Col>
          <Col span={8}>
            <Card title="Иванов Иван" style={{ width: 300 }}>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit hic architecto maxime quam placeat
                temporibus! Sapiente, dolores inventore dolorem blanditiis quae voluptate dolorum non. Sed nam minima quas?
                Quod, rem...
              </p>
              <Link to='/reviews' onClick={clickHandler}>Читать полностью</Link>
            </Card>
          </Col>
          <Col span={8}>
            <Card title="Иванов Иван" style={{ width: 300 }}>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit hic architecto maxime quam placeat
                temporibus! Sapiente, dolores inventore dolorem blanditiis quae voluptate dolorum non. Sed nam minima quas?
                Quod, rem...
              </p>
              <Link to='/reviews' onClick={clickHandler}>Читать полностью</Link>
            </Card>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default ReviewsMini;