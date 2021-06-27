import { Carousel, Button, Typography } from 'antd';
const { Paragraph } = Typography;
import './CustomCarousel.scss';

const CustomCarousel: React.FC = () => {
  return (
    <section>
      <Carousel autoplay draggable>
        <div>
          <h3 className='contentStyle first-slide'>
            <Button type='primary'>Пример кнопки</Button>
          </h3>
        </div>
        <div>
          <h3 className='contentStyle second-slide'>
            <Paragraph style={{ color: '#fff' }}>Пример текста отображаемоего на слайде</Paragraph>
          </h3>
        </div>
        <div>
          <h3 className='contentStyle third-slide'>
            <Paragraph style={{ color: '#fff' }}>Пример текста отображаемоего на слайде</Paragraph>
            <Button>Пример кнопки</Button>
          </h3>
        </div>
        <div>
          <h3 className='contentStyle fourth-slide'>
            <Button>Пример кнопки</Button>
            <Paragraph style={{ color: '#fff' }}>Пример текста отображаемоего на слайде</Paragraph>
          </h3>
        </div>
      </Carousel>
    </section>
  );
};

export default CustomCarousel;
