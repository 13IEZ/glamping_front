import React from 'react';

import {
  Layout,
  Menu
} from 'antd';

import { useTypedSelectorHook } from '../../../hooks/useTypedSelector';
import AnonymousMenu from './Menus/AnonymousMenu';
import UserMenu from './Menus/UserMenu';

const { Header } = Layout;

const AppToolbar: React.FC = () => {
  const {user} = useTypedSelectorHook(state => state.users);

  return (
    <Layout>
    <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
      {
        user ? <UserMenu user={user.username}/> : <AnonymousMenu />
      }
      </Menu>
    </Header>
    </Layout>
  )
}

export default AppToolbar;