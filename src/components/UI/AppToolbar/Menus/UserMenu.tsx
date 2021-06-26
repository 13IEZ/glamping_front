import React from 'react';

import { Button, Menu } from 'antd';

interface UserMenuProps {
  user: string;
}

const { SubMenu } = Menu;

const UserMenu: React.FC<UserMenuProps> = ({ user }) => {
  return (
    <>
      <Button type='primary' shape='round'>
        Hello, {user}
      </Button>
      <Menu mode='inline' defaultSelectedKeys={['1']} defaultOpenKeys={['sub1']} style={{ height: '100%' }}>
        <SubMenu key='sub1' title='menu'>
          <Menu.Item key='1'>Profile</Menu.Item>
          <Menu.Item key='2'>Logout</Menu.Item>
        </SubMenu>
      </Menu>
    </>
  );
};

export default UserMenu;
