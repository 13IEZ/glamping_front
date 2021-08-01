import React, { useEffect, useState } from 'react';

import './Locations.scss';

import { useTypedSelectorHook } from '../../hooks/useTypedSelector';
import { useActions } from '../../hooks/useAction';

import GLMap from './components/GLMap/GLMap/GLMap';
import SelectList from './components/SelectList/SelectList';

const Locations: React.FC = () => {
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
    <div className='container-fluid'>
      <div className='menu-container'>
        <SelectList onSelectorChange={onSelectorChange} locations={locations} />
      </div>
      <GLMap centerCoordinate={centerCoordinate} locations={locations} />
    </div>
  );
};

export default Locations;
