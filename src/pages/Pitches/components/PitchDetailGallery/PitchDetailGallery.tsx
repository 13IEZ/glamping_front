import './PitchDetailGallery.scss';
import 'react-image-gallery/styles/css/image-gallery.css';

import React, { useRef } from 'react';

import ImageGallery from 'react-image-gallery';

import config from '../../../../settings/config';

interface PitchDetailGalleryProps {
  images: Array<string> | [];
}

const PitchDetailGallery: React.FC<PitchDetailGalleryProps> = ({ images }) => {
  const imgArr = images.map(elem => {
    return { original: config.apiUrl + '/uploads/' + elem, thumbnail: config.apiUrl + '/uploads/' + elem };
  });

  const carousel = useRef<ImageGallery>(null);

  return (
    <div className='PitchDetailGallery'>
      <ImageGallery
        onClick={() => carousel?.current?.fullScreen()}
        ref={carousel}
        showNav={false}
        showPlayButton={false}
        showFullscreenButton={false}
        items={imgArr}
      />
    </div>
  );
};

export default PitchDetailGallery;
