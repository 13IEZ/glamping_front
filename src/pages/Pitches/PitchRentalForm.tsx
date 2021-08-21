import React, { useEffect } from 'react';

import { Col, Row } from 'antd';

import { useActions } from '../../hooks/useAction';
import { useTypedSelectorHook } from '../../hooks/useTypedSelector';
import NewProduct from '../Store/components/NewProduct/NewProduct';
import PitchDetailDescription from './components/PitchDetailDescription/PitchDetailDescription';
import PitchDetailGallery from './components/PitchDetailGallery/PitchDetailGallery';

const PitchRentalForm: React.FC = (props: any) => {
  const idCurrentPitch = props.match.params.id;
  const { currentPitch } = useTypedSelectorHook(state => state.piches);
  const { fetchCurrentPitch } = useActions();

  useEffect(() => {
    fetchCurrentPitch(idCurrentPitch);
  }, [idCurrentPitch]);

  if (Object.keys(currentPitch).length === 0) return <></>;
  return (
    <div className='container'>
      <div className='wrapper-top'>
        <Row wrap={false}>
          <Col flex='65%'>
            <PitchDetailGallery images={currentPitch.image ? currentPitch.image : []} />
          </Col>
          <Col flex='35%'>
            <PitchDetailDescription
              number={currentPitch.number}
              title={currentPitch.title}
              description={currentPitch.description}
              rent={currentPitch.rent}
              rating={currentPitch.rating}
            />
          </Col>
        </Row>
        <NewProduct />
      </div>
    </div>
  );
};

export default PitchRentalForm;
