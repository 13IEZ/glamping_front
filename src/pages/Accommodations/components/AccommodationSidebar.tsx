import './AccommodationSidebar.scss';
import React, { useEffect } from 'react';
import { Button, Divider, Layout, Menu } from 'antd';
import { useTypedSelectorHook } from '../../../hooks/useTypedSelector';
import { useActions } from '../../../hooks/useAction';

const { Sider } = Layout;
const { SubMenu } = Menu;

const AccommodationSidebar: React.FC = () => {
  const { fetchProductCategory, setAccommodationFilters } = useActions();
  const { categories } = useTypedSelectorHook(state => state.categories);
  const { filters } = useTypedSelectorHook(state => state.accommodations);

  useEffect(() => {
    fetchProductCategory(filters);
  }, [filters]);

  const handleClick = (event: any) => {
    const keyStr = event.key;
    let filtersArrCopy = [...filters];

    if (filtersArrCopy.includes(keyStr)) {
      filtersArrCopy = filters.filter(item => item !== keyStr);
      setAccommodationFilters(filtersArrCopy);
      return;
    }

    if (keyStr.includes('rent')) {
      filtersArrCopy = filters.filter(item => !item.includes('rent'));
      setAccommodationFilters([...filtersArrCopy, keyStr]);
      return;
    } else {
      setAccommodationFilters([...filtersArrCopy, keyStr]);
      return;
    }
  };

  const categoriesList = categories.map(category => (
    <Menu.Item key={'category_' + category._id} onClick={handleClick}>
      {category.title}
    </Menu.Item>
  ));

  const clearHandleClick = () => {
    setAccommodationFilters([]);
  };

  return (
    <>
      <Sider className='site-layout-background' width={238}>
        <Menu
          mode='inline'
          selectedKeys={filters}
          defaultOpenKeys={['sortSub', 'roominessSub', 'seasonSub', 'categorySub', 'clearSub']}
          style={{ height: '100%', borderRight: 0 }}
        >
          <SubMenu key='sortSub' title='Цена' className='site-layout-background'>
            <Menu.Item key='rentAsc' onClick={handleClick}>
              По возрастанию
            </Menu.Item>
            <Menu.Item key='rentDesc' onClick={handleClick}>
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

export default AccommodationSidebar;
