// components/TopicCarousel.js
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import TopicCard from './topic';
import { Topic, NotebookEntry} from '../types';
import AttachmentCard from './attachmentCard';

const Notebook = () => {
  const myArray = [1,2,3,4,5,6,7,8,9]
 


  return (
    <div >
      <h2 className="text-lg font-semibold text-darkPlum mb-4">Notebook</h2>
      <div className='rounded-xl grid grid-cols-3 gap-2'>
        {myArray.map((item) => (
          <div className='bg-white rounded p-5' key={item}>
           Entry {item}
          </div>
        ))}

      </div>
    </div>
  );
};

export default Notebook;
