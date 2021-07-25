import './CustomCarousel.scss';

import React from 'react';

import { Button, Carousel } from 'antd';
import { Link } from 'react-router-dom';

import money from '../../../assets/icons/money-icon.png';
import track from '../../../assets/icons/track-icon.png';

const CustomCarousel: React.FC = () => {
  return (
    <section className='carousel'>
      <Carousel autoplay draggable>
        <div className='contentStyle first-slide'>
          <div className='content-slider'>
            <div className='title-carousel'>GLAMPING</div>
            <div className='text-carousel'>
              Закажи <span className='yellowText'>glam-модуль</span> и остановись в самом красивом месте Казахстана
              <div className='icon-text'>
                <img className='icon' alt='Not Found' src={money} />
                <span className='text'>отдыхай или сдавай</span>
              </div>
              <div className='icon-text'>
                <img className='icon' alt='Not Found' src={track} />
                <span className='text'>меняй локацию</span>
              </div>
              <Button className='carousel_button' style={{ background: '#FDD74E', border: '1px solid black' }}>
                <Link to='/store'>Заказать модуль</Link>
              </Button>
            </div>
          </div>
        </div>
        <div className='contentStyle second-slide'>
          <div className='content-slider'>
            <div className='title-carousel'>GLAMPING</div>
            <div className='text-carousel'>
              Дополнительный доход от своего земельного участка!
              <div className='icon-text'>
                <img className='icon' alt='Not Found' src={money} />
                <span className='text'>дополнительный доход</span>
              </div>
              <div className='icon-text'>
                <img className='icon' alt='Not Found' src={track} />
                <span className='text'>оперативное управление</span>
              </div>
              <Button className='carousel_button' style={{ background: '#FDD74E', border: '1px solid black' }}>
                <Link to='#'>Сдать участок</Link>
              </Button>
            </div>
          </div>
        </div>
        <div className='contentStyle third-slide'>
          <div className='content-slider'>
            <div className='title-carousel'>GLAMPING</div>
            <div className='text-carousel'>
              Глэмпинг – это отдых на природе с пометкой "люкс"!
              <div className='icon-text'>
                <img className='icon' alt='Not Found' src={money} />
                <span className='text'>особый формат отдыха</span>
              </div>
              <div className='icon-text'>
                <img className='icon' alt='Not Found' src={track} />
                <span className='text'>гламурный кемпинг</span>
              </div>
              <Button className='carousel_button' style={{ background: '#FDD74E', border: '1px solid black' }}>
                <Link to='#'>Забронировать</Link>
              </Button>
            </div>
          </div>
        </div>
      </Carousel>
    </section>
  );
};

export default CustomCarousel;
