import React, { Fragment, useState } from 'react';
import {
  Container,
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';

import image1 from '../../img/puzzle12.jpg';
import image2 from '../../img/roundAbout2-Logo.jpg';
import image3 from '../../img/adult-celebrate2.jpg';


const items = [
  {
    src: image1,
    altText: 'Immunization Puzzle',
    caption: '#vaccineswork',
    captionText: '',
  },
  {
    src: image2,
    altText: 'VackTRACK Logo',
    caption: '#vaccineswork',
    captionText: '',

  },
  {
    src: image3,
    altText: '',
    caption: '#vaccineswork',
    captionText: '',
  }
];

const RoundAbout = (props) => {
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
      <CarouselItem className="carousel-inner"
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img className="d-block w-100" src={item.src} alt={item.altText} />
        <CarouselCaption captionHeader={item.caption || item.captionText}
          captionText=''
        />
      </CarouselItem>
    );
  });

  return (
    <Container>
      <Fragment>
        <style>
          {
            `.custom-tag {
                height: 70%;
                width: 100%;
                background: black;
                opacity: 0.9;
                margin: 2rem 5rem
                padding: 3rem 2rem 3rem 2rem;
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
          <CarouselControl
            direction="prev"
            directionText="Previous"
            onClickHandler={previous}
          />
          <CarouselControl
            direction="next"
            directionText="Next" onClickHandler={next}
          />
        </Carousel>
      </Fragment>
    </Container>
  );
}

export default RoundAbout;
