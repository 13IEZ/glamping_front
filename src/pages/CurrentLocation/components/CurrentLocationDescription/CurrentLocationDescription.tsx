import React from 'react';
import { Typography } from 'antd';
import './CurrentLocationDescription.scss';

const { Paragraph } = Typography;

interface IReviewItemProps {
  title?: string;
  description?: string;
  electricity?: boolean;
  water?: boolean;
  road?: boolean;
}

const CurrentLocationDescription: React.FC<IReviewItemProps> = ({ title, description, electricity, road, water }) => {
  return (
    <div className='location-description'>
      <Paragraph> {title} </Paragraph>
      <Paragraph> {description} </Paragraph>
      <Paragraph> Инфрастуктура: </Paragraph>
      {electricity ? <Paragraph>- Элкетричество</Paragraph> : null}
      {road ? <Paragraph>- Подьездные пути</Paragraph> : null}
      {water ? <Paragraph>- Вода</Paragraph> : null}
    </div>
  );
};

export default CurrentLocationDescription;
