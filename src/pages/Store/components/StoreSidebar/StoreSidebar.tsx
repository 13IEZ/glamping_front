import './StoreSidebar.scss';
import React, { useEffect, useRef } from 'react';
import { Button, Divider, Layout, Menu } from 'antd';
import { useActions } from '../../../../hooks/useAction';
import { useTypedSelectorHook } from '../../../../hooks/useTypedSelector';
import { useHistory, useParams } from 'react-router-dom';

const { Sider } = Layout;
const { SubMenu } = Menu;

const StoreSidebar: React.FC = () => {
  const history = useHistory();
  const { fetchModulesCat } = useActions();
  const { categories } = useTypedSelectorHook(state => state.categories);
  const { factories } = useTypedSelectorHook(state => state.categories);
  const filters = useRef<string[]>([]);
  const params: any = useParams();

  useEffect(() => {
    fetchModulesCat(JSON.parse(params.queryStr));
    filters.current = JSON.parse(params.queryStr);
  }, []);

  const handleClick = (event: any) => {
    const keyStr = event.key;
    let filtersArrCopy = [...filters.current];

    if (filtersArrCopy.includes(keyStr)) {
      filtersArrCopy = filters.current.filter(item => item !== keyStr);
      filters.current = [...filtersArrCopy];
      history.push('/store/' + JSON.stringify(filtersArrCopy));
      fetchModulesCat(filters.current);
      return;
    }

    if (keyStr.includes('price')) {
      filtersArrCopy = filters.current.filter(item => !item.includes('price'));
      filters.current = [...filtersArrCopy, keyStr];
      history.push('/store/' + JSON.stringify([...filtersArrCopy, keyStr]));
      fetchModulesCat(filters.current);
      return;
    } else {
      filters.current = [...filtersArrCopy, keyStr];
      history.push('/store/' + JSON.stringify([...filtersArrCopy, keyStr]));
      fetchModulesCat(filters.current);
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
    filters.current = [];
    history.push('/store/[]');
    fetchModulesCat(filters.current);
  };

  return (
    <>
      <Sider className='site-layout-background' width={238}>
        <Menu
          mode='inline'
          selectedKeys={filters.current}
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
            <div className='divider'>
              <Divider />
            </div>
          </SubMenu>
          <div className='button-clear'>
            <Button className='sidebar-button' onClick={clearHandleClick}>
              Очистить фильтры
            </Button>
          </div>
        </Menu>
      </Sider>
    </>
  );
};

export default StoreSidebar;
