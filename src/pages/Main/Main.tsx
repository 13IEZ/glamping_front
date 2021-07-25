import React from 'react';

import CustomCarousel from '../../components/UI/Carousel/CustomCarousel';
import CustomFooter from '../../components/UI/CustomFooter/CustomFooter';
import AboutApp from './components/AboutApp/AboutApp';
import GlampingPros from './components/GlampingPros/GlampingPros';
import LocationMini from './components/LocationMini/LocationMini';
import Presentation from './components/Presentation/Presentation';
import ReviewsMini from './components/ReviewsMini/ReviewsMini';
import StoreMini from './components/StoreMini/StoreMini';

const Main: React.FC = () => {
  return (
    <>
      <CustomCarousel />
      <AboutApp />
      <GlampingPros />
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
