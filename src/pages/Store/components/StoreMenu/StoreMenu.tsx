import './StoreMenu.scss';

import React from 'react';

import { Layout, Menu } from 'antd';
import { v4 as uuidv4 } from 'uuid';

const { Header } = Layout;
const StoreMenu: React.FC = () => {
  return (
    <>
      <Header>
        <Menu mode='horizontal'>
          <Menu.Item key={uuidv4()}>Тенты</Menu.Item>
          <Menu.Item key={uuidv4()}>Каркасные дома</Menu.Item>
          <Menu.Item key={uuidv4()}>Купола</Menu.Item>
          <Menu.Item key={uuidv4()}>Юрты</Menu.Item>
          <Menu.Item key={uuidv4()}>Модули</Menu.Item>
          <Menu.Item key={uuidv4()}>Трейлеры</Menu.Item>
          <Menu.Item key={uuidv4()}>Автодома</Menu.Item>
          <Menu.Item key={uuidv4()}>Другое</Menu.Item>
        </Menu>
      </Header>
    </>
  );
};

export default StoreMenu;
