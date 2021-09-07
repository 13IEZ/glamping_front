import './AccommodationMiniItem.scss';

import React from 'react';

import { Button, Card } from 'antd';
import { Link } from 'react-router-dom';

import config from '../../../../../settings/config';

const { Meta } = Card;

interface accommodationCardProps {
  _id: string;
  region?: string;
  title: string;
  rent: string;
  image: Array<string> | [];
  description: string;
  roominess: number;
  season: string;
  category: string;
  rating: number;
}

const AccommodationMiniItem: React.FC<accommodationCardProps> = ({ title, rent, image, _id, region }) => {
  const cardImage = config.apiUrl + '/uploads/' + image[0];
  const clickHandler: any = () => {
    console.log('clicked for location');
  };

  return (
    <div>
      <Link to={`/currentaccommodations/${_id}`}>
        <Card className='item__card' cover={<img alt='Not found' src={cardImage} className='item__card-img' />}>
          <Meta style={{ marginTop: 22, fontSize: 24, textAlign: 'center' }} title={title} />
          <p className='item__place'>{region}</p>
          <p className='item__rent'>{rent.replace(/(\d)(?=(\d{3})+(\D|$))/g, '$1 ')} ₸ в месяц</p>
          <Button className='item__button' type='primary' onClick={clickHandler}>
            Снять
          </Button>
        </Card>
      </Link>
    </div>
  );
};

export default AccommodationMiniItem;
