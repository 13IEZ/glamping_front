import './StoreMenu.scss';

import React, { useEffect } from 'react';

import { Layout, Menu } from 'antd';
import { useTypedSelectorHook } from '../../../../hooks/useTypedSelector';
import { useActions } from '../../../../hooks/useAction';

const { Header } = Layout;
const StoreMenu: React.FC = () => {
  const { categories } = useTypedSelectorHook(state => state.categories);

  const { fetchCategories, fetchProductsByCategory } = useActions();

  useEffect(() => {
    fetchCategories();
  }, []);

  const categoriesButtons = categories.map(category => {
    return (
      <Menu.Item key={category._id} onClick={() => fetchProductsByCategory(category._id)}>
        {category.title}
      </Menu.Item>
    );
  });

  return (
    <>
      <Header>
        <Menu mode='horizontal'>{categoriesButtons}</Menu>
      </Header>
    </>
  );
};

export default StoreMenu;
