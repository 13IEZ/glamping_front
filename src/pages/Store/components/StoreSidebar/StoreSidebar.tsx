import React from 'react';

import { Layout, Menu } from 'antd';
import { v4 as uuidv4 } from 'uuid';

import { useActions } from '../../../../hooks/useAction';

const { Sider } = Layout;
const { SubMenu } = Menu;

const StoreSidebar: React.FC = () => {
  const { fetchModulesCat } = useActions();
  return (
    <>
      <Sider className='site-layout-background' width={200}>
        <Menu mode='inline' style={{ height: '100%', borderRight: 0 }}>
          <SubMenu key='sub1' title='Цена'>
            <Menu.Item key={uuidv4()} onClick={() => fetchModulesCat('price', 'asc')}>
              По возрастанию
            </Menu.Item>
            <Menu.Item key={uuidv4()} onClick={() => fetchModulesCat('price', 'desc')}>
              По убыванию
            </Menu.Item>
          </SubMenu>
          <SubMenu key='sub2' title='Вместимость'>
            <Menu.Item key={uuidv4()}>1-о местный</Menu.Item>
            <Menu.Item key={uuidv4()}>2-ух местный</Menu.Item>
            <Menu.Item key={uuidv4()}>3-ех местный</Menu.Item>
            <Menu.Item key={uuidv4()}>5-и и более местный</Menu.Item>
          </SubMenu>
          <SubMenu key='sub3' title='Сезоность'>
            <Menu.Item key={uuidv4()}>Лето</Menu.Item>
            <Menu.Item key={uuidv4()}>Зима</Menu.Item>
          </SubMenu>
          <SubMenu key='sub4' title='Производитель'>
            <Menu.Item key={uuidv4()}>Производитель 1</Menu.Item>
            <Menu.Item key={uuidv4()}>Производитель 2</Menu.Item>
            <Menu.Item key={uuidv4()}>Производитель 3</Menu.Item>
          </SubMenu>
          <SubMenu key='sub5' title='Категории'>
            <Menu.Item key={uuidv4()}>Тенты</Menu.Item>
            <Menu.Item key={uuidv4()}>Каркасные дома</Menu.Item>
            <Menu.Item key={uuidv4()}>Купола</Menu.Item>
            <Menu.Item key={uuidv4()}>Юрты</Menu.Item>
            <Menu.Item key={uuidv4()}>Модули</Menu.Item>
            <Menu.Item key={uuidv4()}>Трейлеры (прицепы)</Menu.Item>
            <Menu.Item key={uuidv4()}>Автодома</Menu.Item>
            <Menu.Item key={uuidv4()}>Другое</Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>
    </>
  );
};

export default StoreSidebar;
