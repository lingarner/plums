import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import AttachmentCard from './attachmentCard';
import { Attachment } from '../types';

const AttachmentCarousel: React.FC<{ title: string, Attachments: Attachment[] }> = ({ title, Attachments }) => {
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
  }, [title, Attachments]); 


  const shouldDisplayCarousel = Attachments.length > slidesToShow;

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
          {Attachments.map((Attachment, index) => (
            <div key={index}>
              <AttachmentCard attachment={Attachment} />
            </div>
          ))}
        </Slider>
      )}
      {!shouldDisplayCarousel && (
        <div className="flex flex-wrap">
          {Attachments.map((Attachment, index) => (
            <AttachmentCard key={index} attachment={Attachment} />
          ))}
        </div>
      )}
    </div>
  );
};

export default AttachmentCarousel;
