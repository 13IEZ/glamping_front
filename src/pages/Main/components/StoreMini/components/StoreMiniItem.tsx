import './StoreMiniItem.scss';

import React from 'react';

import { Button, Card } from 'antd';
import { Link } from 'react-router-dom';

import config from '../../../../../settings/config';

const { Meta } = Card;

interface IProductCardProps {
  _id: string;
  title: string;
  price: string;
  image: Array<string> | [];
}

const StoreMiniItem: React.FC<IProductCardProps> = ({ title, price, image, _id }) => {
  const cardImage = config.apiUrl + '/uploads/' + image[0];
  const clickHandler: any = () => {
    console.log('clicked for investor');
  };

  return (
    <Link to={`/storedetail/${_id}`}>
      <Card className='item__card' cover={<img alt='Not found' src={cardImage} className='item__card-img' />}>
        <Meta style={{ marginBottom: 22, marginTop: 7, fontSize: 24, textAlign: 'center' }} title={title} />
        <p className='item__price'>от {price.replace(/(\d)(?=(\d{3})+(\D|$))/g, '$1 ')} ₸</p>
        <Button className='item__button' type='primary' onClick={clickHandler}>
          Подробнее
        </Button>
      </Card>
    </Link>
  );
};

export default StoreMiniItem;
