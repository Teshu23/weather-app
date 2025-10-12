import React from "react";

const WeatherForecast = ({ forecast }) => {
  if (!forecast) return null;

  // Take one forecast per day (every 8th item in 3-hour interval list)
  const dailyForecast = forecast.list.filter((item, index) => index % 8 === 0);

  return (
    <div>
      <h2>5-Day Forecast</h2>
      <div className="forecast-grid">
        {dailyForecast.map((item, index) => (
          <div key={index} className="forecast-card">
            <h3>{new Date(item.dt_txt).toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric" })}</h3>
            <p>{item.main.temp}°C</p>
            <p>{item.weather[0].main}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeatherForecast;
