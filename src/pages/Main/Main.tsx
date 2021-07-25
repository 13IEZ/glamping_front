import React from 'react';

import CustomCarousel from '../../components/UI/Carousel/CustomCarousel';
import CustomFooter from '../../components/UI/CustomFooter/CustomFooter';
import AboutApp from './components/AboutApp/AboutApp';
import GlampingPros from './components/GlampingPros/GlampingPros';
import LocationMini from './components/LocationMini/LocationMini';
import Presentation from './components/Presentation/Presentation';
import StoreMini from './components/StoreMini/StoreMini';

const Main: React.FC = () => {
  return (
    <>
      <CustomCarousel />
      <AboutApp />
      <StoreMini />
      <LocationMini />
      <Presentation />
      <GlampingPros />
      <CustomFooter />
    </>
  );
};

export default Main;
