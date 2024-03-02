import React, { useState } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList, faCog, faTachometerAlt, faSearch, faChevronLeft } from '@fortawesome/free-solid-svg-icons'; // Import the arrow icon
import Image from 'next/image';
import PlumLogo from '../images/plum_logo.png';
import '../globals.css';
import CurrentDateTime from './datetime';
import {Topic} from '../types';
import DeleteTopicModal from './deleteTopicModal';

export default function TopicMenu({topic} : {topic: Topic}) {
  const [menuOpen, setMenuOpen] = useState(false);

  
  

  return (
    <>
     
      <div className="h-screen w-40 flex flex-col items-center justify-between">
          <h2 className="pt-10 text-2xl font-semibold text-darkPlum mb-4 ">{topic?.name}</h2>
          <button className="my-10 bg-red-500 bg-opacity-80 border border-red-800 p-2 rounded" onClick={() => setMenuOpen(true)}><p className='text-white'>Delete</p></button>
        </div>
    </>
  );
}
