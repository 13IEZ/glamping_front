import React from 'react';

import { Card } from 'antd';
import { Link } from 'react-router-dom';
import config from '../../settings/config';

const { Meta } = Card;

interface IModuleCardProps {
  _id: string;
  title: string;
  description: string;
  image: Array<string> | [];
}

const ModuleCard: React.FC<IModuleCardProps> = ({ title, description, image }) => {
  const cardImage = config.apiUrl + '/uploads/' + image[0];

  return (
    <>
      <Card hoverable style={{ width: 800 }} cover={<img alt='example' src={cardImage} />}>
        <Meta title={title} description={description} />
        <Link to='/modules/info'>Прдробнее</Link>
      </Card>
    </>
  );
};

export default ModuleCard;
