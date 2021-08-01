import React from 'react';
import left_arr_ic from '../../../../assets/icons/left-arr.svg';

const PrevArrow: React.FC = props => {
  const { onClick }: any = props;

  return <img className='carousel-prev' src={left_arr_ic} alt='Not found' onClick={onClick} />;
};

export default PrevArrow;
