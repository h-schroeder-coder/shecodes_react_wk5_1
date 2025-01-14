import React from "react";
import "./WeatherInfo.css";

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
          <div className="col-6">
            <img
              src={props.data.iconUrl}
              alt={props.data.description}
              className="currentWeatherIcon"
            />
            <span className="temperature">{Math.round(props.data.temperature)}</span>
            <span className="unit">°F</span>
          </div>
          <div className="col-6 weatherDetails">
            <ul>
              <li>
                Feels Like:{" "}
                <span className="feelsLike">{Math.round(props.data.feelsLike)}</span>
                <span className="feelsLikeUnit">°F</span>
              </li>
              <li>Humidity: {props.data.humidity}%</li>
              <li>Wind: {Math.round(props.data.wind)} mph</li>
            </ul>
          </div>
        </div>
      </div>
    );
}