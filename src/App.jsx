import React, { useState } from "react";
import WeatherForm from "./components/WeatherForm";
import WeatherForecast from "./components/WeatherForecast";
import WeatherCurrent from "./components/WeatherCurrent";
import Loading from "./components/Loading";
import "./App.css";

const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

const App = () => {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchWeatherData = async (city) => {
    setLoading(true);
    setCurrentWeather(null);
    setForecast(null);

    try {
      // Current weather
      const currentRes = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      if (!currentRes.ok) throw new Error("City not found");
      const currentData = await currentRes.json();
      setCurrentWeather(currentData);

      // 5-day forecast
      const forecastRes = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`
      );
      if (!forecastRes.ok) throw new Error("Forecast not available");
      const forecastData = await forecastRes.json();
      setForecast(forecastData);
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app-container">
      <h1>Weather App 🌤️</h1>
      <WeatherForm onSearch={fetchWeatherData} />
      {loading && <Loading />}
      {currentWeather && <WeatherCurrent data={currentWeather} />}
      {forecast && <WeatherForecast forecast={forecast} />}
    </div>
  );
};

export default App;
