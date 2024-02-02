import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList, faCog, faPlus } from '@fortawesome/free-solid-svg-icons';


export default function BottomMenu() {
  return (
    <div className="fixed bottom-0 left-0 w-full flex justify-center items-center">
      <div className="bg-white text-#8C559E text-center w-11/12 h-20 rounded-2xl m-5 flex justify-center items-center">
        <ul className="flex justify-center space-x-4">
          <li>
            <Link className="hover:text-gray-300 p-16" href="/">
            <FontAwesomeIcon icon={faList} className="text-darkPlum text-3xl fill-current" />
            </Link>
          </li>
          <li className="relative">
            <button className="absolute bottom-1/2 shadow-lg shadow-purple-500/50 left-1/2 transform -translate-x-1/2 bg-buttonColor text-yellow-500 h-14 w-14 rounded-xl">
              <FontAwesomeIcon className = "text-2xl"icon={faPlus} />
            </button>
          </li>
          <li>
            <Link className="hover:text-gray-300 p-16" href="/">
                <FontAwesomeIcon icon={faCog}  className="text-darkPlum text-3xl"  />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
