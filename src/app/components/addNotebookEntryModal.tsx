import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import Notebook from '../components/editor';


export default function AddTopicModal({ isOpen, onClose, onAdd }: { isOpen: boolean; onClose: () => void ; onAdd: (topic:string, description:string, type:string) => void}) {
  const [topic, setTitle] = useState('');
  const [description, setContent] = useState('');
  
  const handleSubmit = async () => {
    try {
      const response = await fetch('/api/notebook', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: topic,
          description: description,
        }),
      });
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
  
      setTopic('');
      setDescription('');
      
  
      onAdd(topic, description, "");
      onClose();
    } catch (error) {
      console.error("Failed to add topic:", error);
    }
  };
  
  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 bg-gray-500 bg-opacity-50 z-50" onClick={onClose}></div>

      <div className="fixed left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3/4 sm:w-1/2 bg-white rounded-lg p-8 z-50">
        <button onClick={onClose} className="absolute top-2 right-2">
          <FontAwesomeIcon icon={faTimes} className="text-gray-500" />
        </button>

        <h2 className="text-2xl font-bold mb-4">Add New Note</h2>
        <h3 className='text-lg font-semibold'>Note Title:</h3>
        <input value={title} onChange={(e) => setDescription(e.target.value)} title="Note Title" type="text" className="w-full mb-4 p-2 border border-gray-300 rounded" />

        <Notebook/>
      
        

        <button onClick={handleSubmit} className="bg-buttonColor text-white px-4 py-2 rounded hover:bg-gray-400">Submit</button>
      </div>
    </>
  );
}
