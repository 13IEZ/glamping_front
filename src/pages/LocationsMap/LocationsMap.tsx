import './LocationsMap.scss';

import React, { useEffect, useState } from 'react';

import { Button } from 'antd';
import { Link } from 'react-router-dom';

import { useActions } from '../../hooks/useAction';
import { useTypedSelectorHook } from '../../hooks/useTypedSelector';
import GLMap from './components/GLMap/GLMap/GLMap';
import SelectList from './components/SelectList/SelectList';

const LocationsMap: React.FC = () => {
  const [centerCoordinate, setCenterCoordinate] = useState<[number, number]>([43.1524, 76.5542]);

  const { locationsMap } = useTypedSelectorHook(state => state.locations);

  const { fetchLocationsMap } = useActions();

  useEffect(() => {
    fetchLocationsMap();
  }, []);

  const onSelectorChange = (id: string): void => {
    const coordinate: any = locationsMap.find(location => location._id === id);
    setCenterCoordinate(coordinate.coords);
  };

  return (
    <div className='locations-map'>
      <div className='locations-header'>
        <SelectList onSelectorChange={onSelectorChange} locations={locationsMap} />
        <Button className='locations-map__button' type='primary'>
          <Link to='/locations'>Каталог глэмпингов</Link>
        </Button>
      </div>
      <GLMap centerCoordinate={centerCoordinate} locations={locationsMap} />
    </div>
  );
};

export default LocationsMap;
