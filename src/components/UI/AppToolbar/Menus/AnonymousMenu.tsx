import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Divider } from 'antd';

// const { Link } = Anchor;

const AnonymousMenu: React.FC = () => {
  return (
    <>
      <Link to='/register'>
        <Button>Регистрация</Button>
      </Link>
      <Divider style={{ backgroundColor: '#000' }} type='vertical' />
      <Link to='/login'>
        <Button>Вход</Button>
      </Link>
    </>
  );
};

export default AnonymousMenu;
