import React, { useEffect } from 'react';

import { Col, Layout, Menu, Pagination, Row, Select } from 'antd';

import ModuleCard from '../../components/ModuleCard/ModuleCard';
import { useActions } from '../../hooks/useAction';
import { useTypedSelectorHook } from '../../hooks/useTypedSelector';

const { Option, OptGroup } = Select;
const { Sider, Content } = Layout;
const { SubMenu } = Menu;

function handleChange(value: any) {
  console.log(`selected ${value}`);
}

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
    <div>
      <Layout>
        <Sider width={180} className='site-layout-background'>
          <Menu
            mode='inline'
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%', borderRight: 0 }}
          >
            <SubMenu key='sub1' title='Цена'>
              <Menu.Item key='1'>option1</Menu.Item>
              <Menu.Item key='2'>option2</Menu.Item>
              <Menu.Item key='3'>option3</Menu.Item>
              <Menu.Item key='4'>option4</Menu.Item>
            </SubMenu>
            <SubMenu key='sub2' title='Вместимость'>
              <Menu.Item key='5'>option5</Menu.Item>
              <Menu.Item key='6'>option6</Menu.Item>
              <Menu.Item key='7'>option7</Menu.Item>
              <Menu.Item key='8'>option8</Menu.Item>
            </SubMenu>
            <SubMenu key='sub3' title='Сезоность'>
              <Menu.Item key='9'>option9</Menu.Item>
              <Menu.Item key='10'>option10</Menu.Item>
              <Menu.Item key='11'>option11</Menu.Item>
              <Menu.Item key='12'>option12</Menu.Item>
            </SubMenu>
            <SubMenu key='sub3' title='Производитель'>
              <Menu.Item key='9'>option9</Menu.Item>
              <Menu.Item key='10'>option10</Menu.Item>
              <Menu.Item key='11'>option11</Menu.Item>
              <Menu.Item key='12'>option12</Menu.Item>
            </SubMenu>
            <SubMenu key='sub3' title='Категории'>
              <Select defaultValue='тенты' style={{ width: 100 }} onChange={handleChange}>
                <OptGroup label='Type'>
                  <Option value='tent'>Тенты</Option>
                </OptGroup>
              </Select>
              <Select defaultValue='каркасные дома' style={{ width: 160 }} onChange={handleChange}>
                <OptGroup label='Type'>
                  <Option value='name'>Каркасные дома</Option>
                </OptGroup>
              </Select>
              <Select defaultValue='купола' style={{ width: 100 }} onChange={handleChange}>
                <OptGroup label='Type'>
                  <Option value='name'>Купола</Option>
                </OptGroup>
              </Select>
              <Select defaultValue='юрты' style={{ width: 100 }} onChange={handleChange}>
                <OptGroup label='Type'>
                  <Option value='name'>Юрты</Option>
                </OptGroup>
              </Select>
              <Select defaultValue='модули' style={{ width: 100 }} onChange={handleChange}>
                <OptGroup label='Type'>
                  <Option value='name'>Модули</Option>
                </OptGroup>
              </Select>
              <Select defaultValue='трейлеры' style={{ width: 120 }} onChange={handleChange}>
                <OptGroup label='Type'>
                  <Option value='name'>Трейлеры</Option>
                </OptGroup>
              </Select>
              <Select defaultValue='автодома' style={{ width: 120 }} onChange={handleChange}>
                <OptGroup label='Type'>
                  <Option value='name'>Автодома</Option>
                </OptGroup>
              </Select>
              <Select defaultValue='другое' style={{ width: 100 }} onChange={handleChange}>
                <OptGroup label='Type'>
                  <Option value='name'>Другое</Option>
                </OptGroup>
              </Select>
            </SubMenu>
          </Menu>
        </Sider>
        <Content>
          <Select defaultValue='тенты' style={{ width: 100 }} onChange={handleChange}>
            <OptGroup label='Type'>
              <Option value='tent'>Тенты</Option>
            </OptGroup>
          </Select>
          <Select defaultValue='каркасные дома' style={{ width: 160 }} onChange={handleChange}>
            <OptGroup label='Type'>
              <Option value='name'>Каркасные дома</Option>
            </OptGroup>
          </Select>
          <Select defaultValue='купола' style={{ width: 100 }} onChange={handleChange}>
            <OptGroup label='Type'>
              <Option value='name'>Купола</Option>
            </OptGroup>
          </Select>
          <Select defaultValue='юрты' style={{ width: 100 }} onChange={handleChange}>
            <OptGroup label='Type'>
              <Option value='name'>Юрты</Option>
            </OptGroup>
          </Select>
          <Select defaultValue='модули' style={{ width: 100 }} onChange={handleChange}>
            <OptGroup label='Type'>
              <Option value='name'>Модули</Option>
            </OptGroup>
          </Select>
          <Select defaultValue='трейлеры' style={{ width: 120 }} onChange={handleChange}>
            <OptGroup label='Type'>
              <Option value='name'>Трейлеры</Option>
            </OptGroup>
          </Select>
          <Select defaultValue='автодома' style={{ width: 120 }} onChange={handleChange}>
            <OptGroup label='Type'>
              <Option value='name'>Автодома</Option>
            </OptGroup>
          </Select>
          <Select defaultValue='другое' style={{ width: 100 }} onChange={handleChange}>
            <OptGroup label='Type'>
              <Option value='name'>Другое</Option>
            </OptGroup>
          </Select>
          <Row justify='space-around' gutter={[16, 16]}>
            {modulesList}
            {modulesList}
            {modulesList}
            {modulesList}
            {modulesList}
          </Row>
          <div className='example'>
            <Pagination defaultCurrent={1} total={50} />
          </div>
        </Content>
      </Layout>
    </div>
  );
};

export default Store;
