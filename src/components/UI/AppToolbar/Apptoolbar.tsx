import React from 'react';
import { Layout, Menu, Typography, Col } from 'antd';
const { Title } = Typography;
import { BuildOutlined } from '@ant-design/icons';
import { useTypedSelectorHook } from '../../../hooks/useTypedSelector';
import AnonymousMenu from './Menus/AnonymousMenu';
import UserMenu from './Menus/UserMenu';
import './AppToolbar.scss';

// const { Header } = Layout;

const AppToolbar: React.FC = () => {
  const { user } = useTypedSelectorHook(state => state.users);

  return (
    <Layout>
      {/* <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}> */}
      {/* <div className='logo' /> */}
      <Menu mode='horizontal' className='header'>
        <Col flex='auto'>
          <Title>
            <BuildOutlined style={{ fontSize: '32px' }} />
            Example logo
          </Title>
        </Col>
        <Col flex='auto'>{user ? <UserMenu user={user.username} /> : <AnonymousMenu />}</Col>
      </Menu>
      {/* </Header> */}
    </Layout>
  );
};

export default AppToolbar;
