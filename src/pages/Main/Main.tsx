import React from 'react';

import AboutUs from './components/AboutUs/AboutUs';
import LocationMini from './components/LocationMini/LocationMini';
import StoreMini from './components/StoreMini/StoreMini';
import ReviewsMini from './components/ReviewsMini/ReviewsMini';
import CustomCarousel from '../../components/UI/Carousel/CustomCarousel';
import CustomFooter from '../../components/UI/CustomFooter/CustomFooter';
import GlampingPros from './components/GlampingPros/GlampingPros';

const Main: React.FC = () => {
  return (
    <>
      <CustomCarousel />
      <GlampingPros />
      <AboutUs />
      <LocationMini />
      <StoreMini />
      <LocationMini />
      <ReviewsMini />
      <CustomFooter />
    </>
  );
};

export default Main;
