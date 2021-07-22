import React from 'react';

import AboutUs from './components/AboutUs/AboutUs';
import LocationMini from './components/LocationMini/LocationMini';
import StoreMini from './components/StoreMini/StoreMini';
import ReviewsMini from './components/ReviewsMini/ReviewsMini';
import CustomCarousel from '../../components/UI/Carousel/CustomCarousel';
import CustomFooter from '../../components/UI/CustomFooter/CustomFooter';
import Presentation from './components/Presentation/Presentation';

const Main: React.FC = () => {
  return (
    <>
      <CustomCarousel />
      <AboutUs />
      <LocationMini />
      <StoreMini />
      <LocationMini />
      <Presentation />
      <ReviewsMini />
      <CustomFooter />
    </>
  );
};

export default Main;
