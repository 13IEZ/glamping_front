import './StoreSidebar.scss';

import React from 'react';

import { Button, Divider, Layout, Menu } from 'antd';

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
    <Menu.Item key={factory._id} onClick={() => filterHandler('factoryId', factory._id)}>
      {factory.title}
    </Menu.Item>
  ));

  const categoriesList = categories.map(category => (
    <Menu.Item key={category._id} onClick={() => filterHandler('categoryId', category._id)}>
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
      <Sider className='site-layout-background' width={238}>
        <Menu
          mode='inline'
          style={{ height: '100%', borderRight: 0 }}
          className='site-layout-background'
          defaultOpenKeys={['sub1', 'sub2', 'sub3', 'sub4', 'sub5', 'sub6']}
        >
          <SubMenu key='sub1' title='Цена' className='site-layout-background'>
            <Menu.Item key='1.1' onClick={() => sortHandler('price', 'asc')}>
              По возрастанию
            </Menu.Item>
            <Menu.Item key='2.1' onClick={() => sortHandler('price', 'desc')}>
              По убыванию
            </Menu.Item>
            <Divider />
          </SubMenu>
          <SubMenu key='sub2' title='Вместимость' className='site-layout-background'>
            <Menu.Item key='1.2' onClick={() => filterHandler('roominess', '1')}>
              1-о местный
            </Menu.Item>
            <Menu.Item key='2.2' onClick={() => filterHandler('roominess', '2')}>
              2-ух местный
            </Menu.Item>
            <Menu.Item key='3.2' onClick={() => filterHandler('roominess', '3')}>
              3-ех местный
            </Menu.Item>
            <Menu.Item key='4.2' onClick={() => filterHandler('roominess', '4')}>
              4-ех местный
            </Menu.Item>
            <Menu.Item key='5.2' onClick={() => filterHandler('roominess', '5')}>
              5-и и более местный
            </Menu.Item>
            <Divider />
          </SubMenu>
          <SubMenu key='sub3' title='Сезоность' className='site-layout-background'>
            <Menu.Item key='1.3' onClick={() => filterHandler('season', 'summer')}>
              Лето
            </Menu.Item>
            <Menu.Item key='2.3' onClick={() => filterHandler('season', 'winter')}>
              Зима
            </Menu.Item>
            <Menu.Item key='3.3' onClick={() => filterHandler('season', 'all')}>
              Все сезоны
            </Menu.Item>
            <Divider />
          </SubMenu>
          <SubMenu key='sub4' title='Производитель' className='site-layout-background'>
            {factoriesList}
            <Divider />
          </SubMenu>
          <SubMenu key='sub5' title='Категории' className='site-layout-background'>
            {categoriesList}
            <Divider />
          </SubMenu>
          <Button className='sidebar-button' onClick={() => emptyRefsHandler()}>
            Очистить фильтры
          </Button>
        </Menu>
      </Sider>
    </>
  );
};

export default StoreSidebar;
