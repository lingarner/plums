import React, { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList, faCog, faTachometerAlt, faSearch, faChevronLeft } from '@fortawesome/free-solid-svg-icons'; // Import the arrow icon
import Image from 'next/image';
import PlumLogo from '../images/plum_logo.png';
import '../globals.css';
import CurrentDateTime from './datetime';
import TopicMenu from './TopicMenu';
import { Topic } from '../types';
import DeleteTopicModal from './deleteTopicModal';

interface SideMenuProps {
  menu: boolean;
  page: string;
  topic: any;
  contentFilter: string;
  onContentFilterChange: (filter: string) => void;
}

export default function SideMenu({ menu, page, topic, contentFilter, onContentFilterChange }: SideMenuProps) {

  const [menuFull, setMenuFull] = useState(menu);
  const [searchHover, setSearchHover] = useState(false);
  const [dashboardHover, setDashboardHover] = useState(false);
  const [topicsHover, setTopicsHover] = useState(false);
  const [settingsHover, setSettingsHover] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);


  const handleOptionChange = (option: string) => {
    onContentFilterChange(option);
  };
 

  return (
    <>
    {menuOpen? <DeleteTopicModal isOpen={menuOpen} topic={topic} onClose={() => setMenuOpen(false)}/> : <></>}
   
    <div className="flex h-screen">
      
      <div className={`h-full bg-sideMenu bg-opacity-20 ${menuFull ? 'w-1/6 ' : 'w-20'} ${page != 'topic'? 'fixed' : ''} flex flex-col items-center justify-start font-nunito`}>

      <div className="absolute top-0 left-0" onClick={() => setMenuFull(!menuFull)}>
          <FontAwesomeIcon icon={faChevronLeft} className="text-xl text-darkPlum transform rotate-180 ml-2" style={{ display: menuFull ? 'none' : 'block' }} />
          <FontAwesomeIcon icon={faChevronLeft} className="text-xl text-darkPlum transform rotate-270 ml-2" style={{ display: menuFull ? 'block' : 'none' }} />
        </div>

        <CurrentDateTime />
        <a href="/">
        <div className="flex items-center justify-center py-4">
      
          <Image src={PlumLogo} alt="Plum Logo" className="w-[65px]" />
          {menuFull && <h1 className="text-2xl font-bold text-darkPlum">Plum Learning</h1>}
        </div>
        </a>
        <ul className={`flex flex-col ${menuFull ? "items-start mw-1/6 p-10" : "items-center"}`}>
          <li className={`my-4 hover:text-buttonColor ${menuFull ? "ml-10" : "ml-0"}`}>
            <div onClick={() => setMenuFull(true)} className={`flex flex-row items-center ${menuFull ? "pl-5" : "pl-0"} `}>
                <FontAwesomeIcon icon={faSearch} className={`text-xl ${menuFull ? "mr-2" : "mr-0"}`} onMouseEnter={() => setSearchHover(true)}
                onMouseLeave={() => setSearchHover(false)}/>
                {menuFull && <input placeholder='Search' className='text-md bg-transparent outline-none focus:border-darkPlum' />}
                {!menuFull && searchHover ? 
                 <div className='absolute left-20 flex justify-center'>
                  <div className='bg-buttonColor p-2 m-1 text-white rounded'>Search</div>
                  </div>: null}
              </div>

          </li>
          <li className={`my-4 hover:text-buttonColor ${menuFull ? "ml-10" : "ml-0"}`}>
            <a href="/" className={`flex items-center ${menuFull ? "pl-5" : "pl-0"} `}>
              <>
                <FontAwesomeIcon icon={faTachometerAlt} className={`text-xl ${menuFull ? "mr-2" : "mr-0"}`} onMouseEnter={() => setDashboardHover(true)}
                onMouseLeave={() => setDashboardHover(false)} />
                {menuFull && <p className='text-md'>Dashboard</p>}
                {!menuFull && dashboardHover ? 
                 <div className='absolute left-20 flex justify-center'>
                  <div className='bg-buttonColor p-2 m-1 text-white rounded'>Dashboard</div>
                  </div>: null}
              </>
            </a>
          </li>
          <li className={`my-4 hover:text-buttonColor ${menuFull ? "ml-10" : "ml-0"}`}>
            <a href="/" className={`flex items-center ${menuFull ? "pl-5" : "pl-0"} `}>
              <>
                <FontAwesomeIcon icon={faList} className={`text-xl ${menuFull ? "mr-2" : "mr-0"}`} onMouseEnter={() => setTopicsHover(true)}
                onMouseLeave={() => setTopicsHover(false)}/>
                {menuFull && <p className='text-md'>Topics</p>}
                {!menuFull && topicsHover ? 
                 <div className='absolute left-20 flex justify-center'>
                  <div className='bg-buttonColor p-2 m-1 text-white rounded'>Topics</div>
                  </div>: null}
              </>
            </a>
          </li>
          <li className={`my-4 hover:text-buttonColor ${menuFull ? "ml-10" : "ml-0"}`}>
            <a href="/" className={`flex items-center ${menuFull ? "pl-5" : "pl-0"} `}>
              <>
                <FontAwesomeIcon icon={faCog} className={`text-xl ${menuFull ? "mr-2" : "mr-0"}`} onMouseEnter={() => setSettingsHover(true)}
                onMouseLeave={() => setSettingsHover(false)}/>
                {menuFull && <p className='text-md'>Settings</p>}
                {!menuFull && settingsHover ? 
                 <div className='absolute left-20 flex justify-center'>
                  <div className='bg-buttonColor p-2 m-1 text-white rounded'>Settings</div>
                  </div>: null}
              </>
            </a>
          </li>
        </ul>

      </div>
      
      {page === 'topic' && !menuFull &&
        <div className="h-screen w-40 flex flex-col items-center justify-between">
          <div>
          <h2 className="pt-10 text-2xl font-semibold text-darkPlum mb-4 ">{topic?.name}</h2>
            <ul className="flex flex-col text-lg py-10 text-darkPlum">
            <li className={contentFilter === 'All' ? 'text-buttonColor' : ''} onClick={() => handleOptionChange('All')}>
              <a>All</a>
            </li>
            <li className={contentFilter === 'Pinned' ? 'text-buttonColor' : ''} onClick={() => handleOptionChange('Pinned')}>
              <a>Pinned</a>
            </li>
            <li className={contentFilter === 'Attachments' ? 'text-buttonColor' : ''} onClick={() => handleOptionChange('Attachments')}>
              <a>Attachments</a>
            </li>
            <li className={contentFilter === 'Subtopics' ? 'text-buttonColor' : ''} onClick={() => handleOptionChange('Subtopics')}>
              <a>Subtopics</a>
            </li>
            <li className={contentFilter === 'Links' ? 'text-buttonColor' : ''} onClick={() => handleOptionChange('Links')}>
              <a>Links</a>
            </li>
             <li className={contentFilter === 'Notebook' ? 'text-buttonColor' : ''} onClick={() => handleOptionChange('Notebook')}>
              <a>Notebook</a>
            </li>
            </ul>
          </div>
          <button className="my-10 bg-red-500 bg-opacity-80 border border-red-800 p-2 rounded" onClick={() => setMenuOpen(true)}><p className='text-white'>Delete Topic </p></button>
        </div>
      }
        
      </div>
      </>
  );
}
