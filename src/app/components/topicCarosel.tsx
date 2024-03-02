import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import TopicCard from './topic';
import { Topic } from '../types';

const TopicCarousel: React.FC<{ title: string, topics: Topic[] }> = ({ title, topics }) => {
  const [slidesToShow, setSlidesToShow] = useState(5); // Initial value

  useEffect(() => {
    

    const handleResize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth <= 600) {
        setSlidesToShow(2);
      } else if (screenWidth <= 1030) {
        setSlidesToShow(3);
      } 
    };

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [title]); 


  const shouldDisplayCarousel = topics.length > slidesToShow;

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
          {topics.map((topic, index) => (
            <div key={index}>
              <TopicCard topic={topic} />
            </div>
          ))}
        </Slider>
      )}
      {!shouldDisplayCarousel && (
        <div className="flex flex-wrap">
          {topics.map((topic, index) => (
            <TopicCard key={index} topic={topic} />
          ))}
        </div>
      )}
    </div>
  );
};

export default TopicCarousel;
