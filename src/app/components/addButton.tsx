import React, {useState} from 'react';
import Link from 'next/link';
import OptionMenu from './optionMenu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList, faCog, faPlus } from '@fortawesome/free-solid-svg-icons';


export default function AddButton({page, styles}: {page: string, styles:string}) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <>
    {menuOpen? <OptionMenu menuType={page}/> : <></>}
    <div className={styles}>
    <button onClick = {toggleMenu} className=" shadow-lg sm:shadow-md shadow-purple-500/50  bg-buttonColor text-yellow-500 h-14 w-14 rounded-xl">
        <FontAwesomeIcon className = "text-2xl" icon={faPlus} />
     </button>  
     </div>
     </>

  );
};
