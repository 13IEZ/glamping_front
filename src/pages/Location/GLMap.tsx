import React from 'react';
import { YMaps, Map, Placemark } from 'react-yandex-maps';

import './GLMap.scss';
import LocationMenu from './components/LocationMenu/LocationMenu';

const mapData = {
  center: [43.18, 68.14],
  zoom: 6,
};

const coordinates = [
  [45.684758, 69.738521],
  [47.684758, 60.738521],
  [47.684758, 79.738521],
  [43.684758, 75.738521],
  [44.684758, 76.738521],
  [42.684758, 67.738521],
  [51.684758, 71.738521],
  [43.684758, 76.738521],
  [43.15, 76.54],
  [43.2, 76.74],
  [43.15, 76.94],
  [43.28, 76.99],
];

const GLMap: React.FC = () => {
  return (
    <YMaps>
      <div className='container-fluid'>
        <LocationMenu />
        <Map defaultState={mapData} width={'100%'} height={'90%'}>
          {coordinates.map(coordinate => (
            <Placemark geometry={coordinate} />
          ))}
        </Map>
      </div>
    </YMaps>
  );
};

export default GLMap;
