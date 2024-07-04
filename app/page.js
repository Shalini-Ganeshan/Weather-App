"use client"
import axios from 'axios';
import Head from 'next/head';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { BsSearch } from 'react-icons/bs';
import DefaultWeathers from './components/DefaultWeathers';
import WeatherResult from './components/WeatherResult';
import Loading from './components/Loading'
import mumbai from './assets/mumbai.jpg';
import kolkata from './assets/kolkata.jpg';
import delhi from './assets/delhi.jpg';
import chennai from './assets/chennai.png';
import banglore from './assets/banglore.jpeg';

function Home() {
  const [city, setCity] = useState('');
  const [result, setResult] = useState(false);
  const [weather, setWeather] = useState({});
  const [loading, setLoading] = useState(false);
  const[myweather,setMyweather]-useState(false);
  const [currentWeather, setCurrentWeather] = useState(null); 
  const apiKey = process.env.NEXT_PUBLIC_OPENWEATHERMAP_API_KEY;
  const cityImages = {
    'New Delhi': delhi,
    'Mumbai': mumbai,
    'Bangalore': banglore,
    'Kolkata': kolkata,
    'Chennai': chennai,
  };

  useEffect(() => {
    // Fetch default weather for initial cities
    fetchWeatherByCity('New Delhi');
    fetchWeatherByCity('Mumbai');
    fetchWeatherByCity('Bangalore');
    fetchWeatherByCity('Kolkata');
    fetchWeatherByCity('Chennai');
  }, []);

 

  const fetchWeatherByCity = (cityName) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=imperial&appid=${apiKey}`;

    axios.get(url)
      .then((response) => {
        setWeather(prevState => ({
          ...prevState,
          [cityName]: response.data
        }));
      })
      .catch((error) => {
        console.error(`Error fetching weather data for ${cityName}:`, error);
      });
  };

  const fetchWeather = (e) => {
    e.preventDefault();
    setResult(true);
    setLoading(true);

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`;

    axios.get(url)
      .then((response) => {
        setWeather({ [city]: response.data }); // Update state with {[city]: data}
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching weather data:', error);
        setLoading(false);
      });
  };

  const getCurrentWeather = () => {
    setResult(true);
    setLoading(true);
    setMyweather(true);
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${apiKey}`;

      axios.get(url)
        .then((response) => {
          setCurrentWeather(response.data); // Update state with current weather data
          setLoading(false);
        })
        .catch((error) => {
          console.error('Error fetching current weather data:', error);
          setLoading(false);
        });
    });
  };

  if (loading) {
    return <Loading />;
  } else {
    return (
      <div>
        <Head>
          <title>WeatherMan</title>
          <meta name='description' content='This app was made using Next JS' />
          <link rel='icon' href='/favicon.ico' />
        </Head>
        <div className=' top-0 left-0 right-0 bottom-0 bg-black/30 z-[1]' />
        <Image src="https://www.wallpaperflare.com/static/795/510/447/nature-landscape-hdr-field-wallpaper.jpg" alt="Cloudy background weather image" layout='fill' className='object-cover' />
        <div className='relative flex justify-between gap-10 item-center max-w-[500px] w-full m-auto text-white z-10'>
          <form className='flex mt-4 justify-between items-center w-full m-auto p-3 bg-transparent border border-gray-300 text-white rounded-2xl' onSubmit={fetchWeather}>
            <input className='bg-transparent border-none text-white focus:outline-none text-xl placeholder:text-gray-300' type="text" placeholder='Search City' value={city} onChange={(e) => setCity(e.target.value)} />
            <button type="submit"><BsSearch size={20} /></button>
          </form>
          <button onClick={getCurrentWeather} className="bg-blue-600 text-white text-sm hover:bg-blue-700 px-2 border border-blue-700 shadow-2xl py-2 rounded-lg mt-4">Get My Current Weather</button>
        </div>

        <div className="flex justify-between items-center w-full max-h-800 ">
          {Object.keys(weather).map(cityName => (
            <div key={cityName}>
              {!result && <DefaultWeathers data={weather[cityName]} image={cityImages[cityName]} />}
            </div>
          ))}
        </div>

        { currentWeather && myweather && <WeatherResult data={currentWeather} />}
        {result && weather[city] && <WeatherResult data={weather[city]} />}
      </div>
    );
  }
}

export default Home;
