import React from 'react';
import { Menu, Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { useTypedSelectorHook } from '../../../../hooks/useTypedSelector';
import { useActions } from '../../../../hooks/useAction';

const { SubMenu } = Menu;

const UserMenu: any = () => {
  const { user } = useTypedSelectorHook(state => state.users);
  const { logoutUser } = useActions();

  const logoutHandler = () => {
    logoutUser();
  };

  return (
    <Menu mode='horizontal'>
      <SubMenu key='SubMenu' icon={<Avatar size={32} icon={<UserOutlined />} />} title={user?.email}>
        <Menu.ItemGroup title='Действия'>
          <Menu.Item key='setting:1'>Личный кабинет</Menu.Item>
          <Menu.Item key='setting:2' onClick={logoutHandler}>
            Выйти
          </Menu.Item>
        </Menu.ItemGroup>
      </SubMenu>
    </Menu>
  );
};

export default UserMenu;
