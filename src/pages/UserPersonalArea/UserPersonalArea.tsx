import React from 'react';
import TouristSection from './components/TouristSection/TouristSection';
import InvestorSection from './components/InvestorSection/InvestorSection';

const UserPersonalArea: React.FC = () => {
  return (
    <div className='container'>
      <TouristSection />

      <InvestorSection />
    </div>
  );
};

export default UserPersonalArea;
