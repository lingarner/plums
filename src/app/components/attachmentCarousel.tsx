// components/TopicCarousel.js
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import TopicCard from './topic';
import { Attachment } from '../types';
import AttachmentCard from './attachmentCard';

const AttachmentCarousel = ({title,attachments} : {title:string,attachments: Attachment[]}) => {


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
        {attachments.map((attachment, index) => (
          <div key={index} > 
            <AttachmentCard attachment={attachment} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default AttachmentCarousel;
