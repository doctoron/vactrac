import React, { Fragment, useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';

import image1 from '../../img/roundAbout-Logo.jpg';
import image2 from '../../img/puzzle1.jpg';
import video from '../../components/video/Video';


const items = [
  {
    src: image1,
    altText: 'Immunization Puzzle',
    caption: '#vaccineswork',
    captionText: '',
    key: '1'
  },
  {
    src: image2,
    altText: 'VackTRACK Logo',
    caption: '#vaccineswork',
    captionText: '',
    key: '2'

  },
  {
    src: video,
    altText: '',
    caption: '',
    captionText: '',
    key: '3'
  }
];

console.log('src definition:', typeof (src));

const RoundAbout = (prop) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} />
        <CarouselCaption
          captionHeader={item.caption || item.captionText}
          captionText=""
        />
      </CarouselItem>
    );
  });

  return (
    <Fragment>
      <style>
        {
          `.custom-tag {
                vh: 100;
                vh: 100;
                background: black;
                opacity: 0.9;
              }
              .carousel-caption h3 {
                color: #20c997;
                text-shadow: 2px 2px black;
              }
              `
        }
      </style>
      <Carousel
        activeIndex={activeIndex}
        next={next}
        previous={previous}
      >
        <CarouselIndicators
          items={items}
          activeIndex={activeIndex}
          onClickHandler={goToIndex}
        />
        {slides}
        <CarouselControl direction="prev"
          directionText="Previous" onClickHandler={previous}
        />
        <CarouselControl
          direction="next"
          directionText="Next" onClickHandler={next}
        />
      </Carousel>
    </Fragment>
  );
}

export default RoundAbout;
