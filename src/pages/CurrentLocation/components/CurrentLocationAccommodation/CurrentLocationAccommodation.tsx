import React from 'react';

import { Card, Typography } from 'antd';
import { Link } from 'react-router-dom';

import config from '../../../../settings/config';
import './CurrentLocationAccommodation.scss';

const { Meta } = Card;
const { Paragraph } = Typography;
const { Title } = Typography;

interface IAccommodationCardProps {
  _id: string;
  title: string;
  rent: string;
  rating: number;
  image: Array<string> | [];
}

const CurrentLocationAccommodation: React.FC<IAccommodationCardProps> = ({ title, rent, image, _id, rating }) => {
  const cardImage = config.apiUrl + '/uploads/' + image[0];

  return (
    <Link to={`/currentaccommodations/${_id}`}>
      <Card style={{ width: 300 }} cover={<img alt='accommodation' src={cardImage} style={{ height: 200 }} />}>
        <Meta title={title} style={{ marginTop: 22, marginBottom: 10, fontSize: 24 }} />
        <Title level={4}>Аренда</Title>
        <Paragraph style={{ fontSize: 18 }}>{rent} ₸</Paragraph>
        <div className='accommodation-rating'>
          {rating === 5 ? <span className='rating-five' style={{ marginLeft: 10 }}></span> : null}
          {rating === 4 ? <span className='rating-four' style={{ marginLeft: 25 }}></span> : null}
          {rating === 3 ? <span className='rating-three' style={{ marginLeft: 40 }}></span> : null}
          {rating === 2 ? <span className='rating-two' style={{ marginLeft: 55 }}></span> : null}
          {rating === 1 ? <span className='rating-one' style={{ marginLeft: 70 }}></span> : null}
        </div>
      </Card>
    </Link>
  );
};

export default CurrentLocationAccommodation;
