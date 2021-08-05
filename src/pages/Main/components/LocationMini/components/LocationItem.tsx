import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'antd';
import config from '../../../../../settings/config';
import './LocationItem.scss';

const { Meta } = Card;

interface locationCardProps {
  _id: string;
  title: string;
  description: string;
  region: string;
  square: number;
  image: Array<string> | [];
}

const LocationItem: React.FC<locationCardProps> = ({ title, description, image, _id, region }) => {
  const cardImage = config.apiUrl + '/uploads/' + image[0];

  return (
    <div>
      <Link to={`/locations/${_id}`}>
        <Card
          className='item__card location-item__card'
          cover={<img alt='Not found' src={cardImage} className='item__card-img' />}
        >
          <Meta style={{ marginTop: 22, fontSize: 24, textAlign: 'center' }} title={title} />
          <p className='location-item__place'>{region}</p>
          <p>{description}</p>
        </Card>
      </Link>
    </div>
  );
};

export default LocationItem;
