import React, { useState } from 'react';
import { Col, Modal, Row } from 'antd';

import ProductDetailDescription from './components/ProductDetailDescription/ProductDetailDescription';
import ProductDetailGallery from './components/ProductDetailGallery/ProductDetailGallery';
import CustomCarousel from '../../components/UI/Carousel/CustomCarousel';
import ProductDetailTab from './components/ProductDetailTab/ProductDetailTab';
import './ProductDetail.scss';

const ProductDetail: React.FC = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div className='container'>
      <Modal width={1000} title='Carousel' visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <CustomCarousel />
      </Modal>

      <Row className='h-medium'>
        <Col span={16} className='border'>
          <ProductDetailGallery showModal={showModal} />
        </Col>
        <Col span={8} className='border'>
          <ProductDetailDescription />
        </Col>
      </Row>
      <Row className='h-medium mt-2'>
        <Col span={24} className='border'>
          <ProductDetailTab />
        </Col>
      </Row>
    </div>
  );
};

export default ProductDetail;
