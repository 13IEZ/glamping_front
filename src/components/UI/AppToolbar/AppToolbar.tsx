import React from 'react';
import { Layout, Typography, Col, Button, Divider, Row, Space } from 'antd';
const { Title } = Typography;
import { BuildOutlined } from '@ant-design/icons';
import { useTypedSelectorHook } from '../../../hooks/useTypedSelector';
import AnonymousMenu from './Menus/AnonymousMenu';
import UserMenu from './Menus/UserMenu';
import './AppToolBar.scss';
const { Header } = Layout;
import { Link } from 'react-router-dom';

const AppToolbar: React.FC = () => {
  const { user } = useTypedSelectorHook(state => state.users);

  return (
    <Layout>
      <Header className='header'>
        <Row justify='space-around' align='middle'>
          <Col>
            <Link to='/'>
              <Title level={2}>
                <BuildOutlined style={{ fontSize: '24px' }} />
                Example logo
              </Title>
            </Link>
          </Col>
          <Col>
            <Link to='/location'>
              <Button type='link'>Карта локаций</Button>
            </Link>
            <Divider style={{ backgroundColor: '#000' }} type='vertical' />
            <Link to='/store'>
              <Button type='link'>Наши товары</Button>
            </Link>
          </Col>
          <Col>
            <Space size='large'>
              <Link to='/location'>
                <Button type='primary'>Бронировать</Button>
              </Link>
              {user ? <UserMenu user={user.username} /> : <AnonymousMenu />}
            </Space>
          </Col>
        </Row>
      </Header>
    </Layout>
  );
};

export default AppToolbar;
