import React from 'react';

import Carousel from '../components/carousel';
import bannerService from '../assets/images/banner-service-price.jpg';
import bannerPickup from '../assets/images/banner-pickup.jpg';

const pageCarouselItems = [
  {
    key: '001',
    title: '',
    content: '',
    image: bannerService,
    url: '',
  },
  {
    key: '002',
    title: 'Pickup Service',
    content: 'Pickup service when you need it',
    image: bannerPickup,
  },
];

const PageCarousel = () => (
  <Carousel items={pageCarouselItems} />
);

export default PageCarousel;
