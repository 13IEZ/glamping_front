import './StoreSidebar.scss';

import React, { useState, useEffect } from 'react';

import { useActions } from '../../../../hooks/useAction';
import { useTypedSelectorHook } from '../../../../hooks/useTypedSelector';

import { Button, Divider, Layout, Menu } from 'antd';

const { Sider } = Layout;
const { SubMenu } = Menu;

const StoreSidebar: React.FC = () => {
  const { fetchModulesCat } = useActions();
  const { categories } = useTypedSelectorHook(state => state.categories);
  const { factories } = useTypedSelectorHook(state => state.categories);

  const [filters, setFilters] = useState<Array<string>>([]);

  useEffect(() => {
    fetchModulesCat(filters);
  }, [filters]);

  const handleClick = (event: any) => {
    const keyStr = event.key;
    let filtersArrCopy = [...filters];

    if (filtersArrCopy.includes(keyStr)) {
      setFilters(prevState => {
        filtersArrCopy = prevState.filter(item => item !== keyStr);
        return [...filtersArrCopy];
      });
      return;
    }

    if (keyStr.includes('price')) {
      setFilters(prevState => {
        filtersArrCopy = prevState.filter(item => !item.includes('price'));
        return [...filtersArrCopy, keyStr];
      });
      return;
    } else {
      setFilters(prevState => [...prevState, keyStr]);
      return;
    }
  };

  const factoriesList = factories.map(factory => (
    <Menu.Item key={'factory_' + factory._id} onClick={handleClick}>
      {factory.title}
    </Menu.Item>
  ));

  const categoriesList = categories.map(category => (
    <Menu.Item key={'category_' + category._id} onClick={handleClick}>
      {category.title}
    </Menu.Item>
  ));

  const clearHandleClick = () => {
    setFilters([]);
  };

  return (
    <>
      <Sider className='site-layout-background' width={238}>
        <Menu
          mode='inline'
          selectedKeys={filters}
          defaultOpenKeys={['sortSub', 'roominessSub', 'seasonSub', 'factorySub', 'categorySub', 'clearSub']}
          style={{ height: '100%', borderRight: 0 }}
        >
          <SubMenu key='sortSub' title='Цена' className='site-layout-background'>
            <Menu.Item key='priceAsc' onClick={handleClick}>
              По возрастанию
            </Menu.Item>
            <Menu.Item key='priceDesc' onClick={handleClick}>
              По убыванию
            </Menu.Item>
            <Divider />
          </SubMenu>
          <SubMenu key='roominessSub' title='Вместимость' className='site-layout-background'>
            <Menu.Item key='roominess1' onClick={handleClick}>
              1-о местный
            </Menu.Item>
            <Menu.Item key='roominess2' onClick={handleClick}>
              2-ух местный
            </Menu.Item>
            <Menu.Item key='roominess3' onClick={handleClick}>
              3-ех местный
            </Menu.Item>
            <Menu.Item key='roominess4' onClick={handleClick}>
              4-ех местный
            </Menu.Item>
            <Menu.Item key='roominess5' onClick={handleClick}>
              5-и и более местный
            </Menu.Item>
            <Divider />
          </SubMenu>
          <SubMenu key='seasonSub' title='Сезоность' className='site-layout-background'>
            <Menu.Item key='seasonSummer' onClick={handleClick}>
              Лето
            </Menu.Item>
            <Menu.Item key='seasonWinter' onClick={handleClick}>
              Зима
            </Menu.Item>
            <Menu.Item key='seasonAll' onClick={handleClick}>
              Все сезоны
            </Menu.Item>
            <Divider />
          </SubMenu>
          <SubMenu key='factorySub' title='Производитель' className='site-layout-background'>
            {factoriesList}
            <Divider />
          </SubMenu>
          <SubMenu key='categorySub' title='Категории' className='site-layout-background'>
            {categoriesList}
            <Divider />
          </SubMenu>
          <SubMenu key='clearSub' title='Очистить'>
            <Button className='sidebar-button' onClick={clearHandleClick}>
              Очистить фильтры
            </Button>
          </SubMenu>
        </Menu>
      </Sider>
    </>
  );
};

export default StoreSidebar;
