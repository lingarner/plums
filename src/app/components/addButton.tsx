import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList, faCog, faPlus } from '@fortawesome/free-solid-svg-icons';


export default function AddButton() {
  return (
    <button className="shadow-md shadow-purple-500/50  bg-buttonColor text-yellow-500 h-14 w-14 rounded-xl">
        <FontAwesomeIcon className = "text-2xl"icon={faPlus} />
     </button>
  );
};
