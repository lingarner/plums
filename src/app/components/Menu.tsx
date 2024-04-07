import React, { useState, useEffect } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList, faCog, faTachometerAlt, faSearch, faChevronLeft, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'; // Import the arrow icon
import Image from 'next/image';
import PlumLogo from '../images/plum_logo.png';
import '../globals.css';
import CurrentDateTime from './datetime';
import TopicMenu from './TopicMenu';
import { Topic, Tag } from '../types';
import DeleteTopicModal from './deleteTopicModal';


interface SideMenuProps {
  userId: any;
  menu: boolean;
  page: string;
  topic: any;
  contentFilter: string;
  onContentFilterChange: (filter: string) => void;
}

export default function SideMenu({ menu, userId, page, topic, contentFilter, onContentFilterChange }: SideMenuProps) {

  const [menuFull, setMenuFull] = useState(menu);
  const [searchHover, setSearchHover] = useState(false);
  const [dashboardHover, setDashboardHover] = useState(false);
  const [topicsHover, setTopicsHover] = useState(false);
  const [settingsHover, setSettingsHover] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [tags, setTags] = useState<Tag[]>([]);
  const [tagInput, setTagInput] = useState(''); // State to store tag input value
  const [addTag, setAddTag] = useState(false);

  const fetchTags = async () => {
    try {
      if (topic) {
        const response = await fetch(`/api/tags?topicId=${topic.id}&userId=${topic.userId}`);
        const data = await response.json();

        setTags(data);
      } 
    } catch (error) {
      console.error('Error fetching tags:', error);
    }
  };
  
  const handleAddTag = async () => {
    if (tagInput.trim() !== '') {
  

      try {
        // Make a POST request to your API endpoint
        const response = await fetch('/api/tags', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            userId,
            topicId: topic.id,
            tagName: tagInput.trim(),
          }),
        });
  
        if (response.ok) {
          // Tag created successfully
          const newTag = await response.json();
          
        
        } else {
          // Handle error response
          console.error('Error creating tag:', response.statusText);
        }
      } catch (error) {
        console.error('Error creating tag:', error);
      }
      setTagInput('');
    }
    setAddTag(false);
    fetchTags();
  };


  useEffect(() => {
    fetchTags();
  });
  

  // Function to handle removing tags
  const handleDeleteTag = async (tagId: number) => {
    try {
      
      const response = await fetch('/api/tags', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          topicId: topic.id,
          tagId: tagId,
        }),
      });
  
      if (response.ok) {

        const deletedTag = await response.json();


      } else {

        console.error('Error deleting tag:', response.statusText);
      }
    } catch (error) {
      console.error('Error deleting tag:', error);
    }
    fetchTags();
  };
  



  const handleOptionChange = (option: string) => {
    onContentFilterChange(option);
  };
 

  return (
    <>
    {menuOpen? <DeleteTopicModal isOpen={menuOpen} topic={topic} onClose={() => setMenuOpen(false)}/> : <></>}
   
    <div className="fixed flex h-screen">
      
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
          <li className={`my-4 hover:text-buttonColor ${menuFull ? "ml-10" : "ml-0"}`}>
            <a href="/api/auth/logout" className={`flex items-center ${menuFull ? "pl-5" : "pl-0"} `}>
              <>
                <FontAwesomeIcon icon={faSignOutAlt} className={`text-xl ${menuFull ? "mr-2" : "mr-0"}`} onMouseEnter={() => setSettingsHover(true)}
                onMouseLeave={() => setSettingsHover(false)}/>
                {menuFull && <p className='text-md'>Logout</p>}
                {!menuFull && settingsHover ? 
                 <div className='absolute left-20 flex justify-center'>
                  <div className='bg-buttonColor p-2 m-1 text-white rounded'>Logout</div>
                  </div>: null}
              </>
            </a>
          </li>
        </ul>

      </div>
      
      {page === 'topic' && !menuFull &&
        <div className="h-screen w-44 fixed left-28   flex flex-col items-center justify-between">
          <div>
          <h2 className="pt-10 text-2xl font-semibold text-darkPlum mb-4 w-40 whitespace-pre-wrap break-all">{topic?.name}</h2>

          <div className='absolute top-20 flex flex-wrap'>
          {tags?.map((tag) => (
                <div key = {tag.id} className="flex rounded-full bg-buttonColor bg-opacity-10  border-buttonColor border  m-1 p-1">
           
                <p className="text-sm text-darkPlum opacity-100  max-w-40 whitespace-wrap ">{tag.name}</p>


                <button onClick={() => handleDeleteTag(tag.id)} className="ml-1 text-sm text-red-600" >
                  X
                </button>
              </div>
              ))}
        
           {!addTag ?    
          <button onClick={() => setAddTag(true)}  className="flex rounded-full bg-gray bg-opacity-40 border-buttonColor border m-1 p-1 hover:bg-opacity-100">
            <p className="text-sm text-darkPlum opacity-100">Add tag</p>
            <div className="ml-1 text-sm text-red-600" >
              +
            </div>
          </button> :
            <div  className="flex rounded-full bg-gray bg-opacity-40 border-buttonColor border m-1 p-1 hover:bg-opacity-100">
            <input autoFocus onKeyDown={(e) => e.key === 'Enter' ? handleAddTag() : null} type ="text"  value = {tagInput} onChange={(e) => setTagInput(e.target.value)}  className="text-sm w-16 text-darkPlum opacity-100"/>
            <button onClick={() => setAddTag(false)} className="ml-1 text-sm text-red-600" >
              X
            </button>
          </div> 
          }   
          </div>  
            <ul className="absolute top-40 flex flex-col text-lg py-10 text-darkPlum">
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
