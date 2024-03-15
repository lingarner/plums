import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useParams } from 'next/navigation'
import { faTimes } from '@fortawesome/free-solid-svg-icons';

export default function AddAttachmentModal({ isOpen, onClose, onAdd }: { isOpen: boolean; onClose: () => void; onAdd: (name:string, content:any, type:string) => void}) {
  const params = useParams();
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [comments, setComments] = useState<string>('');

  if (!isOpen) return null;

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const handleCommentsChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setComments(e.target.value);
  };

  const handleUpload = async () => {
    if (selectedFile && params.id) {
      try {
        const formData = new FormData();
        formData.append('name', selectedFile.name);
        formData.append('attachmentData', selectedFile); 
        formData.append('comments', comments); 
        formData.append('topicId', params.id);
        formData.append('type', selectedFile.type);
        
        const response = await fetch('/api/attachments', {
          method: 'POST',
          body: formData,
        });
  
        if (response.ok) {
          const buffer = Buffer.from(await selectedFile.arrayBuffer());
        
     
          onAdd(selectedFile.name, buffer, selectedFile.type);
          onClose();
        } else {
          console.error('Failed to upload file');
        }
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
        <h2 className="text-2xl font-bold mb-4">Add Attachment</h2>
        <h3 className='text-lg font-semibold'>Attachment:</h3>
        <input
          type="file"
          onChange={handleFileChange}
          className="w-full mb-4 p-2 border border-gray-300 rounded"
        />
        <h3 className='text-lg font-semibold'>Comments:</h3>
        <textarea onChange={handleCommentsChange} className="w-full mb-4 p-2 border border-gray-300 rounded" />
        
        <button onClick={handleUpload} className="bg-buttonColor text-white px-4 py-2 rounded hover:bg-gray-400">
          Upload
        </button>
        
      </div>
    </>
  );
}
