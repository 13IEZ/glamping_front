import React from 'react';
import { Divider, Button, Typography } from 'antd';
import './ProductDetailDescription.scss';

const { Paragraph } = Typography;
const { Title } = Typography;

interface ICurrentProductProps {
  title?: string;
  rating?: number;
  price?: string;
  description?: string;
}

const ProductDetailDescription: React.FC<ICurrentProductProps> = ({ title, rating, price, description }) => {

  return (
    <div className='product-detail-description'>
      <Title level={4}>{title}</Title>
      <div>
        {rating === 5 ? <span className='rating-five'></span> : null}
        {rating === 4 ? <span className='rating-four'></span> : null}
        {rating === 3 ? <span className='rating-three'></span> : null}
        {rating === 2 ? <span className='rating-two'></span> : null}
        {rating === 1 ? <span className='rating-one'></span> : null}
      </div>
      <Divider />
      <Title level={5}>Цена</Title>
      <Paragraph>{price} ₸</Paragraph>
      <Button className='item__button' type='primary'>
        Купить
      </Button>
      <Divider />
      <Paragraph>{description}</Paragraph>
    </div>
  );
};

export default ProductDetailDescription;
