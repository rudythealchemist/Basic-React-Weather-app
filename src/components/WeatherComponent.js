import { FaTemperatureHigh } from 'react-icons/fa';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CityInput from './CityInput';

const WeatherComponent = () => {
  const API_KEY = 'd66afa513fae5be604bb17bc74d128e9'; // Store the API key in a constant

  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState('San Francisco');

  const fetchWeather = async () => {
    try {
      const response = await axios.get(
        'https://api.openweathermap.org/data/2.5/weather', {
        params: {
          q: city,
          appid: API_KEY // Use the API key constant here
        }
      });

      setWeatherData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchWeather();
  }, [city]);

  const handleCityChange = (newCity) => {
    setCity(newCity);
  };

  if (!weatherData) {
    return <div>Loading...</div>;
  }
  // get the weather data from state
  const {
    name,
    main: { temp },
  } = weatherData;

  return (
    <div>
      <div>
        <CityInput onCityChange={handleCityChange} />
      </div>
      <div className="flex justify-center items-center">
        <h2 style={{ margin: '5px' }}>{name}</h2>
        <FaTemperatureHigh /> <span style={{ margin: '5px' }}>{temp}°C</span>
      </div>
    </div>
  );
};

export default WeatherComponent;