import React, { useState } from 'react';
import {
  YMaps,
  Map,
  Placemark,
  RulerControl,
  TypeSelector,
  GeolocationControl,
  Clusterer,
  FullscreenControl,
  ZoomControl,
} from 'react-yandex-maps';
import { v4 as uuidv4 } from 'uuid';
import { useHistory } from 'react-router-dom';
import './GLMap.scss';
import LocationMenu from './components/LocationMenu/LocationMenu';

// Массив coordinatesInitial является демонстрационным, показывающим необходимую структуру данных
// и как с ней работает компонент GLMap. В последующем массив coordinatesInitial может формироваться
// путем AJAX-запроса к БД

const coordinatesInitial = [
  { coordId: uuidv4(), coords: [45.684758, 69.738521], hint: 'Location at 45.684758, 69.738521', productType: 'tent' },
  { coordId: uuidv4(), coords: [47.684758, 60.738521], hint: 'Location at 47.684758, 60.738521', productType: 'dome' },
  { coordId: uuidv4(), coords: [47.684758, 79.738521], hint: 'Location at 47.684758, 79.738521', productType: 'urt' },
  { coordId: uuidv4(), coords: [44.684758, 76.738521], hint: 'Location at 44.684758, 76.738521', productType: 'dome' },
  { coordId: uuidv4(), coords: [42.684758, 67.738521], hint: 'Location at 42.684758, 67.738521', productType: 'tent' },
  { coordId: uuidv4(), coords: [51.684758, 71.738521], hint: 'Location at 51.684758, 71.738521', productType: 'tent' },
  { coordId: uuidv4(), coords: [44.684758, 69.738521], hint: 'Location at 44.684758, 69.738521', productType: 'dome' },
  { coordId: uuidv4(), coords: [47.684758, 61.738521], hint: 'Location at 47.684758, 61.738521', productType: 'trail' },
  { coordId: uuidv4(), coords: [48.684758, 79.738521], hint: 'Location at 48.684758, 79.738521', productType: 'house' },
  { coordId: uuidv4(), coords: [43.684758, 74.738521], hint: 'Location at 43.684758, 74.738521', productType: 'tent' },
  { coordId: uuidv4(), coords: [45.684758, 76.738521], hint: 'Location at 45.684758, 76.738521', productType: 'house' },
  { coordId: uuidv4(), coords: [42.684758, 66.738521], hint: 'Location at 42.684758, 66.738521', productType: 'trail' },
  { coordId: uuidv4(), coords: [50.684758, 72.738521], hint: 'Location at 50.684758, 72.738521', productType: 'house' },
  { coordId: uuidv4(), coords: [44.684758, 77.738521], hint: 'Location at 44.684758, 77.738521', productType: 'urt' },
  { coordId: uuidv4(), coords: [42.151234, 75.543456], hint: 'Location at 42.151234, 75.543456', productType: 'house' },
  { coordId: uuidv4(), coords: [44.255678, 75.997895], hint: 'Location at 44.285678, 75.997895', productType: 'tent' },
  { coordId: uuidv4(), coords: [43.684758, 75.738521], hint: 'Location at 43.684758, 75.738521', productType: 'tent' },
  {
    coordId: uuidv4(),
    coords: [43.155678, 72.941234],
    hint: 'Location at 43.155678, 72.941234',
    productType: 'product',
  },
  { coordId: uuidv4(), coords: [43.144758, 76.438521], hint: 'Location at 43.144758, 76.438521', productType: 'trail' },
  {
    coordId: uuidv4(),
    coords: [43.151234, 76.513456],
    hint: 'Location at 43.151234, 76.513456',
    productType: 'product',
  },
  { coordId: uuidv4(), coords: [43.145678, 76.941234], hint: 'Location at 43.145678, 76.941234', productType: 'dome' },
  { coordId: uuidv4(), coords: [43.255678, 76.997895], hint: 'Location at 43.255678, 76.997895', productType: 'urt' },
  { coordId: uuidv4(), coords: [43.194758, 76.718521], hint: 'Location at 43.194758, 76.718521', productType: 'trail' },
  { coordId: uuidv4(), coords: [43.161234, 76.543456], hint: 'Location at 43.161234, 76.543456', productType: 'dome' },
  { coordId: uuidv4(), coords: [43.115678, 76.841234], hint: 'Location at 43.115678, 76.841234', productType: 'trail' },
  { coordId: uuidv4(), coords: [43.125678, 76.917895], hint: 'Location at 43.125678, 76.917895', productType: 'trail' },
  { coordId: uuidv4(), coords: [43.194758, 76.748521], hint: 'Location at 43.194758, 76.748521', productType: 'trail' },
  {
    coordId: uuidv4(),
    coords: [43.131234, 76.523456],
    hint: 'Location at 43.131234, 76.523456',
    productType: 'product',
  },
  { coordId: uuidv4(), coords: [43.125678, 76.841234], hint: 'Location at 43.125678, 76.841234', productType: 'trail' },
  { coordId: uuidv4(), coords: [43.385678, 76.977895], hint: 'Location at 43.385678, 76.977895', productType: 'trail' },
  { coordId: uuidv4(), coords: [43.684758, 76.738521], hint: 'Location at 43.684758, 76.738521', productType: 'trail' },
  { coordId: uuidv4(), coords: [43.151234, 76.543456], hint: 'Location at 43.151234, 76.543456', productType: 'dome' },
  { coordId: uuidv4(), coords: [43.155678, 76.931234], hint: 'Location at 43.155678, 76.931234', productType: 'urt' },
  { coordId: uuidv4(), coords: [43.285678, 76.997895], hint: 'Location at 43.285678, 76.997895', productType: 'urt' },
];

