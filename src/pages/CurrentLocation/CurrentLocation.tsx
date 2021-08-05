import React, { useEffect } from 'react';
import { Col, Row } from 'antd';
import { useActions } from '../../hooks/useAction';
import { useTypedSelectorHook } from '../../hooks/useTypedSelector';
import CurrentLocationGallery from './components/CurrentLocationGallery/CurrentLocationGallery';
import CurrentLocationAccommodation from './components/CurrentLocationAccommodation';
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
  }, [idCurrentLocation]);

  useEffect(() => {
    fetchCurrentLocation(idCurrentLocation);
  }, [idCurrentLocation]);

  const accommodationsList = accommodations.map(accommodation => {
    return (
      <Col key={accommodation._id} className='gutter-row' style={{ margin: 10 }}>
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
    <div className='container background'>
      <CurrentLocationGallery images={currentLocation.image ? currentLocation.image : []} />
      <CurrentLocationDescription
        title={currentLocation.title}
        description={currentLocation.description}
        electricity={currentLocation.electricity}
        road={currentLocation.road}
        water={currentLocation.water}
      />
      <Row className='current-location-content'>
        {accommodationsList}
        {accommodationsList}
      </Row>
    </div>
  );
};

export default CurrentLocation;
