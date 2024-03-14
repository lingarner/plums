import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbTack } from '@fortawesome/free-solid-svg-icons';
import { Attachment } from '../types';
import defaultImage from '../images/default-placeholder.png';

export default function AttachmentCard({ attachment }: { attachment: Attachment }) {
  const [imageData, setImageData] = useState('');
  const [imageError, setImageError] = useState(false);
  const [isPinned, setIsPinned] = useState(attachment.pinned);

  const togglePin = async () => {
    try {
      const response = await fetch(`/api/attachments`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: attachment.id,
          pinned: !isPinned,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to toggle pin status');
      }

      setIsPinned(!isPinned);
    } catch (error) {
      console.error('Error toggling pin status:', error);
    }
  };

  useEffect(() => {
    if (attachment.name === 'kitten.jpeg') {
      const base64String = Buffer.from(attachment.attachmentData).toString('base64');
      setImageData(base64String);
    }

    if (attachment.attachmentData && (Buffer.isBuffer(attachment.attachmentData) || attachment.attachmentData.type === 'Buffer')) {
      const base64String = Buffer.from(attachment.attachmentData).toString('base64');
      setImageData(base64String);
    }
  }, [attachment.attachmentData, attachment]);

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <div className="topic-card relative align-middle bg-white shadow-lg sm:shadow-md items-center  shadow-purple-500/10 sm:w-40 h-40 rounded-xl overflow-hidden m-3">
      <FontAwesomeIcon
        icon={faThumbTack}
        className={`${isPinned ? 'text-buttonColor' : 'text-gray-400'} absolute top-1 left-1 bg-white rounded-tr-full cursor-pointer z-20`}
        onClick={() => togglePin()}
      />

      <div className="flex flex-col  items-center pt-3 z-1 absolute top-0 left-4 sm:left-0 right-0 bottom-0">
        <h3 className="p-2 text-md align-left font-semibold   sm:pt-2 ">{attachment.name}</h3>
        {imageData && !imageError && (
          <img
            className="pb-3"
            src={`data:image/png;base64,${imageData}`}
            alt={attachment.name}
            onError={handleImageError}
            className = "object-cover w-full h-[80%]"
           
          />
        )}
        {(imageError || !imageData) && (
          <img
            className="pb-3"
            src={defaultImage}
            alt="Default Image"
            className = "object-cover w-full h-[80%]"
          />
        )}
      </div>
    </div>
  );
}
