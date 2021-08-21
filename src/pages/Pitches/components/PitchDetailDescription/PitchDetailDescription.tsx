import './PitchDetailDescription.scss';

import React from 'react';

import { Divider, Typography } from 'antd';

const { Paragraph } = Typography;
const { Title } = Typography;

interface ICurrentPitchProps {
  title?: string;
  rating?: number;
  rent?: string;
  description?: string;
  number?: string;
}

const PitchDetailDescription: React.FC<ICurrentPitchProps> = ({ title, rating, rent, description, number }) => {
  // let freeVar;
  // let freeStyle: any;
  // if (free) {
  //   freeVar = 'Участок свободен';
  //   freeStyle = { marginTop: 15, textAlign: 'center', fontWeight: 'bold', color: 'green' };
  // } else {
  //   freeVar = 'Участок занят';
  //   freeStyle = { marginTop: 15, textAlign: 'center', fontWeight: 'bold', color: 'red' };
  // }
  return (
    <div className='pitch-detail-description'>
      <Title level={4}>{'ПИТЧ ' + number}</Title>
      {/* <p style={freeStyle}>{freeVar}</p> */}
      <Title level={4}>{title}</Title>
      <div>
        {rating === 5 ? <span className='rating-five'></span> : null}
        {rating === 4 ? <span className='rating-four'></span> : null}
        {rating === 3 ? <span className='rating-three'></span> : null}
        {rating === 2 ? <span className='rating-two'></span> : null}
        {rating === 1 ? <span className='rating-one'></span> : null}
      </div>
      <Divider />
      <Title level={5}>Цена</Title>
      <Paragraph>{rent} ₸</Paragraph>
      <Divider />
      <Paragraph>{description}</Paragraph>
    </div>
  );
};

export default PitchDetailDescription;
