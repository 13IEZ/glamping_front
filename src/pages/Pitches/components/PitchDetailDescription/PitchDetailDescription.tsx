import './PitchDetailDescription.scss';

import React from 'react';

import { Divider, Typography } from 'antd';

const { Paragraph } = Typography;
const { Title } = Typography;

interface ICurrentPitchProps {
  title?: string;
  rent?: string;
  description?: string;
  number?: string;
}

const PitchDetailDescription: React.FC<ICurrentPitchProps> = ({ title, rent, description, number }) => {
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
      <Divider />
      <Title level={5}>Цена</Title>
      <Paragraph>{rent} ₸</Paragraph>
      <Divider />
      <Paragraph>{description}</Paragraph>
    </div>
  );
};

export default PitchDetailDescription;
