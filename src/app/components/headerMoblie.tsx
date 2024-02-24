import React, { useState } from 'react';
import Image from 'next/image';
import PlumLogo from '../images/plum_logo.png';

import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faBars, faTimes, faCog, faTachometerAlt, faList} from '@fortawesome/free-solid-svg-icons';

export default function HeaderMobile() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header>

      <div className='m-[7px] mt-[20px]'>

        <Image src={PlumLogo} alt="Plum Logo" className=" absolute top-3 w-[12%] inline" />

        <div className="flex items-center w-[100%] flex-col"> 

          <h1 className="flex-none text-xl font-bold text-darkPlum">Plum Learning</h1>

          <div className="flex items-center my-4 hover:text-buttonColor bg-white p-[0.75px] rounded-[10px]">
            <Link href="/" className="flex items-center">
              <>
                <FontAwesomeIcon icon={faSearch} className="text-xl pl-[4px]" />
                <input placeholder='Search' className='text-center text-md bg-transparent outline-none focus:border-darkPlum m-w-[10%] ml-3 mr-3'/>
              </>
            </Link>
          </div>

        </div>

        <div className="absolute top-3 right-3 text-darkPlum">
          <div className={`menu-toggle cursor-pointer ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
            <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} className="text-3xl" />
          </div>
        </div>

      </div>



      <div className={`side-menu fixed top-0 right-0 h-screen w-3/4 z-50 transition-transform duration-500 ease-in-out transform ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="p-3">
          <div className={`menu-toggle cursor-pointer ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
            <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} className="text-3xl" />
          </div>
          <ul className="flex flex-col items-start mw-1/6 p-10 text-darkPlum">
  
          <li className="my-4 hover:text-buttonColor ml-10">
            <Link href="/" className="flex items-center   ">
              <>
                <FontAwesomeIcon icon={faTachometerAlt} className="text-xl mr-2 " />
                <p className='text-md'>Dashboard</p>
              </>
            </Link>
          </li>
          <li className="my-4 ml-10 hover:text-buttonColor">
            <Link href="/" className="flex items-center    ">
              <>
                <FontAwesomeIcon icon={faList} className="text-xl mr-2" />
                <p className='text-md'>Topics</p>
              </>
            </Link>
          </li>
          <li className="my-4 hover:text-buttonColor ml-10">
            <Link href="/" className="flex items-center   ">
              <>
                <FontAwesomeIcon icon={faCog} className="text-xl mr-2" />
                <p className='text-md'>Settings</p>
              </>
            </Link>
          </li>
        </ul>
        </div>
      </div>
    </header>
  );
}
