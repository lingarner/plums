import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileLines, faThumbTack } from '@fortawesome/free-solid-svg-icons';
import {Topic} from '../types';

export default function TopicCard({topic}: {topic: Topic}) {
  return (
    <div onClick={() => window.location.href = `/topic`}>
    <div className='topic-card relative bg-white shadow-lg sm:shadow-md shadow-purple-500/10 sm:w-40  h-32 sm:h-40 rounded-xl overflow-hidden m-3'>
      

      <div className="h-full bg-white relative">

        <div className="absolute top-0 right-0 h-6 w-10 bg-white rounded-bl-full"></div>
        <div className="absolute top-0 right-0 h-6 w-20 bg-buttonColor opacity-20 rounded-bl-full"></div>
      </div>
      <FontAwesomeIcon icon={faThumbTack} className={`${topic.pinned ? 'text-buttonColor' : 'text-gray-400'} absolute top-1 left-1  bg-white rounded-tr-full`} onClick={() => topic.pinned = !topic.pinned}/>

      <div className='flex sm:flex-col pt-5 pl-5 z-1 absolute top-0 left-4 sm:left-0 right-0 bottom-0'>
    
        <div className='w-16 h-16 sm:w-14 sm:h-14 bg-[#f4eef6] rounded-full flex items-center justify-center'>
             <FontAwesomeIcon icon={faFileLines} className="text-2xl sm:text-xl opacity-90 text-buttonColor"/>   
        </div>
        <h3 className='p-2 text-lg font-semibold pt-5 pl-3 sm:pl-2 sm:pt-2 sm:text-md'>{topic.title}</h3>
      </div>
    </div>
    </div>
  );
}
