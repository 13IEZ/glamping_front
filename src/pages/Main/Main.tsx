import AppToolbar from '../../components/UI/AppToolbar/AppToolbar';
import Landlord from '../../components/Landlord/Landlord';
import Investor from '../../components/Investor/Investor';
import CustomCarousel from '../../components/UI/Carousel/CustomCarousel';

const Main: React.FC = () => {
  return (
    <>
      <AppToolbar />
      <CustomCarousel />
      <Investor />
      <Landlord />
    </>
  );
};

export default Main;
