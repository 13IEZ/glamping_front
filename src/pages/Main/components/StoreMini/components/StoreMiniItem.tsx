import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Button } from 'antd';
import config from '../../../../../settings/config';
import './StoreMiniItem.scss';

const { Meta } = Card;

interface IModuleCardProps {
  _id: string;
  title: string;
  price: number;
  image: Array<string> | [];
}

const StoreMiniItem: React.FC<IModuleCardProps> = ({ title, price, image, _id }) => {
  const cardImage = config.apiUrl + '/uploads/' + image[0];
  const clickHandler: any = () => {
    console.log('clicked for investor');
  };

  return (
    <Link to={`/store/${_id}`}>
      <Card style={{ width: 270 }} cover={<img alt='module' src={cardImage} style={{ height: 200, width: 270 }} />}>
        <Meta style={{ marginBottom: 22, marginTop: 7, fontSize: 24, textAlign: 'center' }} title={title} />
        <p className='item__price'>от {price} ₸</p>
        <Button className='item__button' type='primary' onClick={clickHandler}>
          Подробнее
        </Button>
      </Card>
    </Link>
  );
};

export default StoreMiniItem;
