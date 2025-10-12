import React from "react";

const WeatherCurrent = ({ data }) => {
  if (!data) return null;

  return (
    <div className="weather-box">
      <h2>{data.name}</h2>
      <p>Temperature: {data.main.temp}°C</p>
      <p>Condition: {data.weather[0].description}</p>
      <p>Humidity: {data.main.humidity}%</p>
    </div>
  );
};

export default WeatherCurrent;
