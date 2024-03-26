
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { useParams } from 'next/navigation'

export default function AddAttachmentModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const params = useParams();
  const [link, setLink] = useState('');
  const [comments, setComments] = useState('');
  const [name, setName] = useState('');

  if (!isOpen) return null;
  
  const handleUpload = async () => {
    if (name && link && params.id) {
      try {
        const formData = new FormData();
        formData.append('name', name);
        formData.append('url', link); 
        formData.append('comments', comments); 
        formData.append('topicId', params.id.toString());

        
        const response = await fetch('/api/urls', {
          method: 'POST',
          body: formData,
        });
  
        if (!response.ok) {
          throw new Error('Failed to upload file');
        }

        onClose();
      } catch (error) {
        console.error('Error uploading file:', error);
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
        <h2 className="text-2xl font-bold mb-4">Add Link</h2>
        <h3 className='text-lg font-semibold'>Name:</h3>
        <input type ="text" className="w-full mb-4 p-2 border border-gray-300 rounded"  value={name} onChange={(e) => setName(e.target.value)}/>
        <h3 className='text-lg font-semibold'>Link:</h3>
        <input
          type="url"
          value={link}
          onChange={(e) => setLink(e.target.value)}
          placeholder='https://example.com'
          className="w-full mb-4 p-2 border border-gray-300 rounded"
        />
        <h3 className='text-lg font-semibold'>Comments:</h3>
        <textarea  value={comments} onChange={(e) => setComments(e.target.value)} className="w-full mb-4 p-2 border border-gray-300 rounded" />
        
        <button onClick={handleUpload} className="bg-buttonColor text-white px-4 py-2 rounded hover:bg-gray-400">
          Upload
        </button>
        
      </div>
    </>
  );
}
