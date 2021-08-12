import React from 'react';
import { Typography } from 'antd';

const { Paragraph } = Typography;

interface IAccommodationItemProps {
  title?: string;
  description?: string;
  rating?: number;
  roominess?: number;
  electricity?: boolean;
  water?: boolean;
  road?: boolean;
  category?: string;
  season?: string;
}

const CurrentAccommodationDescription: React.FC<IAccommodationItemProps> = ({
  title,
  description,
  roominess,
  season,
  electricity,
  road,
  water,
  rating,
}) => {
  switch (season) {
    case 'summer':
      season = 'Лето';
      break;
    case 'winter':
      season = 'Зима';
      break;
    case 'all':
      season = 'Круглый год';
      break;
    default:
      season = 'Нет информации';
  }

  return (
    <div>
      {rating === 5 ? <span className='rating-five'></span> : null}
      {rating === 4 ? <span className='rating-four'></span> : null}
      {rating === 3 ? <span className='rating-three'></span> : null}
      {rating === 2 ? <span className='rating-two'></span> : null}
      {rating === 1 ? <span className='rating-one'></span> : null}
      <Paragraph> {title} </Paragraph>
      <Paragraph> Сезон: {season} </Paragraph>
      <Paragraph> Вместимость: {roominess} </Paragraph>
      <Paragraph> {description} </Paragraph>
      <Paragraph> Инфрастуктура: </Paragraph>
      {electricity ? <Paragraph>- Элкетричество</Paragraph> : null}
      {road ? <Paragraph>- Подьездные пути</Paragraph> : null}
      {water ? <Paragraph>- Вода</Paragraph> : null}
    </div>
  );
};

export default CurrentAccommodationDescription;
