import React from 'react';
import right_arr_ic from '../../../../assets/icons/right-arr.svg';

const NextArrow: React.FC = props => {
  const { onClick }: any = props;

  return <img className='carousel-next' src={right_arr_ic} alt='Not found' onClick={onClick} />;
};

export default NextArrow;
