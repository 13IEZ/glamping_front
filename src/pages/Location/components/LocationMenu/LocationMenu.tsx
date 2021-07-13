import React, { useState } from 'react';
import { Menu } from 'antd';
import './LocationMenu.scss';

const LocationMenu: React.FC = () => {
  const [state, setState] = useState({ current: '' });
  const handleClick = (e: any) => {
    console.log('click ', e);
    setState({ current: e.key });
  };
  const { current } = state;
  return (
    <Menu onClick={handleClick} selectedKeys={[current]} mode='horizontal' className='map-menu'>
      <Menu.Item key='example1'>Образец 1</Menu.Item>
      <Menu.Item key='example2'>Образец 2</Menu.Item>
      <Menu.Item key='example3'>Образец 3</Menu.Item>
      <Menu.Item key='example4'>Образец 4</Menu.Item>
      <Menu.Item key='example5'>Образец 5</Menu.Item>
    </Menu>
  );
};

export default LocationMenu;
