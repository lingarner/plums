import React from "react";

function ImageGallery() {
  return (
    <div className="flex overflow-hidden relative flex-col py-6 pr-20 pl-6 text-base leading-3 text-center whitespace-nowrap aspect-[0.99] max-w-[171px]">
      <div className="bg-gray-200 absolute inset-0"></div>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/3152eeaff7a94f0ffb5a1676cf6410d914d524b16507a2906a64f978646fd007?apiKey=972b909c88a047a3bdbd2a879eeb0409&"
        className="w-full aspect-square fill-indigo-500 fill-opacity-10"
        alt="Gallery Image"
      />
      <header className="relative mt-5 font-extrabold text-indigo-950">
        Personal
      </header>
      <div className="relative mt-2.5 font-semibold text-black text-opacity-60">
        30 Files
      </div>
      <div className="relative mt-1.5 text-xs font-medium leading-3 text-black text-opacity-40">
        Size: 56 MBs
      </div>
    </div>
  );
}

export default ImageGallery;