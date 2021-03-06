import './AccommodationSidebar.scss';

import React, { useEffect, useRef } from 'react';

import { Button, Divider, Layout, Menu } from 'antd';
import { useHistory, useParams } from 'react-router-dom';

import { useActions } from '../../../hooks/useAction';
import { useTypedSelectorHook } from '../../../hooks/useTypedSelector';

const { Sider } = Layout;
const { SubMenu } = Menu;

const AccommodationSidebar: React.FC = () => {
  const history = useHistory();
  const { fetchAccommodationsCat } = useActions();
  const { setStoreIsOpened } = useActions();
  const { categories } = useTypedSelectorHook(state => state.categories);
  const { factories } = useTypedSelectorHook(state => state.factories);
  const filters = useRef<string[]>([]);
  const params: any = useParams();

  useEffect(() => {
    fetchAccommodationsCat(JSON.parse(params.queryStr));
    filters.current = JSON.parse(params.queryStr);
    setStoreIsOpened(true);
    return () => setStoreIsOpened(false);
  }, []);

  const handleClick = (event: any) => {
    const keyStr = event.key;
    let filtersArrCopy = [...filters.current];

    if (filtersArrCopy.includes(keyStr)) {
      filtersArrCopy = filters.current.filter(item => item !== keyStr);
      filters.current = [...filtersArrCopy];
      history.push('/accommodations/' + JSON.stringify(filtersArrCopy));
      fetchAccommodationsCat(filters.current);
      return;
    }

    if (keyStr.includes('price')) {
      filtersArrCopy = filters.current.filter(item => !item.includes('price'));
      filters.current = [...filtersArrCopy, keyStr];
      history.push('/accommodations/' + JSON.stringify([...filtersArrCopy, keyStr]));
      fetchAccommodationsCat(filters.current);
      return;
    } else {
      filters.current = [...filtersArrCopy, keyStr];
      history.push('/accommodations/' + JSON.stringify([...filtersArrCopy, keyStr]));
      fetchAccommodationsCat(filters.current);
      return;
    }
  };

  const factoriesList = factories.map((factory: any) => (
    <Menu.Item key={'factory_' + factory._id} onClick={handleClick}>
      {factory.title}
    </Menu.Item>
  ));

  const categoriesList = categories.map((category: any) => (
    <Menu.Item key={'category_' + category._id} onClick={handleClick}>
      {category.title}
    </Menu.Item>
  ));

  const clearHandleClick = () => {
    filters.current = [];
    history.push('/accommodations/[]');
    fetchAccommodationsCat(filters.current);
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
          <SubMenu key='sortSub' title='????????' className='site-layout-background'>
            <Menu.Item key='priceAsc' onClick={handleClick}>
              ???? ??????????????????????
            </Menu.Item>
            <Menu.Item key='priceDesc' onClick={handleClick}>
              ???? ????????????????
            </Menu.Item>
            <Divider />
          </SubMenu>
          <SubMenu key='roominessSub' title='??????????????????????' className='site-layout-background'>
            <Menu.Item key='roominess1' onClick={handleClick}>
              1 ??????????????
            </Menu.Item>
            <Menu.Item key='roominess2' onClick={handleClick}>
              2-?? ??????????????
            </Menu.Item>
            <Menu.Item key='roominess3' onClick={handleClick}>
              3-?? ??????????????
            </Menu.Item>
            <Menu.Item key='roominess4' onClick={handleClick}>
              4-?? ??????????????
            </Menu.Item>
            <Menu.Item key='roominess5' onClick={handleClick}>
              5-?? ?? ?????????? ??????????????
            </Menu.Item>
            <Divider />
          </SubMenu>
          <SubMenu key='seasonSub' title='??????????????????' className='site-layout-background'>
            <Menu.Item key='seasonSummer' onClick={handleClick}>
              ????????
            </Menu.Item>
            <Menu.Item key='seasonWinter' onClick={handleClick}>
              ????????
            </Menu.Item>
            <Menu.Item key='seasonAll' onClick={handleClick}>
              ?????? ????????????
            </Menu.Item>
            <Divider />
          </SubMenu>
          <SubMenu key='factorySub' title='??????????????????????????' className='site-layout-background'>
            {factoriesList}
            <Divider />
          </SubMenu>
          <SubMenu key='categorySub' title='??????????????????' className='site-layout-background'>
            {categoriesList}
            <div className='divider'>
              <Divider />
            </div>
          </SubMenu>
          <div className='button-clear'>
            <Button className='sidebar-button' onClick={clearHandleClick}>
              ???????????????? ??????????????
            </Button>
          </div>
        </Menu>
      </Sider>
    </>
  );
};

export default AccommodationSidebar;
