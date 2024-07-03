import React from 'react';
import Image from 'next/image';
const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
                <Image src="https://www.wallpaperflare.com/static/795/510/447/nature-landscape-hdr-field-wallpaper.jpg" alt="Cloudy background weather image" layout='fill' className='object-cover' />
                <p className="text-white absolute top-64 text-2xl">Loading...</p>
      <div className="loader  ease-linear rounded-full  border-4 border-t-4 border-gray-200 h-12 w-12 "></div>
     
    </div>
  );
};

export default Loading;
