import React, { useState } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList, faCog, faTachometerAlt, faSearch, faChevronLeft } from '@fortawesome/free-solid-svg-icons'; // Import the arrow icon
import Image from 'next/image';
import PlumLogo from '../images/plum_logo.png';
import '../globals.css';
import CurrentDateTime from './datetime';
import {Topic} from '../types';

export default function TopicMenu({topic} : {topic: Topic}) {
  
 

  return (
    <>
      <div className={` bg-gray-500 bg-opacity-30 h-screen w-32 flex flex-col items-center justify-start`} >
       <h2 className='pt-10 font-nunito text-md text-darkPlum'>{topic?.name}</h2>
        
      </div>
    </>
  );
}
