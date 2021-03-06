import './AppToolBar.scss';

import React, { useEffect } from 'react';

import { Divider } from 'antd';
import { Link } from 'react-router-dom';

import location_ic from '../../../assets/icons/location.svg';
import logo from '../../../assets/icons/logo.svg';
import { useActions } from '../../../hooks/useAction';
import { useTypedSelectorHook } from '../../../hooks/useTypedSelector';
import AnonymousMenu from './Menus/AnonymousMenu';
import UserMenu from './Menus/UserMenu';

const AppToolbar: React.FC = () => {
  const { user } = useTypedSelectorHook(state => state.users);
  const { fetchCategories, fetchFactories } = useActions();
  useEffect(() => {
    fetchCategories();
    fetchFactories();
  }, []);
  return (
    <header id='header' className='Header'>
      <div className='container'>
        <div className='Logo'>
          <Link to='/'>
            <img src={logo} alt='Logo' />
          </Link>
        </div>
        <div>
          <Link className='Header-MenuLink' to='/locations-map'>
            <img style={{ marginRight: '5px' }} src={location_ic} alt='Not found' />
            Карта глэмпингов
          </Link>
          <Divider className='header-divider' style={{ border: '1px solid #2F2D25' }} type='vertical' />
          <Link className='Header-MenuLink' to='/store/[]'>
            Магазин
          </Link>
          <Divider className='header-divider' style={{ border: '1px solid #2F2D25' }} type='vertical' />
          <Link className='Header-MenuLink' to='/'>
            Главная
          </Link>
        </div>
        <div className='Header-UserMenu'>{user ? <UserMenu /> : <AnonymousMenu />}</div>
      </div>
    </header>
  );
};

export default AppToolbar;
