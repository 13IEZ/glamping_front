import React from 'react';
import { Menu, Avatar, Typography } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { useTypedSelectorHook } from '../../../../hooks/useTypedSelector';
import { Link } from 'react-router-dom';
import { useActions } from '../../../../hooks/useAction';
import './UserMenu.scss';

const { SubMenu } = Menu;

const UserMenu: any = () => {
  const { user } = useTypedSelectorHook(state => state.users);
  const { logoutUser } = useActions();

  const logoutHandler = () => {
    logoutUser();
  };

  return (
    <Menu mode='horizontal'>
      <SubMenu
        className='user_menu-title'
        key='SubMenu'
        icon={<Avatar size={32} icon={<UserOutlined />} />}
        title={user?.email}
      >
        <Menu.ItemGroup title='Действия'>
          <Menu.Item key='setting:1' className='mobile__book-btn'>
            <Link to='/location'>
              <Typography className='mobile__book-link'>Бронировать</Typography>
            </Link>
          </Menu.Item>
          <Menu.Item key='setting:2'>Личный кабинет</Menu.Item>
          <Menu.Item key='setting:3' onClick={logoutHandler}>
            Выйти
          </Menu.Item>
        </Menu.ItemGroup>
      </SubMenu>
    </Menu>
  );
};

export default UserMenu;
