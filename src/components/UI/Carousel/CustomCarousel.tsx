import './CustomCarousel.scss';

import React from 'react';

import { Button, Carousel } from 'antd';
import { Link } from 'react-router-dom';

import money from '../../../assets/icons/money-icon.png';
import track from '../../../assets/icons/track-icon.png';
import NextArrow from './Items/NextArrow';
import PrevArrow from './Items/PrevArrow';

const CustomCarousel: React.FC = () => {
  return (
    <section className='carousel'>
      <Carousel autoplay autoplaySpeed={5000} draggable arrows nextArrow={<NextArrow />} prevArrow={<PrevArrow />}>
        <div className='contentStyle third-slide'>
          <div className='content-slider container'>
            <h2 className='title-carousel first-title'>Отдыхай гламурно!</h2>
            <p className='text-carousel'>
              Глэмпинг — роскошь наедине с природой. <br />
              Комфорт вдали от цивилизации.
            </p>
            <Button className='carousel_button'>
              <Link to='/locations-map'>Выбрать глэмпинг</Link>
            </Button>
          </div>
        </div>

        <div className='contentStyle second-slide'>
          <div className='content-slider container'>
            <h2 className='title-carousel'>Зарабатывай отдыхая!</h2>
            <p className='text-carousel'>
              Закажи <span className='yellowText'>glam-модуль</span> и установи его <br /> в самом красивом месте
              Казахстана
            </p>
            <div className='icon-text'>
              <img className='icon' alt='Not Found' src={money} />
              <span className='text'>получай пассивный доход</span>
            </div>
            <div className='icon-text'>
              <img className='icon' alt='Not Found' src={track} />
              <span className='text'>меняй глэмпинг</span>
            </div>
            <Button className='carousel_button'>
              <Link to='/store/[]'>Заказать модуль</Link>
            </Button>
          </div>
        </div>

        <div className='contentStyle first-slide'>
          <div className='content-slider container'>
            <h2 className='title-carousel'>
              Есть земля? Xочешь <br /> на ней зарабатывать?
            </h2>
            <p className='text-carousel'>Мы поможем создать глэмпинг</p>
            <Button className='carousel_button'>
              <Link to='/locations/new-location'>Создать глэмпинг</Link>
            </Button>
          </div>
        </div>
      </Carousel>
    </section>
  );
};

export default CustomCarousel;
