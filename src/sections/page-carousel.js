import React from 'react'
import Carousel from '../components/carousel'


import bannerService from '../assets/images/banner-service-price.jpg'
import bannerPickup from '../assets/images/banner-pickup.jpg'


const PageCarousel = () => (
    <Carousel items={pageCarouseItems} />
)

export default PageCarousel;


const pageCarouseItems = [
  {
    key: '001',
    title: 'Services',
    content: 'Quality service at resonable price',
    image: bannerService,
    url: 'services'    
  },
  {
    key: '002',
    title: 'Pickup Service',
    content: 'Pickup service when you need it',
    image: bannerPickup,
  }
]