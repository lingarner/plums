import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import LinkCard from './linkCard';
import { Url } from '../types';

const LinkCarousel: React.FC<{ title: string, Links: Url[] }> = ({ title, Links }) => {
  const [slidesToShow, setSlidesToShow] = useState(5); // Initial value

  useEffect(() => {
    

    const handleResize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth <= 600) {
        setSlidesToShow(2);
      } else if (screenWidth <= 1030) {
        setSlidesToShow(3);
      } else if (screenWidth <= 1400) {
        setSlidesToShow(4);
      } else {
        setSlidesToShow(5);
      }
    };

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [title, Links]); 


  const shouldDisplayCarousel = Links.length > slidesToShow;

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1
  }



  return (
    <div>
      <h2 className="text-lg font-semibold text-darkPlum mb-4">{title}</h2>
      {shouldDisplayCarousel && (
        <Slider {...settings}>
          {Links.map((link, index) => (
            <div key={index}>
              <LinkCard link={link} />
            </div>
          ))}
        </Slider>
      )}
      {!shouldDisplayCarousel && (
        <div className="grid grid-cols-2 gap-2 sm:flex sm:flex-wrap">
          {Links.map((link, index) => (
            <LinkCard key={index} link={link} />
          ))}
        </div>
      )}
    </div>
  );
};

export default LinkCarousel;
