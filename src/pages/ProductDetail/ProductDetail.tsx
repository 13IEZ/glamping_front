import './ProductDetail.scss';

import React, { useState, useEffect } from 'react';

import { Col, Modal, Row } from 'antd';

import CustomCarousel from '../../components/UI/Carousel/CustomCarousel';
import ProductDetailDescription from './components/ProductDetailDescription/ProductDetailDescription';
import ProductDetailGallery from './components/ProductDetailGallery/ProductDetailGallery';
import ProductDetailTab from './components/ProductDetailTab/ProductDetailTab';
import { useTypedSelectorHook } from '../../hooks/useTypedSelector';
import { useActions } from '../../hooks/useAction';

const ProductDetail: React.FC = (props: any) => {
  const idCurrentProduct = props.match.params.id;
  const [isModalVisible, setIsModalVisible] = useState(false);
  const { currentProduct } = useTypedSelectorHook(state => state.products);
  const { fetchCurrentProduct } = useActions();

  useEffect(() => {
    fetchCurrentProduct(idCurrentProduct);
    console.log(idCurrentProduct);
  }, [idCurrentProduct]);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  if (Object.keys(currentProduct).length === 0) return <></>;

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
        <Col span={24} className='tabs'>
          <ProductDetailTab
            season={currentProduct.season}
            roominess={currentProduct.roominess}
            description={currentProduct.description}
            factory={currentProduct.factory}
            productId={currentProduct._id}
          />
        </Col>
      </Row>
    </div>
  );
};

export default ProductDetail;
