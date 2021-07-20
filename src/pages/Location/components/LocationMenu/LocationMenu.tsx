import React, { useState } from 'react';
import { Menu } from 'antd';
import './LocationMenu.scss';
import SelectList from '../SelectList/SelectList';

const LocationMenu: React.FC<any> = props => {
  const [state, setState] = useState({ current: 'all' });
  const handleClick = (e: any) => {
    console.log('click ', e);
    setState({ current: e.key });
    props.handleCoordinates(e.key);
  };
  const { current } = state;
  return (
    <>
      <div className='menu-container'>
        <SelectList handleChange={props.handleChange} coordinates={props.coordinates} />
        <div className='menu_warpper'>
          <Menu onClick={handleClick} selectedKeys={[current]} mode='horizontal' className='map-menu'>
            <Menu.Item key='tent'>Тенты</Menu.Item>
            <Menu.Item key='house'>Каркасные дома</Menu.Item>
            <Menu.Item key='dome'>Купола</Menu.Item>
            <Menu.Item key='urt'>Юрты</Menu.Item>
            <Menu.Item key='module'>Модули</Menu.Item>
            <Menu.Item key='trail'>Трейлеры</Menu.Item>
            <Menu.Item key='avto'>Автодома</Menu.Item>
            <Menu.Item key='other'>Другое</Menu.Item>
            <Menu.Item key='all'>Все</Menu.Item>
          </Menu>
        </div>
      </div>
    </>
  );
};

export default LocationMenu;
