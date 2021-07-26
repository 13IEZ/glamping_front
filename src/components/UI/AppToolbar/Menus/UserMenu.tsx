import React from 'react';
import { Menu } from 'antd';
import { useTypedSelectorHook } from '../../../../hooks/useTypedSelector';
import { useActions } from '../../../../hooks/useAction';
import './UserMenu.scss';
import ic from '../../../../assets/icons/account.svg';
import { Link } from 'react-router-dom';

const { SubMenu } = Menu;

const UserMenu: any = () => {
  const { user } = useTypedSelectorHook(state => state.users);
  const { logoutUser } = useActions();

  const logoutHandler = () => {
    logoutUser();
  };

  return (
    <Menu mode='horizontal'>
      <SubMenu className='user_menu-title' key='SubMenu' icon={<img src={ic} alt='Not found' />} title={user?.email}>
        <Menu.ItemGroup>
          <Menu.Item key='setting:1'>
            <Link to='/'>Личный кабинет</Link>
          </Menu.Item>
          <Menu.Item className='mobile-function' key='setting:2'>
            <Link to='/'>На главную</Link>
          </Menu.Item>
          <Menu.Item key='setting:3' onClick={logoutHandler}>
            <Link to='/'>Выйти</Link>
          </Menu.Item>
        </Menu.ItemGroup>
      </SubMenu>
    </Menu>
  );
};

export default UserMenu;
