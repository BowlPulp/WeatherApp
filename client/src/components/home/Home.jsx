import React, { useState } from 'react';
import axios from 'axios';

const Home = () => {
  const [city, setCity] = useState('');
  const [cities, setCities] = useState([]);
  const [weatherData, setWeatherData] = useState({});
  const [error, setError] = useState('');

  const API_KEY = '83765065215522484de5527792410b39'; // API Key

  const fetchWeatherData = async (cityName) => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`
      );
      const data = response.data;
      setWeatherData((prevState) => ({
        ...prevState,
        [cityName]: data, // Store weather data by city name
      }));
      setError('');
    } catch (err) {
      setError('City not found. Please try again.');
      
    }
  };

  // Handle adding a city
  const handleAddCity = () => {
    if (!city) {
      setError('Please enter a city name');
      return;
    }
    if (cities.includes(city)) {
      setError('City already added');
      return;
    }
    setCities([...cities, city]);
    fetchWeatherData(city);
    setCity(''); // Clear input after adding
  };

  return (
    <div className="bg-gradient-to-t from-blue-700 w-full h-screen p-4">
      <div className="text-center text-[#2e70d2] text-6xl p-4">
        Your Weather Guide for the Next 7 Days
      </div>

      <div className="text-center p-4 flex justify-center">
        <input
          type="text"
          placeholder="Enter City Name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="p-2 border rounded"
        />
        <button
          onClick={handleAddCity}
          className="ml-4 p-2 bg-blue-500 text-white rounded"
        >
          Add City
        </button>
      </div>

      {error && <p className="text-red-500 text-center">{error}</p>}

      <div className="text-center mt-6">
        {cities.map((cityName) => (
          <div key={cityName} className="mt-4">
            <h2 className="text-2xl">Weather in {cityName}</h2>
            {weatherData[cityName] ? (
              <>
                <p>Temperature: {weatherData[cityName].main.temp} °C</p>
                <p>Weather: {weatherData[cityName].weather[0].description}</p>
                <p>Humidity: {weatherData[cityName].main.humidity}%</p>
                <p>Wind Speed: {weatherData[cityName].wind.speed} m/s</p>
              </>
            ) : (
              <p>Loading...</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;




