import './ProductDetail.scss';

import React, { useEffect } from 'react';

import { Col, Row } from 'antd';

import ProductDetailDescription from './components/ProductDetailDescription/ProductDetailDescription';
import ProductDetailGallery from './components/ProductDetailGallery/ProductDetailGallery';
import ProductDetailTab from './components/ProductDetailTab/ProductDetailTab';
import { useTypedSelectorHook } from '../../hooks/useTypedSelector';
import { useActions } from '../../hooks/useAction';

const ProductDetail: React.FC = (props: any) => {
  const idCurrentProduct = props.match.params.id;
  const { currentProduct } = useTypedSelectorHook(state => state.products);
  const { fetchCurrentProduct } = useActions();

  useEffect(() => {
    fetchCurrentProduct(idCurrentProduct);
  }, [idCurrentProduct]);

  if (Object.keys(currentProduct).length === 0) return <></>;

  return (
    <div className='container'>
      <div className='wrapper-top'>
        <Row wrap={false}>
          <Col flex='65%'>
            <ProductDetailGallery images={currentProduct.image ? currentProduct.image : []} />
          </Col>
          <Col flex='35%'>
            <ProductDetailDescription
              title={currentProduct.title}
              rating={currentProduct.rating}
              price={currentProduct.price}
              description={currentProduct.description}
            />
          </Col>
        </Row>
      </div>

      <div className='wrapper-bottom'>
        <Row className='mt-2'>
          <Col span={24} className='tabs'>
            <ProductDetailTab
              season={currentProduct.season}
              roominess={currentProduct.roominess}
              description={currentProduct.description}
              factory={currentProduct.factory}
              productId={currentProduct._id}
              reviewsQuantity={currentProduct.reviewsQuantity}
            />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default ProductDetail;
