import Investor from '../../components/Investor/Investor';
import Landlord from '../../components/Landlord/Landlord';
import ReviewsMini from '../../components/ReviewsMini/ReviewsMini';
import AppToolbar from '../../components/UI/AppToolbar/AppToolbar';
import CustomCarousel from '../../components/UI/Carousel/CustomCarousel';
import CustomFooter from '../../components/UI/CustomFooter/CustomFooter';
import AboutUs from '../../components/AboutUs/AboutUs';
import React from 'react';

const Main: React.FC = () => {
  return (
    <>
      <AppToolbar />
      <CustomCarousel />
      <AboutUs />
      <Investor />
      <Landlord />
      <ReviewsMini />
      <CustomFooter />
    </>
  );
};

export default Main;
