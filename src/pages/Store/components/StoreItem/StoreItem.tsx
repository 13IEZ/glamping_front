import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Divider } from 'antd';

import config from '../../../../settings/config';

const { Meta } = Card;

interface IModuleCardProps {
  _id: string;
  title: string;
  price: number;
  rating: number;
  image: Array<string> | [];
}

const StoreItem: React.FC<IModuleCardProps> = ({ title, price, image, _id }) => {
  const cardImage = config.apiUrl + '/uploads/' + image[0];

  return (
    <Link to={`/store/${_id}`}>
      <Card style={{ width: 300 }} cover={<img alt='module' src={cardImage} style={{ height: 200 }} />}>
        <Divider />

        <Meta style={{ marginBottom: 15 }} title={title} />

        <div style={{ marginBottom: 10 }}>
          <span className='rating'></span>
          <a>(30 отзывов)</a>
        </div>

        <h4>Цена</h4>
        <p>{price}</p>
      </Card>
    </Link>
  );
};

export default StoreItem;
