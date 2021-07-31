import React from 'react';
import { Tabs } from 'antd';
import './ProductDetailTab.scss';
const { TabPane } = Tabs;

function callback(key: any) {
  console.log(key);
}

interface ICurrentProductProps {
  season?: string;
  roominess?: number;
  description?: string;
  factory?: string;
}

const ProductDetailTab: React.FC<ICurrentProductProps> = ({ season, roominess, description, factory }) => {
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
    <Tabs defaultActiveKey='1' type='card' onChange={callback}>
      <TabPane tab='Отзывы' key='1'>
        Здесь будут отзывы
      </TabPane>
      <TabPane tab='Характеристики' key='2'>
        <p>Сезон: {season}</p>
        <p>Вместимость: {roominess}</p>
        <p>Описание: {description}</p>
        <p>Производитель: {factory}</p>
      </TabPane>
      <TabPane tab='Условия покупки' key='3'>
        Контент будет позже
      </TabPane>
    </Tabs>
  );
};

export default ProductDetailTab;
