import './StoreMenu.scss';

import React from 'react';

import { Layout, Menu } from 'antd';
import { useTypedSelectorHook } from '../../../../hooks/useTypedSelector';
import { v4 as uuidv4 } from 'uuid';

const { Header } = Layout;
const StoreMenu: React.FC = () => {
  const { categories } = useTypedSelectorHook(state => state.categories);

  const categoriesList = categories.map(category => <Menu.Item key={uuidv4()}>{category.title}</Menu.Item>);

  return (
    <>
      <Header>
        <Menu mode='horizontal'>{categoriesList}</Menu>
      </Header>
    </>
  );
};

export default StoreMenu;
