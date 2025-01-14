import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

function Weather() {
  const [weatherData, setWeatherData] = useState({ready: false});
  
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
        ready: true,
        temperature: response.data.temperature.current,
        currentDayTime: response.data.time,
        description: response.data.condition.description,
        feelsLike: response.data.temperature.feels_like,
        humidity: response.data.temperature.humidity,
        wind: response.data.wind.speed,
        city: response.data.city,
        country: response.data.country,
        iconUrl: response.data.condition.icon_url,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                className="form-control"
                type="search"
                placeholder="Enter a city"
                autoFocus="on"
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary w-100"
              />
            </div>
          </div>
        </form>
        <h1>
          <span id="cityName">{weatherData.city}</span>,{" "}
          <span className="countryName">{weatherData.country}</span>
        </h1>
        <ul>
          <li>{weatherData.currentDayTime}</li>
          <li className="text-capitalize">{weatherData.description}</li>
        </ul>
        <div className="row">
          <div className="col-6">
            <img
              src={weatherData.iconUrl}
              alt={weatherData.description}
              className="currentWeatherIcon"
            />
            <span className="temperature">{Math.round(weatherData.temperature)}</span>
            <span className="unit">°F</span>
          </div>
          <div className="col-6 weatherDetails">
            <ul>
              <li>
                Feels Like:{" "}
                <span className="feelsLike">{Math.round(weatherData.feelsLike)}</span>
                <span className="feelsLikeUnit">°F</span>
              </li>
              <li>Humidity: {weatherData.humidity}%</li>
              <li>Wind: {Math.round(weatherData.wind)} mph</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "dfc9t54e5b10fea0dcae14f3826ob4e6";
    let city = "Fall Creek";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}

export default Weather;
