import './AppToolBar.scss';

import React from 'react';

import { Button, Col, Divider, Layout, Row, Space } from 'antd';
import { Link } from 'react-router-dom';

import logo from '../../../assets/logo.png';
import { useTypedSelectorHook } from '../../../hooks/useTypedSelector';
import AnonymousMenu from './Menus/AnonymousMenu';
import UserMenu from './Menus/UserMenu';

const { Header } = Layout;

const AppToolbar: React.FC = () => {
  const { user } = useTypedSelectorHook(state => state.users);

  return (
    <Header className='header'>
      <Row className='header-nav' justify='space-around' align='middle'>
        <Col className='header-nav__logo'>
          <Link to='/'>
            <img src={logo} alt='logo' />
          </Link>
        </Col>
        <Col>
          <Link to='/location'>
            <Button type='dashed'>Карта локаций</Button>
          </Link>
          <Divider style={{ backgroundColor: '#000' }} type='vertical' />
          <Link to='/store'>
            <Button type='dashed'>Магазин</Button>
          </Link>
        </Col>
        <Col>
          <Space size='large'>
            <Link className='header-nav__book-btn' to='/location'>
              <Button type='primary'>Бронировать</Button>
            </Link>
            {user ? <UserMenu /> : <AnonymousMenu />}
          </Space>
        </Col>
      </Row>
    </Header>
  );
};

export default AppToolbar;
