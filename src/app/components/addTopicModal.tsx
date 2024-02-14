import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

export default function AddTopicModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [topic, setTopic] = useState('');
  const [description, setDescription] = useState('');
  if (!isOpen) return null;
  

  return (
    <>
     
      <div className="fixed inset-0 bg-gray-500 bg-opacity-50 z-50" onClick={onClose}></div>


      <div className="fixed left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3/4  sm:w-1/2 bg-white rounded-lg p-8 z-50">

        <button onClick={onClose} className="absolute top-2 right-2">
          <FontAwesomeIcon icon={faTimes} className="text-gray-500" />
        </button>

        <h2 className="text-2xl font-bold mb-4">Add New Topic</h2>
        <h3 className='text-lg font-semibold'>Topic Name:</h3>
        <input onChange={(e) => setTopic(e.target.value)} title="Topic Name" type="text" className="w-full mb-4 p-2 border border-gray-300 rounded" />
        <h3 className="text-lg font-semibold mb-2">Topic Description:</h3>
        <input onChange={(e) => setDescription(e.target.value)} title="Topic Description" type="text" className="w-full mb-4 p-2 border border-gray-300 rounded" />


        <button onClick={onClose} className="bg-buttonColor  text-white px-4 py-2 rounded hover:bg-gray-400">Submit</button>
      </div>
    </>
  );
}
