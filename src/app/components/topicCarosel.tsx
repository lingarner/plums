// components/TopicCarousel.js
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Topic from './topic';

const TopicCarousel = ({title,topics} : {title:string,topics: string[]}) => {


  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1030,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div >
      <h2 className="text-lg font-semibold text-darkPlum mb-4">{title}</h2>
      <Slider {...settings}>
        {topics.map((topic, index) => (
          <div key={index} > 
            <Topic topic={topic} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TopicCarousel;
