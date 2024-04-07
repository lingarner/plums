
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { useParams } from 'next/navigation'

export default function AddNoteModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const params = useParams();
  const [title, setTitle] = useState('');

  if (!isOpen) return null;
  
  const handleUpload = async () => {
    if (title && params.id) {
      try {
        const formData = new FormData();; 
        formData.append('title', title);
        formData.append('topicId', params.id.toString());

        
        const response = await fetch('/api/notebookEntries', {
          method: 'POST',
          body: formData,
        });
  
        if (!response.ok) {
          throw new Error('Failed to upload Note');
        }

        onClose();
      } catch (error) {
        console.error('Error uploading note:', error);
      }
    }
  };

  return (
    <>
      <div className="fixed inset-0 bg-gray-500 bg-opacity-50 z-50" onClick={onClose}></div>
      <div className="fixed left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3/4 sm:w-1/2 bg-white rounded-lg p-8 z-50">
        <button onClick={onClose} className="absolute top-2 right-2">
          <FontAwesomeIcon icon={faTimes} className="text-gray-500" />
        </button>
        <h2 className="text-2xl font-bold mb-4">Add Note</h2>
        <h3 className='text-lg font-semibold'>Title:</h3>
        <input type ="text" className="w-full mb-4 p-2 border border-gray-300 rounded"  value={title} onChange={(e) => setTitle(e.target.value)}/>
  
        
        <button onClick={handleUpload} className="bg-buttonColor text-white px-4 py-2 rounded hover:bg-gray-400">
          Upload
        </button>
        
      </div>
    </>
  );
}
