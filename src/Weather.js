import React from "react";
import "./Weather.css";

function Weather() {
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
              <input type="submit" value="Search" className="btn btn-primary" />
            </div>
          </div>
        </form>
        <h1>City, State, Country</h1>
        <ul>
          <li>Day, Time 00:00</li>
          <li>Weather Description</li>
        </ul>
        <div className="row">
          <div className="col-6">
            <img src="/" alt="Weather Icon" className="currentWeatherIcon" />
            4°F | -15°C
          </div>
          <div className="col-6">
            <ul>
              <li>Precipitation: 5%</li>
              <li>Humidity: 80%</li>
              <li>Wind: 5 mph</li>
            </ul>
          </div>
        </div>
      </div>
    );
}

export default Weather;