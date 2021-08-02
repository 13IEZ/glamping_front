import React from 'react';
import { useHistory } from 'react-router-dom';
import { Clusterer, Map, Placemark, YMaps } from 'react-yandex-maps';

import { ILocation } from '../../../../../store/types/locationsTypes';

interface IGLMapProps {
  centerCoordinate: [number, number];
  locations: Array<ILocation> | [];
}

const GLMap: React.FC<IGLMapProps> = ({ centerCoordinate, locations }) => {
  const history = useHistory();

  const handleLocation = (id: string): void => history.push('/locations/' + id);

  const placeMarks = locations.map(location => (
    <Placemark key={location._id} geometry={location.coords} onClick={() => handleLocation(location._id)} />
  ));

  return (
    <YMaps>
      <Map
        state={{
          center: centerCoordinate,
          zoom: 7,
          controls: [],
        }}
        width={'100%'}
        height={'100%'}
        products={['control.ZoomControl', 'control.FullscreenControl', 'geoObject.addon.hint']}
      >
        <Clusterer
          options={{
            preset: 'islands#invertedBlueClusterIcons',
            groupByCoordinates: false,
          }}
        >
          {placeMarks}
        </Clusterer>

        {/*<RulerControl options={{ float: 'right' }} />*/}
        {/*<TypeSelector options={{ float: 'right' }} />*/}
        {/*<FullscreenControl />*/}
        {/*<GeolocationControl options={{ float: 'left' }} />*/}
        {/*<ZoomControl options={{ float: 'right' }} />*/}
      </Map>
    </YMaps>
  );
};

export default GLMap;
