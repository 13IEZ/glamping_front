import React from 'react';
import TouristSection from './components/TouristSection/TouristSection';
import InvestorSection from './components/InvestorSection/InvestorSection';
import LandOwnerSection from './components/LandOwnerSection/LandOwnerSection';

const UserPersonalArea: React.FC = () => {
  return (
    <div className='container'>
      <TouristSection />

      <InvestorSection />

      <LandOwnerSection />
    </div>
  );
};

export default UserPersonalArea;
