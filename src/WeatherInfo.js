import React from "react";
import "./WeatherInfo.css";
import WeatherCurrentTemperature from "./WeatherCurrentTemperature";
import WeatherCurrentFeel from "./WeatherCurrentFeel";

export default function WeatherInfo(props) {
    return (
      <div className="Weatherinfo">
        <h1>
          <span id="cityName">{props.data.city}</span>,{" "}
          <span className="countryName">{props.data.country}</span>
        </h1>
        <ul>
          <li>{props.data.currentDayTime}</li>
          <li className="text-capitalize">{props.data.description}</li>
        </ul>
        <div className="row">
            <div className="col-7">
                <div className="col-6">
                    <img
                    src={props.data.iconUrl}
                    alt={props.data.description}
                    className="currentWeatherIcon"
                    />
                </div>
                <WeatherCurrentTemperature fahrenheit={props.data.temperature} />
            </div>
          <div className="col-5 weatherDetails">
            <ul>
              <li>
                <WeatherCurrentFeel fahrenheit={props.data.feelsLike} />
              </li>
              <li>Humidity: {props.data.humidity}%</li>
              <li>Wind: {Math.round(props.data.wind)} mph</li>
            </ul>
          </div>
        </div>
      </div>
    );
}