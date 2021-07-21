import React from 'react';

import AboutUs from './components/AboutUs/AboutUs';
import LocationMini from './components/LocationMini/LocationMini';
import StoreMini from './components/StoreMini/StoreMini';
import ReviewsMini from './components/ReviewsMini/ReviewsMini';
import CustomCarousel from '../../components/UI/Carousel/CustomCarousel';
import CustomFooter from '../../components/UI/CustomFooter/CustomFooter';

const Main: React.FC = () => {
  return (
    <>
      <CustomCarousel />
      <AboutUs />
      <StoreMini />
      <LocationMini />
      <ReviewsMini />
      <CustomFooter />
    </>
  );
};

export default Main;
