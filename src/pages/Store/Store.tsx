import './Store.scss';

import React, { useEffect } from 'react';

import { Col, Layout, Pagination, Row } from 'antd';

import StoreItem from './components/StoreItem/StoreItem';
import { useActions } from '../../hooks/useAction';
import { useTypedSelectorHook } from '../../hooks/useTypedSelector';
import StoreMenu from './components/StoreMenu/StoreMenu';
import StoreSidebar from './components/StoreSidebar/StoreSidebar';

const { Content } = Layout;

const Store: React.FC = () => {
  const { modules } = useTypedSelectorHook(state => state.modules);

  const { fetchModules } = useActions();

  useEffect(() => {
    fetchModules();
  }, []);

  const modulesList = modules.map(module => {
    return (
      <Col className='gutter-row' span={7} style={{ marginBottom: 20 }}>
        <StoreItem
          key={module._id}
          _id={module._id}
          title={module.title}
          price={module.price}
          // TODO На данный момент в бэке у модели module нет свойства rating, сделать!
          rating={5}
          image={module.image}
        />
      </Col>
    );
  });

  return (
    <div className='container'>
      <Layout>
        <StoreSidebar />

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
