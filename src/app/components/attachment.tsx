import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileLines } from '@fortawesome/free-regular-svg-icons';

export default function Attachment() {
  return (
    <div>
      <div className=" bg-white text-black w-60 p-7 text-sm rounded-lg z-20 m-10 drop-shadow-[0_10px_10px_#d2c3de]">
        <div className='bg-[#f4eef6] h-10 w-10 flex items-center justify-center rounded-full'>
            <FontAwesomeIcon icon={faFileLines} className="size-5  text-[#8c559e]"/>   
        </div>
        <h3 className="font-bold mt-1.5">Personal</h3>
        <h4 className="text-[#666666]">30 Files</h4>
        <p className="text-[#999999] text-[9px]">Size: 56MB</p>
      </div>
    </div>
  );
}