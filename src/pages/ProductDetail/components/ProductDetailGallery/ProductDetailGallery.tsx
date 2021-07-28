import './ProductDetailGallery.scss';

import React from 'react';

import { useTypedSelectorHook } from '../../../../hooks/useTypedSelector';
import config from '../../../../settings/config';

interface IProductDetailGalleryProps {
  showModal: () => void;
}

const ProductDetailGallery: React.FC<IProductDetailGalleryProps> = ({ showModal }) => {
  const { products } = useTypedSelectorHook(state => state.products);

  const img = products[1].image[0];

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
