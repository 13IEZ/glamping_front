import React from 'react';

import { Card, Divider } from 'antd';
// import { Link } from 'react-router-dom';

import config from '../../../settings/config';

const { Meta } = Card;

interface IAccommodationCardProps {
  // _id: string;
  title: string;
  rent: string;
  rating: number;
  image: Array<string> | [];
}

const CurrentLocationItem: React.FC<IAccommodationCardProps> = ({ title, rent, image }) => {
  const cardImage = config.apiUrl + '/uploads/' + image[0];

  return (
    // <Link to={}>
    <Card style={{ width: 300 }} cover={<img alt='accommodation' src={cardImage} style={{ height: 200 }} />}>
      <Divider />
      <Meta style={{ marginBottom: 15 }} title={title} />
      <div style={{ marginBottom: 10 }}>
        <span className='rating'></span>
        <span>(30 отзывов)</span>
      </div>

      <h4>Аренда</h4>
      <p>{rent}</p>
    </Card>
    // </Link>
  );
};

export default CurrentLocationItem;
