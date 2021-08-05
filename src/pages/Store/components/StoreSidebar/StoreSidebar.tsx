import React from 'react';

import { Layout, Menu } from 'antd';
import { v4 as uuidv4 } from 'uuid';

import { useActions } from '../../../../hooks/useAction';
import { useTypedSelectorHook } from '../../../../hooks/useTypedSelector';

const { Sider } = Layout;
const { SubMenu } = Menu;

const StoreSidebar: React.FC = () => {
  const { fetchModulesCat, fetchProducts, setSortOptions, setFilterOptions } = useActions();
  const { categories } = useTypedSelectorHook(state => state.categories);
  const { factories } = useTypedSelectorHook(state => state.categories);
  const { sortOptions } = useTypedSelectorHook(state => state.categories);
  const { filterOptions } = useTypedSelectorHook(state => state.categories);

  const factoriesList = factories.map(factory => (
    <Menu.Item key={uuidv4()} onClick={() => filterHandler('factoryId', factory._id)}>
      {factory.title}
    </Menu.Item>
  ));

  const categoriesList = categories.map(category => (
    <Menu.Item key={uuidv4()} onClick={() => filterHandler('categoryId', category._id)}>
      {category.title}
    </Menu.Item>
  ));

  const emptyRefsHandler = () => {
    setSortOptions('empty', 'empty');
    setFilterOptions('empty', 'empty');
    fetchProducts();
  };

  const filterHandler = (fieldName: string, fieldValue: string) => {
    setFilterOptions(fieldName, fieldValue);
    if (sortOptions.fieldName === 'empty') {
      fetchModulesCat(fieldName, fieldValue, 'empty', 'empty');
    } else {
      fetchModulesCat(fieldName, fieldValue, sortOptions.fieldName, sortOptions.fieldValue);
    }
  };

  const sortHandler = (fieldName: string, fieldValue: string) => {
    setSortOptions(fieldName, fieldValue);
    if (filterOptions.fieldName === 'empty') {
      fetchModulesCat('empty', 'empty', fieldName, fieldValue);
    } else {
      fetchModulesCat(filterOptions.fieldName, filterOptions.fieldValue, fieldName, fieldValue);
    }
  };

  return (
    <>
      <Sider className='site-layout-background' width={200}>
        <Menu mode='inline' style={{ height: '100%', borderRight: 0 }}>
          <SubMenu key='sub1' title='Цена'>
            <Menu.Item key={uuidv4()} onClick={() => sortHandler('price', 'asc')}>
              По возрастанию
            </Menu.Item>
            <Menu.Item key={uuidv4()} onClick={() => sortHandler('price', 'desc')}>
              По убыванию
            </Menu.Item>
          </SubMenu>
          <SubMenu key='sub2' title='Вместимость'>
            <Menu.Item key={uuidv4()} onClick={() => filterHandler('roominess', '1')}>
              1-о местный
            </Menu.Item>
            <Menu.Item key={uuidv4()} onClick={() => filterHandler('roominess', '2')}>
              2-ух местный
            </Menu.Item>
            <Menu.Item key={uuidv4()} onClick={() => filterHandler('roominess', '3')}>
              3-ех местный
            </Menu.Item>
            <Menu.Item key={uuidv4()} onClick={() => filterHandler('roominess', '4')}>
              4-ех местный
            </Menu.Item>
            <Menu.Item key={uuidv4()} onClick={() => filterHandler('roominess', '5')}>
              5-и и более местный
            </Menu.Item>
          </SubMenu>
          <SubMenu key='sub3' title='Сезоность'>
            <Menu.Item key={uuidv4()} onClick={() => filterHandler('season', 'summer')}>
              Лето
            </Menu.Item>
            <Menu.Item key={uuidv4()} onClick={() => filterHandler('season', 'winter')}>
              Зима
            </Menu.Item>
            <Menu.Item key={uuidv4()} onClick={() => filterHandler('season', 'all')}>
              Все сезоны
            </Menu.Item>
          </SubMenu>
          <SubMenu key='sub4' title='Производитель'>
            {factoriesList}
          </SubMenu>
          <SubMenu key='sub5' title='Категории'>
            {categoriesList}
          </SubMenu>
          <SubMenu key='sub6' title='Очистить'>
            <Menu.Item key={uuidv4()} onClick={() => emptyRefsHandler()}>
              Очистить
            </Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>
    </>
  );
};

export default StoreSidebar;
