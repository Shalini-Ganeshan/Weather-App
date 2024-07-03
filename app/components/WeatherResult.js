import React, { useState } from 'react';
import Image from 'next/image';

const WeatherResult = ({ data }) => {
    
  
  return (
    <div className='flex   absolute w-full justify-center items-center '>
  <div className='bg-black bg-opacity-75   mt-32 text-white p-8 rounded-lg shadow-lg w-96'>
        <div className='flex items-center justify-between '>
          <div className='flex flex-col gap-3'>
            <p className='text-6xl'>{data.main.temp.toFixed(0)}&#176;</p>
            <p className='text-lg ml-4 mt-2'>{data.weather[0].main}</p>
          </div>
          
          <div className='relative w-40 h-40'>
            <Image
              src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
              alt="/"
              layout='fill'
              objectFit='contain'
            />
          </div>

        
     
        </div>
        <div >
          <p className='text-xl text-center mb-8 text-yellow-400'>{data.name}, {data.sys.country}</p>
          <div className='flex justify-between mt-2'>
            <div>
              <p className='font-bold'>{data.main.feels_like.toFixed(0)}&#176;</p>
              <p>Feels Like</p>
            </div>
            <div>
              <p className='font-bold'>{data.main.humidity}%</p>
              <p>Humidity</p>
            </div>
            <div>
              <p className='font-bold'>{data.wind.speed.toFixed(0)} MPH</p>
              <p>Wind</p>
            </div>
          </div>
        </div>
      
      </div>
    </div>
  );
}

export default WeatherResult;

