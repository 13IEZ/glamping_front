import AppToolbar from '../../components/UI/AppToolbar/AppToolbar';
import Landlord from '../../components/Landlord/Landlord';
import CustomCarousel from '../../components/UI/Carousel/CustomCarousel';

const Main: React.FC = () => {
  return (
    <>
      <AppToolbar />
      <CustomCarousel />
      <Landlord />
    </>
  );
};

export default Main;
