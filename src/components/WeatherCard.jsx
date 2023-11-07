import React from 'react';

const WeatherCard = ({ data }) => {
  const { name, sys, main, weather } = data;

  return (
    <div className="weather-card">
      <h2>{name}, {sys.country}</h2>
      <p>Temperatura: {main.temp}°C</p>
      <p>Humedad: {main.humidity}%</p>
      <p>Clima: {weather[0].description}</p>
    </div>
  );
};

export default WeatherCard;
