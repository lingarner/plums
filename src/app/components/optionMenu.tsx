import React, { useState } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import AddTopicModal from './addTopicModal';

export default function OptionMenu({ menuType }: { menuType: string }) {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <div className="fixed bottom-28 right-1/4  sm:bottom-20 sm:right-3 rounded-lg border-2 shadow-md w-60 shadow-purple-500/25">
        {menuType === 'home' && (
          <div className="bg-white rounded-lg">
            <ul className="p-2">
              <li>
              
                <button onClick={openModal} className="flex items-center space-x-2 py-2 px-4 sm:px-1 hover:bg-gray-100 rounded-md text-darkPlum font-medium">
                  <FontAwesomeIcon icon={faPlus} />
                  <span className="whitespace-nowrap text-2xl sm:text-sm">Add New Topic</span>
                </button>
              </li>
            </ul>
          </div>
        )}
        {menuType === 'topic' && (
          <div className="bg-white rounded-lg">
            <ul className="p-2">
              <li>
                <Link href="">
                  <p className="flex items-center space-x-2 py-2 px-4 hover:bg-gray-100 rounded-md">
                    <FontAwesomeIcon icon={faPlus} />
                    <span className="whitespace-nowrap text-lg w-[120px]">Upload File</span>
                  </p>
                </Link>
              </li>
              <li>
                <Link href="">
                  <p className="flex items-center space-x-2 py-2 px-4 hover:bg-gray-100 rounded-md">
                    <FontAwesomeIcon icon={faPlus} />
                    <span className="whitespace-nowrap w-[120px]">Add To Notebook</span>
                  </p>
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>

     
      <AddTopicModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
}
