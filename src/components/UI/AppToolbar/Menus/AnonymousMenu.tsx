import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Divider, Menu, Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
const { SubMenu } = Menu;
import './AnonymousMenu.scss';

const AnonymousMenu: React.FC = () => {
  return (
    <>
      <div className='anonymous_menu-regular'>
        <Link to='/register'>
          <Button>Регистрация</Button>
        </Link>
        <Divider style={{ backgroundColor: '#000' }} type='vertical' />
        <Link to='/login'>
          <Button>Вход</Button>
        </Link>
      </div>
      <div className='anonymous_menu-mobile'>
        <Menu mode='horizontal'>
          <SubMenu key='SubMenu' icon={<Avatar size={32} icon={<UserOutlined />} />} title={`Меню`}>
            <Menu.ItemGroup title='Действия'>
              <Menu.Item key='setting:1'>
                <Link to='/register'>Регистрация</Link>
              </Menu.Item>
              <Menu.Item key='setting:2'>
                <Link to='/login'>Вход</Link>
              </Menu.Item>
            </Menu.ItemGroup>
          </SubMenu>
        </Menu>
      </div>
    </>
  );
};

export default AnonymousMenu;
