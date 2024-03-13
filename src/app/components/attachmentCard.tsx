import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbTack } from '@fortawesome/free-solid-svg-icons';
import { Attachment } from '../types';
import Image from 'next/image'

import defaultImage from '../images/default-placeholder.png'

export default function AttachmentCard({ attachment }: { attachment: Attachment }) {
  const [imageData, setImageData] = useState('');
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    if (attachment.attachmentData && attachment.attachmentData.type === 'Buffer') {
      const base64String = Buffer.from(attachment.attachmentData).toString('base64');
      setImageData(base64String);
    } else {
      console.error('Invalid attachment data format:', attachment.attachmentData);
    }
  }, [attachment.attachmentData]);

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <div className="topic-card relative align-middle bg-white shadow-lg sm:shadow-md items-center  shadow-purple-500/10 sm:w-40 h-40 rounded-xl overflow-hidden m-3">
      <FontAwesomeIcon
        icon={faThumbTack}
        className={`${attachment.pinned ? 'text-buttonColor' : 'text-gray-400'} absolute top-1 left-1  bg-white rounded-tr-full`}
        onClick={() => (attachment.pinned = !attachment.pinned)} // This might not be the best way to update state
      />

      <div className="flex flex-col justify-center items-center pt-3 z-1 absolute top-0 left-4 sm:left-0 right-0 bottom-0">
        <h3 className="p-2 text-lg font-semibold pt-7  sm:pt-2 sm:text-sm">{attachment.name}</h3>
        {imageData && !imageError && (
          <Image className='pb-3' src={`data:image/png;base64,${imageData}`} width={150} height={150} alt="Base64 Image" onError={handleImageError} />
        )}
        {(imageError || !imageData)  && (
          <Image className='pb-3' src={defaultImage} alt="Default Image"  width={90} height={50} />
        )}
      </div>
    </div>
  );
}
