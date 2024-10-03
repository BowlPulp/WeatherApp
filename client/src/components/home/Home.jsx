import React, { useState } from 'react';
import axios from 'axios';

const Home = () => {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState('');

  const getdata = async () => {
    if (!city) {
      setError('Please enter a city name');
      return;
    }
    setError(''); // clear any previous error message
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=83765065215522484de5527792410b39&units=metric`
      );
      setWeather(response.data);
    } catch (err) {
      setError('City not found. Please try again.');
      setWeather(null);
    }
  };

  return (
    <>
      <div className="bg-gradient-to-t from-blue-700 w-full h-screen p-4">
        <div className="text-center text-[#2e70d2] text-6xl p-4">
          Your Weather Guide for the Next 7 Days
        </div>
        <div className="text-center p-4 flex justify-center">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              getdata();
            }}
          >
            <input
              type="text"
              placeholder="Enter City Name"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="p-2 border rounded"
            />
            <button
              type="submit"
              className="ml-4 p-2 bg-blue-500 text-white rounded"
            >
              Get Weather
            </button>
          </form>
        </div>
        {error && <p className="text-red-500 text-center">{error}</p>}
        {weather && (
          <div className="text-center mt-6">
            <h2 className="text-2xl">Weather in {weather.name}</h2>
            <p>Temperature: {weather.main.temp} °C</p>
            <p>Weather: {weather.weather[0].description}</p>
            <p>Humidity: {weather.main.humidity}%</p>
            <p>Wind Speed: {weather.wind.speed} m/s</p>
          </div>
        )}
      </div>
    </>
  );
};

export default Home;
