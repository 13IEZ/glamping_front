import './СurrentLocationPich.scss';

import React from 'react';

import { Button, Card } from 'antd';
import { Link } from 'react-router-dom';

import config from '../../../../settings/config';

const { Meta } = Card;

interface IPichesCardProps {
  _id: string;
  title: string;
  description: string;
  image: Array<string> | [];
  number: string;
}

const CurrentLocationPich: React.FC<IPichesCardProps> = ({ _id, title, description, image, number }) => {
  const cardImage = config.apiUrl + '/uploads/' + image[0];

  return (
    <Link to={`/pich/${_id}`}>
      <Card
        title={'ПИТЧ ' + number}
        style={{ width: 300, height: 580 }}
        cover={<img alt='pich' src={cardImage} style={{ height: 200 }} />}
      >
        <Meta title={title} style={{ marginTop: 22, marginBottom: 10, fontSize: 24 }} />
        <p style={{ marginTop: 15, marginBottom: 15, textAlign: 'center' }} className='pich-description'>
          {description}
        </p>
        <Button className='pich-item-button'>Подробнее</Button>
      </Card>
    </Link>
  );
};

export default CurrentLocationPich;
