import React, { useEffect } from 'react';
import { Col, Row } from 'antd';
import { useActions } from '../../hooks/useAction';
import { useTypedSelectorHook } from '../../hooks/useTypedSelector';
import CurrentLocationGallery from './components/CurrentLocationGallery/CurrentLocationGallery';
import CurrentLocationAccommodation from './components/CurrentLocationAccommodation/CurrentLocationAccommodation';
import CurrentLocationDescription from './components/CurrentLocationDescription/CurrentLocationDescription';
import './CurrentLocation.scss';

const CurrentLocation: React.FC = (props: any) => {
  const idCurrentLocation = props.match.params.id;
  const { accommodations } = useTypedSelectorHook(state => state.accommodations);
  const { fetchAccommodations } = useActions();
  const { currentLocation } = useTypedSelectorHook(state => state.locations);
  const { fetchCurrentLocation } = useActions();

  useEffect(() => {
    fetchAccommodations(idCurrentLocation);
    fetchCurrentLocation(idCurrentLocation);
  }, [idCurrentLocation]);

  const accommodationsList = accommodations.map(accommodation => {
    return (
      <Col key={accommodation._id} span={6} style={{ marginBottom: 20 }}>
        <CurrentLocationAccommodation
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
    <div className='container current-location'>
      <CurrentLocationGallery images={currentLocation.image ? currentLocation.image : []} />
      <CurrentLocationDescription
        title={currentLocation.title}
        description={currentLocation.description}
        electricity={currentLocation.electricity}
        road={currentLocation.road}
        water={currentLocation.water}
      />
      <Row className='current-location-card' justify='space-around' gutter={[2, 2]}>
        {accommodationsList}
        {accommodationsList}
      </Row>
    </div>
  );
};

export default CurrentLocation;
