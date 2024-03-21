import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { Attachment } from '../types';

export default function DeleteAttachmentModal({ isOpen, attachment, onClose }: { isOpen: boolean; attachment: Attachment; onClose: () => void }) {
  const [description, setDescription] = useState('');
  
  const DeleteAttachment = async () => {
    try {
      const response = await fetch(`/api/attachments`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: attachment.id,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to delete attachment');
      }
      onClose();
      window.location.href = `/topic/${attachment.topicId}`;

    } catch (error) {
      console.error('Error deleting attachment:', error);
    }
    
  };
  
  if (!isOpen) return null;

  return (
    <>
      <div className="z-40 fixed inset-0 bg-gray-500 bg-opacity-50 " onClick={onClose}></div>

      <div className="z-50 fixed left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3/4 sm:w-1/2 bg-white rounded-lg p-8">
        <button onClick={onClose} className="absolute top-2 right-2">
          <FontAwesomeIcon icon={faTimes} className="text-gray-500" />
        </button>

        <h2 className="text-2xl font-bold mb-4">Are you sure you want to delete &quot;{attachment.name}&quot;</h2>
      
        <button onClick={DeleteAttachment} className="bg-buttonColor text-white px-4 py-2 rounded hover:bg-gray-400">Delete</button>
        <button onClick={onClose} className="border-buttonColor border-[1px] mx-2 text-darkPlum px-4 py-2 rounded hover:bg-gray-400">Cancel</button>
      </div>
    </>
  );
}
