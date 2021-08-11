import './CurrentAccommodationGallery.scss';

import React, { useRef } from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import config from '../../../../settings/config';

interface CurrentAccommodationGalleryProps {
  images: Array<string> | [];
}

const CurrentAccommodationGallery: React.FC<CurrentAccommodationGalleryProps> = ({ images }) => {
  const imgArr = images.map(elem => {
    return { original: config.apiUrl + '/uploads/' + elem, thumbnail: config.apiUrl + '/uploads/' + elem };
  });

  const carousel = useRef<ImageGallery>(null);

  return (
    <div className='CurrentAccommodationGallery'>
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

export default CurrentAccommodationGallery;
