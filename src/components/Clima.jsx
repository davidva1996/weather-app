import React, { useState } from 'react';
import axios from 'axios';
import WeatherCard from './WeatherCard';

const Clima = () => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);
  const apiKey = '1a123e603155d1b3c037ce89d6a103f7';

  const fetchWeather = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
      );
      setWeatherData(response.data);
      setError(null);
    } catch (err) {
      setError('City not found');
      setWeatherData(null);
    }
  };

  return (
    <div className="weather-app">
      <input
        type="text"
        placeholder="Ciudad de colombia"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={fetchWeather}>Enviar busquedad</button>
      {error && <p className="error">{error}</p>}
      {weatherData && <WeatherCard data={weatherData} />}
    </div>
  );
};

export default Clima;