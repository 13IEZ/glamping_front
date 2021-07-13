import './Store.scss';

import React, { useEffect } from 'react';

import { Col, Layout, Menu, Pagination, Row } from 'antd';
import { v4 as uuidv4 } from 'uuid';

import ModuleCard from '../../components/ModuleCard/ModuleCard';
import { useActions } from '../../hooks/useAction';
import { useTypedSelectorHook } from '../../hooks/useTypedSelector';
import StoreMenu from './components/StoreMenu/StoreMenu';

const { Sider, Content } = Layout;
const { SubMenu } = Menu;

const Store: React.FC = () => {
  const { modules } = useTypedSelectorHook(state => state.modules);

  const { fetchModules } = useActions();

  useEffect(() => {
    fetchModules();
  }, []);

  const modulesList = modules.map(module => {
    return (
      <Col className='gutter-row' span={6}>
        <ModuleCard
          key={module._id}
          _id={module._id}
          title={module.title}
          description={module.description}
          image={module.image}
        />
      </Col>
    );
  });

  return (
    <div className='container'>
      <Layout>
        <Sider width={180} className='site-layout-background'>
          <Menu mode='inline' style={{ height: '100%', borderRight: 0 }}>
            <SubMenu key='sub1' title='Цена'>
              <Menu.Item key={uuidv4()}>Доргие ^</Menu.Item>
              <Menu.Item key={uuidv4()}>Дешовые ^</Menu.Item>
            </SubMenu>
            <SubMenu key='sub2' title='Вместимость'>
              <Menu.Item key={uuidv4()}>option5</Menu.Item>
              <Menu.Item key={uuidv4()}>option6</Menu.Item>
              <Menu.Item key={uuidv4()}>option7</Menu.Item>
              <Menu.Item key={uuidv4()}>option8</Menu.Item>
            </SubMenu>
            <SubMenu key='sub3' title='Сезоность'>
              <Menu.Item key={uuidv4()}>Лето</Menu.Item>
              <Menu.Item key={uuidv4()}>Лето/Осень/Весна</Menu.Item>
              <Menu.Item key={uuidv4()}>Всесезонный</Menu.Item>
            </SubMenu>
            <SubMenu key='sub4' title='Производитель'>
              <Menu.Item key={uuidv4()}>option9</Menu.Item>
              <Menu.Item key={uuidv4()}>option10</Menu.Item>
              <Menu.Item key={uuidv4()}>option11</Menu.Item>
              <Menu.Item key={uuidv4()}>option12</Menu.Item>
            </SubMenu>
            <SubMenu key='sub5' title='Категории'>
              <Menu.Item key={uuidv4()}>Тенты</Menu.Item>
              <Menu.Item key={uuidv4()}>Каркасные дома</Menu.Item>
              <Menu.Item key={uuidv4()}>Купола</Menu.Item>
              <Menu.Item key={uuidv4()}>Юрты</Menu.Item>
              <Menu.Item key={uuidv4()}>Модули</Menu.Item>
              <Menu.Item key={uuidv4()}>Трейлеры</Menu.Item>
              <Menu.Item key={uuidv4()}>Автодома</Menu.Item>
              <Menu.Item key={uuidv4()}>Другое</Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout style={{ padding: '0 24px 24px' }}>
          <Content>
            <StoreMenu />
            <Row justify='space-around' gutter={[16, 16]}>
              {modulesList}
              {modulesList}
              {modulesList}
              {modulesList}
              {modulesList}
            </Row>
            <div className='pagination'>
              <Pagination defaultCurrent={1} total={50} />
            </div>
          </Content>
        </Layout>
      </Layout>
    </div>
  );
};

export default Store;
