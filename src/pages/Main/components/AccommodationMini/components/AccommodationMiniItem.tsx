import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Button } from 'antd';
import config from '../../../../../settings/config';
import './AccommodationMiniItem.scss';

const { Meta } = Card;

interface accommodationCardProps {
  _id: string;
  title: string;
  rent: string;
  image: Array<string> | [];
}

const AccommodationMiniItem: React.FC<accommodationCardProps> = ({ title, rent, image, _id }) => {
  const cardImage = config.apiUrl + '/uploads/' + image[0];
  const clickHandler: any = () => {
    console.log('clicked for location');
  };

  return (
    <div>
      <Link to={`/accommodations/${_id}`}>
        <Card className='item__card' cover={<img alt='Not found' src={cardImage} className='item__card-img' />}>
          <Meta style={{ marginTop: 22, fontSize: 24, textAlign: 'center' }} title={title} />
          <p className='item__place'>Туркестан</p>
          <p className='item__rent'>{rent} ₸ в месяц</p>
          <Button className='item__button' type='primary' onClick={clickHandler}>
            Снять
          </Button>
        </Card>
      </Link>
    </div>
  );
};

export default AccommodationMiniItem;
