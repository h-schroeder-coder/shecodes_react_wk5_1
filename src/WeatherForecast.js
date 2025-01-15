import React, { useState } from "react";
import axios from "axios";
import "./WeatherForecast.css";
import ForecastDate from "./ForecastDate";

export default function WeatherForecast(props) {
  const [forecastData, setForecastData] = useState({ ready: false });
  const [city, setCity] = useState(props.city);

  function handleResponse(response) {
    console.log(response.data);
    setForecastData({
      ready: true,
      minTemperature: response.data.daily.temperature.minimum,
      maxTemperature: response.data.daily.temperature.maximum,
      date: new Date(response.data.time * 1000),
      description: response.data.daily.condition.description,
      iconUrl: response.data.daily.condition.icon_url,
      city: response.data.city,
    });
    setCity(response.data.city);
  }

  if (forecastData.ready) {
    return (
      <div className="WeatherForecast">
        <div className="row">
          <div className="col">
            <div className="WeatherForecastDaily">
              <div className="WeatherForecast-day">
                <ForecastDate />
              </div>
              <img
                src={forecastData.iconUrl}
                alt={forecastData.description}
                className="WeatherForecast-icon"
              />
              <div className="WeatherForecast-temperatures">
                <span className="WeatherForecast-temperature-max">
                  <strong>{Math.round(forecastData.maxTemperature)}°</strong>
                </span>
                <span className="WeatherForecast-temperature-min">
                  {Math.round(forecastData.minTemperature)}°
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "dfc9t54e5b10fea0dcae14f3826ob4e6";
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return null;
  }
}
