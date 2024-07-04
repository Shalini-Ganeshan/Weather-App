// DefaultWeathers.js

import React,{useState} from 'react';
import Image from 'next/image';

const DefaultWeathers = ({ data, image }) => {
    const [hovered, setHovered] = useState(false);

  return (
    <div className='relative flex flex-col justify-between max-w-[400px] w-full h-[30vh] m-auto p-4  text-grey-300 z-10'>
      <div className='relative flex justify-between pt-8'>
      
        <p className='text-4xl text-black mt-3'>{data.main.temp.toFixed(0)}&#176;</p>
        <div className='flex flex-col justify-between '>
          <Image
            src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
            alt="/"
            width='100'
            height='100'
          />
        
        </div>
      </div>
      <div className='bg-black/75 mb-[40px] relative p-8 rounded-lg mt-10 '>
      <div className='flex flex-col '>
      <p className='text-xl text-center pb-6  mt-4 text-yellow-400'> {data.name}, {data.sys.country}</p>
      <p className='text-xl text-center mb-2 text-gray-300'>{data.weather[0].main}</p>
      </div>
     
      <div className='flex gap-4'>
      
        
        </div>
        <div className='flex justify-between text-center '>
          <div>
            <p className='font-bold text-xl text-white'>{data.main.feels_like.toFixed(0)}&#176;</p>
            <div className="flex-col text-sm text-white m-2 p-0"><p>Feels</p><p> Like</p></div>
          </div>
          <div>
            <p className='font-bold text-xl text-white'>{data.main.humidity}%</p>
            <p className='text-sm text-white m-2'>Humidity</p>
          </div>
          <div>
            <p className='font-bold text-xl text-white'>{data.wind.speed.toFixed(0)}MPH</p>
            <p className='text-sm text-white m-2'>Winds</p>
          </div>
        </div>
      </div>
      <div className='absolute bottom-0 left-1/2 transform -translate-x-1/2'>
        <Image
          src={image}
          alt={`${data.name} Image`}
          width='150'
          height='150'
          className={`rounded-full transition-transform duration-300 ${hovered ? 'scale-150' : ''}`}
          onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        />
      </div>
    </div>
  );
}

export default DefaultWeathers;
