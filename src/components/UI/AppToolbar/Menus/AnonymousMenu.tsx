import React from 'react';

import { Anchor } from 'antd';

const { Link } = Anchor;

const AnonymousMenu: React.FC = () => {
  return (
    <>
      <Link href='#' title='Sign Up'/>
      <Link href='#' title='Sign In'/>
    </>
  )
}

export default AnonymousMenu;