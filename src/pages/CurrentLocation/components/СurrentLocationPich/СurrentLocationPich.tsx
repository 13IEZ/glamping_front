import React from 'react';

import { Button, Card } from 'antd';
import { Link } from 'react-router-dom';

import config from '../../../../settings/config';
import './СurrentLocationPich.scss';

const { Meta } = Card;

interface IPichesCardProps {
  _id: string;
  title: string;
  description: string;
  image: Array<string> | [];
  number: number;
  free: boolean;
}

const CurrentLocationPich: React.FC<IPichesCardProps> = ({ _id, title, description, image, number, free }) => {
  const cardImage = config.apiUrl + '/uploads/' + image[0];

  let freeVar;
  let freeStyle: any;
  if (free) {
    freeVar = 'Участок свободен';
    freeStyle = { marginTop: 15, textAlign: 'center', fontWeight: 'bold', color: 'green' };
  } else {
    freeVar = 'Участок занят';
    freeStyle = { marginTop: 15, textAlign: 'center', fontWeight: 'bold', color: 'red' };
  }

  return (
    <Link to={`/pich/${_id}`}>
      <Card
        title={'ПИЧ ' + number}
        style={{ width: 300, height: 580 }}
        cover={<img alt='pich' src={cardImage} style={{ height: 200 }} />}
      >
        <Meta title={title} style={{ marginTop: 22, marginBottom: 10, fontSize: 24 }} />
        <p style={freeStyle}>{freeVar}</p>
        <p style={{ marginTop: 15, marginBottom: 15, textAlign: 'center' }} className='pich-description'>
          {description}
        </p>
        <Button className='pich-item-button' disabled={!free}>
          Подробнее
        </Button>
      </Card>
    </Link>
  );
};

export default CurrentLocationPich;
