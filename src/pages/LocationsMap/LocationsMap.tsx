import React, { useEffect, useState } from 'react';

import './LocationsMap.scss';

import { useTypedSelectorHook } from '../../hooks/useTypedSelector';
import { useActions } from '../../hooks/useAction';

import GLMap from './components/GLMap/GLMap/GLMap';
import SelectList from './components/SelectList/SelectList';
import { Button } from 'antd';
import { Link } from 'react-router-dom';

const LocationsMap: React.FC = () => {
  const [centerCoordinate, setCenterCoordinate] = useState<[number, number]>([43.1524, 76.5542]);

  const { locations } = useTypedSelectorHook(state => state.locations);

  const { fetchLocations } = useActions();

  useEffect(() => {
    fetchLocations();
  }, []);

  const onSelectorChange = (id: string): void => {
    const coordinate: any = locations.find(location => location._id === id);
    setCenterCoordinate(coordinate.coords);
  };

  return (
    <div className='locations-map'>
      <div>
        <SelectList onSelectorChange={onSelectorChange} locations={locations} />
        <Button className='locations-map__button' type='primary'>
          <Link to='/locations'>Каталог локаций</Link>
        </Button>
      </div>
      <GLMap centerCoordinate={centerCoordinate} locations={locations} />
    </div>
  );
};

export default LocationsMap;
