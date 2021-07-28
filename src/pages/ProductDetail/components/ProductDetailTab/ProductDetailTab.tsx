import React from 'react';
import { Tabs } from 'antd';
const { TabPane } = Tabs;

function callback(key: any) {
  console.log(key);
}

const ProductDetailTab: React.FC = () => {
  return (
    <Tabs defaultActiveKey='1' onChange={callback}>
      <TabPane tab='Отзывы' key='1'>
        Здесь будут отзывы
      </TabPane>
      <TabPane tab='Характеристики' key='2'>
        Что в базе хранит характеристики?
      </TabPane>
      <TabPane tab='Условия покупки' key='3'>
        Контент будет позже
      </TabPane>
    </Tabs>
  );
};

export default ProductDetailTab;
