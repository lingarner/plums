import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList, faCog, faTachometerAlt, faSearch } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import PlumLogo from '../images/plum_logo.png';
import '../globals.css';
import CurrentDateTime from './datetime';

export default function Menu() {
  return (
    <>
      <div className=" bg-sideMenu bg-opacity-20 h-screen w-1/6 flex flex-col items-center justify-start font-nunito">
        <CurrentDateTime />
        <div className="flex items-center justify-center py-4">
          <Image src={PlumLogo} alt="Plum Logo" className="w-2/5" />
          <h1 className="text-2xl font-bold text-darkPlum">Plum Learning</h1>
        </div>
        <ul className="flex flex-col items-start mw-1/6 p-10">
          <li className="my-4 hover:text-buttonColor ml-10">
            <Link href="/" className="flex items-center pl-5">
              <>
                <FontAwesomeIcon icon={faSearch} className="text-xl mr-2" />
                <input placeholder='Search' className='text-md bg-transparent outline-none focus:border-darkPlum'/>
              </>
            </Link>
          </li>
          <li className="my-4 hover:text-buttonColor ml-10">
            <Link href="/" className="flex items-center pl-5">
              <>
                <FontAwesomeIcon icon={faTachometerAlt} className="text-xl mr-2 " />
                <p className='text-md'>Dashboard</p>
              </>
            </Link>
          </li>
          <li className="my-4 ml-10 hover:text-buttonColor">
            <Link href="/" className="flex items-center pl-5 ">
              <>
                <FontAwesomeIcon icon={faList} className="text-xl mr-2" />
                <p className='text-md'>Topics</p>
              </>
            </Link>
          </li>
          <li className="my-4 hover:text-buttonColor ml-10">
            <Link href="/" className="flex items-center pl-5">
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
