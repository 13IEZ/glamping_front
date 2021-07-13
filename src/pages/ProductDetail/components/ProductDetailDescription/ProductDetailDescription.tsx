import React from 'react';
import { Divider, Button } from 'antd';
import './ProductDetailDescription.scss';

const ProductDetailDescription: React.FC = () => {
  return (
    <div className='product-detail-description'>
      <h3>ЮРТА</h3>
      <div>
        <span className='rating'></span>
        <a>(30 отзывов)</a>
      </div>
      <Divider />
      <h4>Цена</h4>
      <p>1 000 000 ₸</p>
      <Button type='primary'>Купить</Button>
      <Divider />
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat quod rerum a eveniet veniam unde
        reprehenderit cum ipsam possimus distinctio aliquid ad, enim, incidunt mollitia in, laboriosam esse tempore.
        Similique.
      </p>
    </div>
  );
};

export default ProductDetailDescription;
