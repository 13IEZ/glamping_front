import AboutUs from '../../components/AboutUs/AboutUs';
import Investor from '../../components/Investor/Investor';
import Landlord from '../../components/Landlord/Landlord';
import ReviewsMini from '../../components/ReviewsMini/ReviewsMini';
import CustomCarousel from '../../components/UI/Carousel/CustomCarousel';
import CustomFooter from '../../components/UI/CustomFooter/CustomFooter';

const Main: React.FC = () => {
  return (
    <>
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
