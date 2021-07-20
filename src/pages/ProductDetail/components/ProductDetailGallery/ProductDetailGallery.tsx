import React from 'react';

import config from '../../../../settings/config';
import { useTypedSelectorHook } from '../../../../hooks/useTypedSelector';
import './ProductDetailGallery.scss';

interface IProductDetailGalleryProps {
  showModal: () => void;
}

const ProductDetailGallery: React.FC<IProductDetailGalleryProps> = ({ showModal }) => {
  const { modules } = useTypedSelectorHook(state => state.modules);

  const img = modules[1].image[0];

  return (
    <div className='gallery'>
      <div className='gallery__bigImageWrapper' onClick={showModal}>
        <img className='gallery__img' src={config.apiUrl + '/uploads/' + img} alt='module' />
      </div>
      <div className='gallery__imagesWrapper'>
        <div className='gallery__imageWrapper' onClick={showModal}>
          <img className='gallery__img' src={config.apiUrl + '/uploads/' + img} alt='module' />
        </div>
        <div className='gallery__imageWrapper' onClick={showModal}>
          <img className='gallery__img' src={config.apiUrl + '/uploads/' + img} alt='module' />
        </div>
        <div className='gallery__imageWrapper' onClick={showModal}>
          <img className='gallery__img' src={config.apiUrl + '/uploads/' + img} alt='module' />
        </div>
        <div className='gallery__imageWrapper' onClick={showModal}>
          <img className='gallery__img' src={config.apiUrl + '/uploads/' + img} alt='module' />
        </div>
      </div>
    </div>
  );
};

export default ProductDetailGallery;
