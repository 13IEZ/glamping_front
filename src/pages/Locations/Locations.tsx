import React, { useEffect } from 'react';
import { Col, Layout, Row } from 'antd';
import { useTypedSelectorHook } from '../../hooks/useTypedSelector';
import LocationItem from '../Main/components/LocationMini/components/LocationItem';
import { useActions } from '../../hooks/useAction';

import './Locations.scss';

const { Content } = Layout;

const Locations: React.FC = () => {
  const { locations } = useTypedSelectorHook(state => state.locations);
  const { fetchLocations } = useActions();

  useEffect(() => {
    fetchLocations();
  }, []);

  const locationsList = locations.map(location => {
    return (
      <Col key={location._id} className='gutter-row' style={{ margin: 10 }}>
        <LocationItem
          _id={location._id}
          title={location.title}
          description={location.description}
          square={location.square}
          image={location.image}
          region={location.region}
        />
      </Col>
    );
  });

  return (
    <div className='container'>
      <Layout className='store-body'>
        <Content>
          <Row className='store-content'>{locationsList}</Row>
        </Content>
      </Layout>
    </div>
  );
};

export default Locations;
