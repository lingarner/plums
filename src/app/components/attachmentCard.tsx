import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileLines, faThumbTack } from '@fortawesome/free-solid-svg-icons';
import {Attachment, LinkAttachment} from '../types';

export default function AttachmentCard({attachment}: {attachment: Attachment}) {
  return (
  
    <div className='topic-card relative bg-white shadow-lg sm:shadow-md shadow-purple-500/10 sm:w-40  h-32 sm:h-40 rounded-xl overflow-hidden m-3'>
      <FontAwesomeIcon icon={faThumbTack} className={`${attachment.pinned ? 'text-buttonColor' : 'text-gray-400'} absolute top-1 left-1  bg-white rounded-tr-full`} onClick={() => attachment.pinned = !attachment.pinned}/>

      <div className='flex sm:flex-col pt-5 pl-5 z-1 absolute top-0 left-4 sm:left-0 right-0 bottom-0'>
    
      
        <h3 className='p-2 text-lg font-semibold pt-5 pl-3 sm:pl-2 sm:pt-2 sm:text-md'>{attachment.name}</h3>
      </div>
    </div>

  );
}