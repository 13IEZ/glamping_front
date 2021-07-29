import React from 'react';

import CustomCarousel from '../../components/UI/Carousel/CustomCarousel';
import CustomFooter from '../../components/UI/CustomFooter/CustomFooter';
import AboutApp from './components/AboutApp/AboutApp';
import GlampingPros from './components/GlampingPros/GlampingPros';
import LocationMini from './components/LocationMini/LocationMini';
import Presentation from './components/Presentation/Presentation';
import StoreMini from './components/StoreMini/StoreMini';
import GlampingMini from './components/GlampingMini/GlampingMini';

const Main: React.FC = () => {
  return (
    <>
      <CustomCarousel />
      <AboutApp />
      <GlampingMini />
      <StoreMini />
      <LocationMini />
      <Presentation />
      <GlampingPros />
      <CustomFooter />
    </>
  );
};

export default Main;
