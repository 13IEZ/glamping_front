import React, { useEffect } from 'react';
import { Col, Row } from 'antd';
import { useActions } from '../../hooks/useAction';
import { useTypedSelectorHook } from '../../hooks/useTypedSelector';
import CurrentLocationGallery from './components/CurrentLocationGallery/CurrentLocationGallery';
import CurrentLocationAccommodation from './components/CurrentLocationAccommodation/CurrentLocationAccommodation';
import CurrentLocationDescription from './components/CurrentLocationDescription/CurrentLocationDescription';
import CurrentLocationPich from './components/СurrentLocationPich/СurrentLocationPich';
import './CurrentLocation.scss';

const CurrentLocation: React.FC = (props: any) => {
  const idCurrentLocation = props.match.params.id;
  const { accommodations } = useTypedSelectorHook(state => state.accommodations);
  const { fetchAccommodations } = useActions();
  const { currentLocation } = useTypedSelectorHook(state => state.locations);
  const { fetchCurrentLocation } = useActions();

  const { piches } = useTypedSelectorHook(state => state.piches);
  const { fetchPichesByLocationId } = useActions();

  useEffect(() => {
    fetchAccommodations(idCurrentLocation);
    fetchCurrentLocation(idCurrentLocation);
    fetchPichesByLocationId(idCurrentLocation);
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

  const pichesList = piches.map(pich => {
    return (
      <Col key={pich._id} span={6} style={{ marginBottom: 20 }}>
        <CurrentLocationPich
          key={pich._id}
          _id={pich._id}
          description={pich.description}
          title={pich.title}
          image={pich.image}
          number={pich.number}
          free={pich.free}
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

      <Row>
        <h3 className='pich-list-title'>Список пичей для размешения</h3>
      </Row>
      <Row className='current-location-card' justify='space-around' gutter={[2, 2]}>
        {pichesList}
      </Row>

      <Row className='current-location-card' justify='space-around' gutter={[2, 2]}>
        {accommodationsList}
        {accommodationsList}
      </Row>
    </div>
  );
};

export default CurrentLocation;
