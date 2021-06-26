import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'antd';

// const { Link } = Anchor;

const AnonymousMenu: React.FC = () => {
  return (
    <>
      <Link to='/register'>
        <Button type='primary'>Register</Button>
      </Link>
      <Link to='/login'>
        <Button>Login</Button>
      </Link>
    </>
  );
};

export default AnonymousMenu;
