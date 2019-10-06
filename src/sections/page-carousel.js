import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from 'reactstrap';

import bannerService from '../assets/images/banner-service-price.jpg';
import bannerPickup from '../assets/images/banner-pickup.jpg';
import bannerAc from '../assets/images/ac-banner.jpg';

const pageCarouselItems = [
  {
    key: '001',
    title: 'Air Conditioning Refill from £60',
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

const PageCarousel = () => {
  const [{
    activeIndex,
    animating,
  }, setCarouselState] = useState({
    activeIndex: 0,
  });

  const onExiting = () => {
    setCarouselState(prev => ({ ...prev, animating: true }));
  };

  const onExited = () => {
    setCarouselState(prev => ({ ...prev, animating: false }));
  };

  const goToIndex = (idx) => {
    if (animating) return;
    setCarouselState(prev => ({ ...prev, activeIndex: idx }));
  };

  const handlePrevious = () => {
    const previousIdx = activeIndex === 0 ? pageCarouselItems.length - 1 : activeIndex - 1;
    goToIndex(previousIdx);
  };

  const handleNext = () => {
    const nextIdx = activeIndex === pageCarouselItems.length - 1 ? 0 : activeIndex + 1;
    goToIndex(nextIdx);
  };


  const slides = pageCarouselItems.map(item => (
    <CarouselItem
      tag="div"
      onExiting={onExiting}
      onExited={onExited}
      key={item.key}
    >
      <div
        style={{
          backgroundImage: `url(${item.image})`,
          position: 'absolute',
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
          backgroundRepeat: 'no-repeact',
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
        }}
      />

      {/* <img src={item.image} alt={item.altText} /> */}
      <CarouselCaption captionText={item.content} captionHeader={item.title} />
    </CarouselItem>
  ));

  return (
    <Carousel
      activeIndex={activeIndex}
      next={handleNext}
      previous={handlePrevious}
    >
      <CarouselIndicators
        items={pageCarouselItems}
        activeIndex={activeIndex}
        onClickHandler={goToIndex}
      />
      {slides}
      <CarouselControl direction="prev" directionText="Previous" onClickHandler={handlePrevious} />
      <CarouselControl direction="next" directionText="Next" onClickHandler={handleNext} />
    </Carousel>
  );
};

export default PageCarousel;
