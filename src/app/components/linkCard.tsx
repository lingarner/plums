import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbTack, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { Url } from '../types';
import defaultImage from '../images/default-placeholder.png';


export default function LinkCard({ link }: { link: Url }) {
  



  return (
    <div className="topic-card relative align-middle bg-white shadow-lg sm:shadow-md items-center  shadow-purple-500/10 sm:w-40 h-40 rounded-xl overflow-hidden m-3">


      <div className="flex flex-col  items-center pt-3 z-1 absolute top-0 left-4 sm:left-0 right-0 bottom-0">
        <h3 className="w-full overflow-wrap break-words p-2 text-md align-left font-semibold   sm:pt-2 ">{link.name}</h3>
        <a className="w-full text-buttonColor overflow-wrap break-words p-2 text-sm align-left font-semibold sm:pt-2 relative" href={link.url} target="_blank" style={{ maxWidth: '100%', display: 'inline-block', textDecoration: 'none', }}>
          {link.url}
          <FontAwesomeIcon icon={faExternalLinkAlt} className="ml-1 text-gray-500 text-xs absolute top-0 right-0" />
        </a>
      </div>
    </div>
  );
}