const GLMapForm: React.FC = () => {
  const [state, setState] = useState([]);
  const [coordId, setCoordId] = useState('');
  const [coordinates, setCoordinates] = useState(coordinatesInitial);

  function handleChange(value: any) {
    const coordinate: any = coordinates.find(coordinate => coordinate.coordId === value);
    setState(coordinate.coords);
    setCoordId(value);
  }

  function handleCoordinates(value: any) {
    const filtertedCoordinates: any = coordinatesInitial.filter(coordinate => coordinate.productType === value);
    if (value === 'all') {
      setCoordinates(coordinatesInitial);
    } else {
      setCoordinates(filtertedCoordinates);
    }
  }

  let mapVar;
  if (state.length > 0) {
    mapVar = <GLMap coords={state} coordId={coordId} coordinates={coordinates} />;
  } else {
    mapVar = <GLMap coords={[43.1524, 76.5542]} coordinates={coordinates} />;
  }
  return (
    <div className='container-fluid'>
      <LocationMenu handleChange={handleChange} coordinates={coordinates} handleCoordinates={handleCoordinates} />
      {mapVar}
    </div>
  );
};

const GLMap: React.FC<any> = props => {
  const history = useHistory();
  function handleLocation(hint: string) {
    history.push('/maplocation/' + hint);
  }
  console.log(props.coords);
  return (
    <YMaps>
      <Map
        state={{
          center: props.coords,
          zoom: 7,
          controls: [],
        }}
        width={'100%'}
        height={'90%'}
        products={['control.ZoomControl', 'control.FullscreenControl', 'geoObject.addon.hint']}
      >
        <Clusterer
          options={{
            preset: 'islands#invertedBlueClusterIcons',
            groupByCoordinates: false,
          }}
        >
          {props.coordinates.map((coordinate: any) => (
            <Placemark
              key={coordinate.coordId}
              geometry={coordinate.coords}
              products={['geoObject.addon.balloon']}
              properties={{
                hintContent: coordinate.hint + ' ' + coordinate.productType,
                iconCaption: coordinate.coordId === props.coordId ? coordinate.hint : null,
              }}
              onClick={() => handleLocation(coordinate.hint)}
            />
          ))}
        </Clusterer>

        <RulerControl options={{ float: 'right' }} />
        <TypeSelector options={{ float: 'right' }} />
        <FullscreenControl />
        <GeolocationControl options={{ float: 'left' }} />
        <ZoomControl options={{ float: 'right' }} />
      </Map>
    </YMaps>
  );
};

export default GLMapForm;
