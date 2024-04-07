import React, {useState} from 'react';
import Link from 'next/link';
import OptionMenu from './optionMenu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList, faCog, faPlus } from '@fortawesome/free-solid-svg-icons';


export default function AddButton({onAdd, page}: {onAdd: (id:number, name:string, content:any, type:string) => void, page: string}) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <>
    {menuOpen? <OptionMenu onAdd={onAdd} menuType={page}/> : <></>}
    <div className='fixed  bottom-10 right-1 transform -translate-x-1/2'>
    <button onClick = {toggleMenu} className=" shadow-lg sm:shadow-lg shadow-purple-500/50  bg-buttonColor text-yellow-500 h-14 w-14 rounded-xl">
        <FontAwesomeIcon className = "text-2xl" icon={faPlus} />
     </button>  
     </div>
     </>

  );
};
