import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Col, Row } from 'antd';
import StoreMiniItem from './components/StoreMiniItem';
import { useTypedSelectorHook } from '../../../../hooks/useTypedSelector';
import { useActions } from '../../../../hooks/useAction';
import './StoreMini.scss';

const StoreMini: React.FC = () => {
  const { lastFourModules } = useTypedSelectorHook(state => state.modules);
  const { fetchLastFourModules } = useActions();

  useEffect(() => {
    fetchLastFourModules();
  }, []);

  const lastFourModulesList = lastFourModules.map(module => {
    return (
      <Col span={6} style={{ marginBottom: 20 }}>
        <StoreMiniItem
          key={module._id}
          _id={module._id}
          title={module.title}
          price={module.price}
          image={module.image}
        />
      </Col>
    );
  });

  const noModules = lastFourModules.length < 1;

  if (noModules) return <></>;

  return (
    <div className='container module'>
      <h3 className='title'>Магазин</h3>
      <Row className='module-card' justify='space-around' gutter={[2, 2]}>
        {lastFourModulesList}
      </Row>
      <Link to='/store'>
        <p className='module__link'>Показать все</p>
      </Link>
    </div>
  );
};

export default StoreMini;
