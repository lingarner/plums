import React, { useState } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faUpload, faNoteSticky } from '@fortawesome/free-solid-svg-icons';
import AddTopicModal from './addTopicModal';
import AddAttachmentModal from './addAttachmentModal';

export default function OptionMenu({ menuType }: { menuType: string }) {
  const [addTopicOpen, setAddTopicOpen] = useState(false);
  const [addAttachmentOpen, setAddAttachmentOpen] = useState(false);

  const openTopic = () => {
    setAddTopicOpen(true);
  };

  const closeTopic = () => {
    setAddTopicOpen(false);
  };

  return (
    <>
      <div className="fixed bottom-28 right-3 rounded-lg border-2 shadow-md w-60 shadow-purple-500/25">
        {menuType === 'home' && (
          <div className="bg-white rounded-lg">
            <ul className="p-2">
              <li>
              
                <button onClick={openTopic} className="flex items-center space-x-2 py-2 px-4 sm:px-1 hover:bg-gray-100 rounded-md text-darkPlum font-medium">
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
                <button onClick={() => setAddAttachmentOpen(true)}>
                  <p className="flex items-center space-x-2 py-2 px-4 hover:bg-gray-100 rounded-md">
                    <FontAwesomeIcon icon={faUpload} />
                    <span className="whitespace-nowrap text-lg w-[120px]">Upload Attachment</span>
                  </p>
                </button>
              </li>
              <li>
                <Link href="">
                  <p className="flex items-center space-x-2 py-2 px-4 hover:bg-gray-100 rounded-md">
                    <FontAwesomeIcon icon={faNoteSticky} />
                    <span className="whitespace-nowrap text-lg w-[120px]">Add To Notebook</span>
                  </p>
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>

     
      <AddTopicModal isOpen={addTopicOpen} onClose={closeTopic} />
      <AddAttachmentModal isOpen={addAttachmentOpen} onClose={() => setAddAttachmentOpen(false)} />
    </>
  );
}
