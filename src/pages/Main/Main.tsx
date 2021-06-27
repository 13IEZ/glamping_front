import Investor from '../../components/Investor/Investor';
import Landlord from '../../components/Landlord/Landlord';
import Reviews from '../../components/Reviews/Reviews';
import AppToolbar from '../../components/UI/AppToolbar/AppToolbar';
import CustomCarousel from '../../components/UI/Carousel/CustomCarousel';
import CustomFooter from '../../components/UI/CustomFooter/CustomFooter';

const Main: React.FC = () => {
  return (
    <>
      <AppToolbar />
      <CustomCarousel />
      <Investor />
      <Landlord />
      <Reviews />
      <CustomFooter />
    </>
  );
};

export default Main;
