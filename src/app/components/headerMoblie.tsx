import React from 'react';
import Image from 'next/image';
import PlumLogo from '../images/plum_logo.png';
import '../globals.css';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';


export default function HeaderMoblie() {
  return (
    <>
    <div>
      <div className="flex items-center space-x-4 w-full mt-5">
        <Image src={PlumLogo} alt="Plum Logo" className="w-20" />
        <h1 className="text-xl font-bold text-darkPlum ml-2">Plum Learning</h1>
        <div className="my-4 hover:text-buttonColor">
          <Link href="/" className="flex items-center">
            <>
              <FontAwesomeIcon icon={faSearch} className="text-xl mr-2" />
              <input placeholder='Search' className='text-md bg-transparent outline-none focus:border-darkPlum'/>
            </>
          </Link>
        </div>
      </div>
    </div>
    </>
  );
}
