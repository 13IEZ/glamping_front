import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'antd';
import './MapLocation.scss';

const MapLocation: React.FC = (props: any) => {
  return (
    <>
      <div className='MapLocation-container'>
        <h1>{'Здесь должна быть выведена разметка компонента для ' + props.match.params.hint}</h1>
        <Link to='/location'>
          <Button type='primary'>Вернуться на карту</Button>
        </Link>
      </div>
    </>
  );
};

export default MapLocation;
