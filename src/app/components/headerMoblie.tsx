import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import PlumLogo from '../images/plum_logo.png';
import { Tag } from '../types';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faBars, faTimes, faCog, faTachometerAlt, faList} from '@fortawesome/free-solid-svg-icons';
import { useParams } from 'next/navigation';


export default function HeaderMobile({ page }: { page: String }) {
  const [imageData, setImageData] = useState(''); {
  const params = useParams();
  
  const [menuOpen, setMenuOpen] = useState(false);
  const [tags, setTags] = useState<Tag[]>([]);
  const [tagInput, setTagInput] = useState(''); // State to store tag input value
  const [addTag, setAddTag] = useState(false);

  const fetchTags = async () => {

    try {
      if (params) {
        const response = await fetch(`/api/tags?topicId=${params.id}`);
        const data = await response.json();

        setTags(data);
      } else {
        console.error('Error fetching tags: Topic is undefined');
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
            topicId: params.id,
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
  };


  useEffect(() => {
    fetchTags();
  }, [tags]);
  

  // Function to handle removing tags
  const handleDeleteTag = async (tagId: number) => {
    try {
      
      const response = await fetch('/api/tags', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          topicId: params.id,
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
  };
  




  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
    <header className="m-auto">
          <div className="flex w-full px-4 items-center bg-sideMenu bg-opacity-20 justify-between">
            <div className='flex items-center '>
              <Image src={PlumLogo} alt="Plum Logo" className="w-[20%] inline" />
              <h1 className="flex-none text-2xl font-bold text-darkPlum">Plum Learning</h1>
          </div>
          <div className={`menu-toggle cursor-pointer ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
            <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} className="text-3xl" />
          </div>
          </div>
          <div className=" text-darkPlum">
          
        </div>
          <div className="flex items-center my-4 hover:text-buttonColor ml-5 w-[90%] h-10 bg-white p-[0.75px] rounded-[10px]">
            <Link href="/" className="flex justify-start items-center">
              <>
                <FontAwesomeIcon icon={faSearch} className="text-xl pl-[4px]" />
                <input placeholder='Search' className=' text-md bg-transparent outline-none focus:border-darkPlum m-w-[10%] ml-3 mr-3'/>
              </>
            </Link>
          </div>
          {page === 'topic' && 
          <div className="flex flex-row">
          {tags?.map((tag) => (
                <div key = {tag.id} className="flex rounded-full bg-buttonColor bg-opacity-10  border-buttonColor border  m-1 p-1">
           
                <p className="text-sm text-darkPlum opacity-100">{tag.name}</p>
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

        }
       

        </header>



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
            <div className="flex items-center ">
              <>
                <FontAwesomeIcon icon={faCog} className="text-xl mr-2" />
                <p className='text-md'>Settings</p>
              </>
            </div>
          </li>
        </ul>
        </div>
      </div>
    </>
  );
        }}