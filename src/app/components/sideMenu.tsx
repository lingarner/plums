import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList, faCog, faTachometerAlt, faSearch } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import PlumLogo from '../images/plum_logo.png';
import '../globals.css';
import CurrentDateTime from './datetime';

export default function SideMenu() {


  return (
    <>
    <div className="bg-sideMenu bg-opacity-20 h-full w-1/6 fixed top-0 left-0 z-10 flex flex-col items-center font-nunito">
    <CurrentDateTime />
      <div className="flex items-center justify-center w-full py-4">
        <Image src={PlumLogo} alt="Plum Logo" className="w-2/5" />
        <h1 className="text-xl font-bold text-darkPlum ml-2">Plum Learning</h1>
      </div>
      <ul className="flex flex-col items-start h-full p-10">
        <li className="my-4 hover:text-buttonColor">
          <Link href="/" className="flex items-center">
            <>
              <FontAwesomeIcon icon={faSearch} className="text-xl mr-2" />
              <input placeholder='Search' className='text-md bg-transparent outline-none focus:border-darkPlum'/>
            </>
          </Link>
        </li>
        <li className="my-4 hover:text-buttonColor">
          <Link href="/" className="flex items-center">
            <>
              <FontAwesomeIcon icon={faTachometerAlt} className="text-xl mr-2" />
              <p className='text-md'>Dashboard</p>
            </>
          </Link>
        </li>
        <li className="my-4 hover:text-buttonColor">
          <Link href="/" className="flex items-center">
            <>
              <FontAwesomeIcon icon={faList} className="text-xl mr-2" />
              <p className='text-md'>Topics</p>
            </>
          </Link>
        </li>
        <li className="my-4 hover:text-buttonColor">
          <Link href="/" className="flex items-center">
            <>
              <FontAwesomeIcon icon={faCog} className="text-xl mr-2" />
              <p className='text-md'>Settings</p>
            </>
          </Link>
        </li>
      </ul>
    </div>
   
    </>
  );
}
