import React, { useEffect } from 'react';
import { Col, Layout, Row } from 'antd';
import { useActions } from '../../hooks/useAction';
import { useTypedSelectorHook } from '../../hooks/useTypedSelector';
import CurrentLocationItem from './components/CurrentLocationItem';
import './CurrentLocation.scss';

const { Content } = Layout;

const CurrentLocation: React.FC = (props: any) => {
  const idCurrentLocation = props.match.params.id;
  const { accommodations } = useTypedSelectorHook(state => state.accommodations);
  const { fetchAccommodations } = useActions();

  useEffect(() => {
    fetchAccommodations(idCurrentLocation);
  }, [idCurrentLocation]);

  const accommodationsList = accommodations.map(accommodation => {
    return (
      <Col key={accommodation._id} className='gutter-row' style={{ margin: 10 }}>
        {/* carousel */}
        <CurrentLocationItem
          _id={accommodation._id}
          title={accommodation.title}
          rent={accommodation.rent}
          rating={accommodation.rating}
          image={accommodation.image}
        />
      </Col>
    );
  });

  return (
    <div className='container'>
      <Layout className='current-location-body'>
        <Content>
          <Row className='current-location-content'>
            {accommodationsList}
            {accommodationsList}
          </Row>
        </Content>
      </Layout>
    </div>
  );
};

export default CurrentLocation;
