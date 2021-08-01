import React, { useState, useEffect } from 'react';
import { Anchor } from 'antd';
import scroll_up_icon from '../../../assets/icons/scroll-up-btn.svg';
const { Link } = Anchor;
import './ScrollUp.scss';

const ScrollUp: React.FC = () => {
  const [targetOffset, setTargetOffset] = useState<number | undefined>(undefined);
  useEffect(() => {
    setTargetOffset(window.innerHeight / 2);
  }, []);

  return (
    <Anchor className='Scroll-up' targetOffset={targetOffset}>
      <Link href='#header' title={<img src={scroll_up_icon} alt='Not found' />} />
    </Anchor>
  );
};

export default ScrollUp;
