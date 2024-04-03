// components/TopicCarousel.js
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import TopicCard from './topic';
import { Topic, NotebookEntry} from '../types';
import AttachmentCard from './attachmentCard';

//fetch the titles of all the notes in the notebook
const Notebook = () => {

  //put them in an array
  const myDict: NotebookEntry[] = [
    { id: 1, title: "hello", content: "Hello world!", pinned: false },
    { id: 2, title: "meoow", content: "Meow!", pinned: false },
    { id: 3, title: "moo", content: "Moo!", pinned: false }
  ];
 


  return (
    <div >
      <h2 className="text-lg font-semibold text-darkPlum mb-4">Notebook</h2>

      {/* button to add new note */}
      <div>
      <a className="my-10 bg-red-500 bg-opacity-80 border border-red-800 p-2 rounded" >Add New Note</a>
      </div>

      <div className='rounded-xl grid grid-cols-1  px-3  sm:w-full sm:px-0 sm:grid-cols-3 gap-2'>
      {
        Object.entries(myDict).map(([title, content]) => (
        <div className='bg-white rounded p-5' key={title}>
          <a href={`/notebook/${title}`}>Entry {title}</a>
        </div>
        ))
      }
      </div>
    </div>
  );
};

export default Notebook;
