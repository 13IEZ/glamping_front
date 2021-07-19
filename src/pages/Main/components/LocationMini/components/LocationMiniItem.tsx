import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Button } from 'antd';
import config from '../../../../../settings/config';
import './LocationMiniItem.scss';

const { Meta } = Card;

interface locationCardProps {
  _id: string;
  title: string;
  rent: number;
  square: number;
  image: Array<string> | [];
}

const LocationMiniItem: React.FC<locationCardProps> = ({ title, rent, square, image, _id }) => {
  const cardImage = config.apiUrl + '/uploads/' + image[0];
  const clickHandler: any = () => {
    console.log('clicked for location');
  };

  return (
    <div>
      <Link to={`/location/${_id}`}>
        <Card style={{ width: 270 }} cover={<img alt='module' src={cardImage} style={{ height: 200, width: 270 }} />}>
          <Meta style={{ marginTop: 22, fontSize: 24, textAlign: 'center' }} title={title} />
          <p className='item__square'>{square} соток</p>
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

export default LocationMiniItem;
