import './CustomCarousel.scss';

import React from 'react';

import { Button, Carousel } from 'antd';
import { Link } from 'react-router-dom';

import money from '../../../assets/icons/money-icon.png';
import track from '../../../assets/icons/track-icon.png';
import ScrollUp from '../../Buttons/ScrollUp/ScrollUp';
import NextArrow from './Items/NextArrow';
import PrevArrow from './Items/PrevArrow';

const CustomCarousel: React.FC = () => {
  return (
    <section className='carousel'>
      <ScrollUp />
      <Carousel autoplay autoplaySpeed={5000} draggable arrows nextArrow={<NextArrow />} prevArrow={<PrevArrow />}>
        <div className='contentStyle first-slide'>
          <div className='content-slider container'>
            <h2 className='title-carousel'>
              Есть земля и хочешь <br /> на ней зарабаывать?
            </h2>
            <p className='text-carousel'>Мы поможем сдавать ее в аренду</p>
            <Button className='carousel_button'>
              <Link to='#'>Сдать землю</Link>
            </Button>
          </div>
        </div>

        <div className='contentStyle second-slide'>
          <div className='content-slider container'>
            <h2 className='title-carousel-2slide'>GLAMPING</h2>
            <p className='text-carousel'>
              Закажи <span className='yellowText'>glam-модуль</span> и остановись <br /> в самом красивом месте
              Казахстана
            </p>
            <div className='icon-text'>
              <img className='icon' alt='Not Found' src={money} />
              <span className='text'>дополнительный доход</span>
            </div>
            <div className='icon-text'>
              <img className='icon' alt='Not Found' src={track} />
              <span className='text'>Меняй локацию</span>
            </div>
            <Button className='carousel_button'>
              <Link to='#'>Заказать модуль</Link>
            </Button>
          </div>
        </div>

        <div className='contentStyle third-slide'>
          <div className='content-slider container'>
            <h2 className='title-carousel'>Отдыхай уже сейчас</h2>
            <p className='text-carousel'>
              Глэмпинг — это пожалуй лучшее удовольствие. <br />С комфортом вдали от цивилизации.
            </p>
            <Button className='carousel_button'>
              <Link to='/store'>На карту</Link>
            </Button>
          </div>
        </div>
      </Carousel>
    </section>
  );
};

export default CustomCarousel;
