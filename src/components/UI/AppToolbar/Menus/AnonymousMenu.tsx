import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'antd';

const { SubMenu } = Menu;
import './AnonymousMenu.scss';
import ic from '../../../../assets/icons/account.svg';

const AnonymousMenu: React.FC = () => {
  return (
    <>
      <Menu mode='horizontal'>
        <SubMenu key='SubMenu' icon={<img src={ic} alt='Not found' />} title={'Меню'}>
          <Menu.ItemGroup title='Действия'>
            <Menu.Item key='setting:1'>
              <Link to='/register'>Регистрация</Link>
            </Menu.Item>
            <Menu.Item key='setting:2'>
              <Link to='/login'>Вход</Link>
            </Menu.Item>
            <Menu.Item className='mobile-function' key='setting:3'>
              <Link to='/'>На главную</Link>
            </Menu.Item>
          </Menu.ItemGroup>
        </SubMenu>
      </Menu>
    </>
  );
};

export default AnonymousMenu;
