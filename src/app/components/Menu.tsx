import React, { useState } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList, faCog, faTachometerAlt, faSearch, faChevronLeft } from '@fortawesome/free-solid-svg-icons'; // Import the arrow icon
import Image from 'next/image';
import PlumLogo from '../images/plum_logo.png';
import '../globals.css';
import CurrentDateTime from './datetime';
import TopicMenu from './TopicMenu';
import { Topic } from '../types';

export default function SideMenu({ menu, page, topic }: { menu: boolean, page: string, topic: any }) {
  const [menuFull, setMenuFull] = useState(menu);

  const toggleMenu = () => {
    setMenuFull(!menuFull);
  };

  return (
    <div className="flex h-screen">
      <div className={`h-full bg-sideMenu bg-opacity-20 ${menuFull ? 'w-1/6 fixed' : 'w-20'} ${page != 'topic'? 'fixed' : ''} flex flex-col items-center justify-start font-nunito`}>

        <div className="absolute top-0 right-0" onClick={toggleMenu}>
          <FontAwesomeIcon icon={faChevronLeft} className="text-xl text-darkPlum transform rotate-180 ml-2" style={{ display: menuFull ? 'none' : 'block' }} />
          <FontAwesomeIcon icon={faChevronLeft} className="text-xl text-darkPlum transform rotate-270 ml-2" style={{ display: menuFull ? 'block' : 'none' }} />
        </div>

        <CurrentDateTime />
        <div className="flex items-center justify-center py-4">
          <Image src={PlumLogo} alt="Plum Logo" className="w-[65px]" />
          {menuFull && <h1 className="text-2xl font-bold text-darkPlum">Plum Learning</h1>}
        </div>
        <ul className={`flex flex-col ${menuFull ? "items-start mw-1/6 p-10" : "items-center"}`}>
          <li className={`my-4 hover:text-buttonColor ${menuFull ? "ml-10" : "ml-0"}`}>
            <Link href="/" className={`flex items-center ${menuFull ? "pl-5" : "pl-0"} `}>
              <>
                <FontAwesomeIcon icon={faSearch} className={`text-xl ${menuFull ? "mr-2" : "mr-0"}`} />
                {menuFull && <input placeholder='Search' className='text-md bg-transparent outline-none focus:border-darkPlum' />}
              </>
            </Link>
          </li>
          <li className={`my-4 hover:text-buttonColor ${menuFull ? "ml-10" : "ml-0"}`}>
            <Link href="/" className={`flex items-center ${menuFull ? "pl-5" : "pl-0"} `}>
              <>
                <FontAwesomeIcon icon={faTachometerAlt} className={`text-xl ${menuFull ? "mr-2" : "mr-0"}`} />
                {menuFull && <p className='text-md'>Dashboard</p>}
              </>
            </Link>
          </li>
          <li className={`my-4 hover:text-buttonColor ${menuFull ? "ml-10" : "ml-0"}`}>
            <Link href="/" className={`flex items-center ${menuFull ? "pl-5" : "pl-0"} `}>
              <>
                <FontAwesomeIcon icon={faList} className={`text-xl ${menuFull ? "mr-2" : "mr-0"}`} />
                {menuFull && <p className='text-md'>Topics</p>}
              </>
            </Link>
          </li>
          <li className={`my-4 hover:text-buttonColor ${menuFull ? "ml-10" : "ml-0"}`}>
            <Link href="/" className={`flex items-center ${menuFull ? "pl-5" : "pl-0"} `}>
              <>
                <FontAwesomeIcon icon={faCog} className={`text-xl ${menuFull ? "mr-2" : "mr-0"}`} />
                {menuFull && <p className='text-md'>Settings</p>}
              </>
            </Link>
          </li>
        </ul>

      </div>
      
      {page === 'topic' && !menuFull && <TopicMenu topic={topic} />}
    </div>
  );
}
