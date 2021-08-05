import './StoreMenu.scss';

import React from 'react';

import { Layout, Menu } from 'antd';
import { useTypedSelectorHook } from '../../../../hooks/useTypedSelector';
import { useActions } from '../../../../hooks/useAction';
import { v4 as uuidv4 } from 'uuid';

const { Header } = Layout;
const StoreMenu: React.FC = () => {
  const { fetchModulesCat, setFilterOptions } = useActions();
  const { categories } = useTypedSelectorHook(state => state.categories);
  const { sortOptions } = useTypedSelectorHook(state => state.categories);

  const filterHandler = (fieldName: string, fieldValue: string) => {
    setFilterOptions(fieldName, fieldValue);
    if (sortOptions.fieldName === 'empty') {
      fetchModulesCat(fieldName, fieldValue, 'empty', 'empty');
    } else {
      fetchModulesCat(fieldName, fieldValue, sortOptions.fieldName, sortOptions.fieldValue);
    }
  };

  const categoriesList = categories.map(category => (
    <Menu.Item key={uuidv4()} onClick={() => filterHandler('categoryId', category._id)}>
      {category.title}
    </Menu.Item>
  ));

  return (
    <>
      <Header>
        <Menu mode='horizontal'>{categoriesList}</Menu>
      </Header>
    </>
  );
};

export default StoreMenu;
