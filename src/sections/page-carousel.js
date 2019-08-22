import React from 'react';

import Carousel from '../components/carousel';
import bannerService from '../assets/images/banner-service-price.jpg';
import bannerPickup from '../assets/images/banner-pickup.jpg';
import bannerAc from '../assets/images/ac-banner.jpg';

const pageCarouselItems = [
  {
    key: '001',
    title: 'Air Conditioning Refill',
    content: 'Vehicle air con Full Service / Re-gas',
    image: bannerAc,
  },
  {
    key: '002',
    title: '',
    content: '',
    image: bannerService,
    url: '',
  },
  {
    key: '003',
    title: 'Pickup Service',
    content: 'Pickup service when you need it',
    image: bannerPickup,
  },
];

const PageCarousel = () => (
  <Carousel items={pageCarouselItems} />
);

export default PageCarousel;
