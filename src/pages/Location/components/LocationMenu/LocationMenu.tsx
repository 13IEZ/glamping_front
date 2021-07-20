import React, { useState } from 'react';
import { Menu } from 'antd';
import './LocationMenu.scss';
import SelectList from '../SelectList/SelectList';
import tentIcon from '../../../../assets/icons/tent.png';
import urtIcon from '../../../../assets/icons/urt2.png';
import houseIcon from '../../../../assets/icons/house.png';
import geoIcon from '../../../../assets/icons/geo.png';
import trailIcon from '../../../../assets/icons/trail.png';
import avtoIcon from '../../../../assets/icons/avto.png';
import moduleIcon from '../../../../assets/icons/module.png';
import otherIcon from '../../../../assets/icons/other.png';
import allIcon from '../../../../assets/icons/all.png';

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
          <Menu onClick={handleClick} selectedKeys={[current]} mode='horizontal' className='map-menu' inlineIndent={12}>
            <Menu.Item key='tent'>
              {' '}
              <img src={tentIcon} /> Тенты{' '}
            </Menu.Item>
            <Menu.Item key='house'>
              {' '}
              <img src={houseIcon} /> Каркасные дома
            </Menu.Item>
            <Menu.Item key='dome'>
              {' '}
              <img src={geoIcon} />
              Купола
            </Menu.Item>
            <Menu.Item key='urt'>
              {' '}
              <img src={urtIcon} /> Юрты
            </Menu.Item>
            <Menu.Item key='trail'>
              {' '}
              <img src={trailIcon} /> Трейлеры
            </Menu.Item>
            <Menu.Item key='module'>
              {' '}
              <img src={moduleIcon} /> Модули
            </Menu.Item>
            <Menu.Item key='avto'>
              {' '}
              <img src={avtoIcon} /> Автодома
            </Menu.Item>
            <Menu.Item key='other'>
              {' '}
              <img src={otherIcon} /> Другое
            </Menu.Item>
            <Menu.Item key='all'>
              {' '}
              <img src={allIcon} /> Все
            </Menu.Item>
          </Menu>
        </div>
      </div>
    </>
  );
};

export default LocationMenu;
