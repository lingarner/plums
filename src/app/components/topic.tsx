import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList } from '@fortawesome/free-solid-svg-icons';

export default function Topic({topic}: {topic: string}) {
  return (
    <div className='relative bg-white shadow-md shadow-purple-500/10 sm:w-40 w-80 h-40 rounded-xl overflow-hidden'>

      <div className="h-full bg-white relative">
        {/* Top-right corner dip */}
        <div className="absolute top-0 right-0 h-6 w-10 bg-white rounded-bl-full"></div>
        <div className="absolute top-0 right-0 h-6 w-20 bg-buttonColor opacity-20 rounded-bl-full"></div>
      </div>

      <div className='flex flex-col pt-5 pl-5 z-1 absolute top-0 left-0 right-0 bottom-0'>
        <div className='w-14 h-14 bg-buttonColor opacity-10 rounded-full flex items-center justify-center'>
            <FontAwesomeIcon className="text-xl text-darkPlum" icon={faList} />
        </div>
        <h3 className='p-2 font-medium'>{topic}</h3>
      </div>
    </div>
  );
}
