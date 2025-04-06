"use client";

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface CarouselProps {
  items: React.ReactNode[];
  autoplay?: boolean;
  speed?: number;
  slidesToShow?: number;
  arrows?: boolean;
  dots?: boolean;
  className?: string;
}

const Carousel: React.FC<CarouselProps> = ({
  items,
  autoplay = true,
  speed = 500,
  slidesToShow = 1,
  arrows = true,
  dots = true,
  className = '',
}) => {
  const settings = {
    dots: dots,
    infinite: true,
    speed: speed,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    autoplay: autoplay,
    autoplaySpeed: 5000,
    arrows: arrows,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: Math.min(slidesToShow, 2),
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <div className={`w-full ${className}`}>
      <Slider {...settings}>
        {items.map((item, index) => (
          <div key={index} className="px-2">
            {item}
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
