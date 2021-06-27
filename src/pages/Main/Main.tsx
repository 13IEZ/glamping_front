import AppToolbar from '../../components/UI/AppToolbar/AppToolbar';
import Landlord from '../../components/Landlord/Landlord';
import Investor from '../../components/Investor/Investor';
import CustomCarousel from '../../components/UI/Carousel/CustomCarousel';
import CustomFooter from '../../components/UI/CustomFooter/CustomFooter';

const Main: React.FC = () => {
  return (
    <>
      <AppToolbar />
      <CustomCarousel />
      <Investor />
      <Landlord />
      <CustomFooter />
    </>
  );
};

export default Main;
