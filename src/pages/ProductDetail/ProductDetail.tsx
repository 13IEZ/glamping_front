import React from 'react';
import { Col, Row } from 'antd';

import './ProductDetail.scss';

const ProductDetail: React.FC = () => {
  return (
    <div className='container'>
      <Row className='h-medium'>
        <Col span={16} className='border'>
          Место для галереи
        </Col>
        <Col span={8} className='border'>
          Место для описания товара
        </Col>
      </Row>
      <Row className='h-medium mt-2'>
        <Col span={24} className='border'>
          Место для отзывов
        </Col>
      </Row>
    </div>
  );
};

export default ProductDetail;
