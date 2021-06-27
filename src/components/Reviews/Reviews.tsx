import './Reviews.scss';

import {
  Button,
  Card,
  Col,
  Row,
  Typography
} from 'antd';

const Reviews: React.FC = () => {
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
              <Button type="link" onClick={clickHandler}>Читать полностью</Button>
            </Card>
          </Col>
          <Col span={8}>
            <Card title="Иванов Иван" style={{ width: 300 }}>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit hic architecto maxime quam placeat
                temporibus! Sapiente, dolores inventore dolorem blanditiis quae voluptate dolorum non. Sed nam minima quas?
                Quod, rem...
              </p>
              <Button type="link" onClick={clickHandler}>Читать полностью</Button>
            </Card>
          </Col>
          <Col span={8}>
            <Card title="Иванов Иван" style={{ width: 300 }}>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit hic architecto maxime quam placeat
                temporibus! Sapiente, dolores inventore dolorem blanditiis quae voluptate dolorum non. Sed nam minima quas?
                Quod, rem...
              </p>
              <Button type="link" onClick={clickHandler}>Читать полностью</Button>
            </Card>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default Reviews;