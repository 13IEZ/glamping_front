import './StoreMenu.scss';

import React from 'react';

import { Layout, Menu } from 'antd';

const { Header } = Layout;
const StoreMenu: React.FC = () => {
  return (
    <>
      <Header>
        <Menu mode='horizontal'>
          <Menu.Item key='1'>Тенты</Menu.Item>
          <Menu.Item key='2'>Каркасные дома</Menu.Item>
          <Menu.Item key='3'>Купола</Menu.Item>
          <Menu.Item key='4'>Юрты</Menu.Item>
          <Menu.Item key='5'>Модули</Menu.Item>
          <Menu.Item key='6'>Трейлеры</Menu.Item>
          <Menu.Item key='7'>Автодома</Menu.Item>
          <Menu.Item key='8'>Другое</Menu.Item>
        </Menu>
      </Header>
    </>
  );
};

export default StoreMenu;
