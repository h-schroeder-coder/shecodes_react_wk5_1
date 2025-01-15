import React, { useState, useEffect } from "react";
import axios from "axios";
import "./WeatherForecast.css";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
  const [forecastData, setForecastData] = useState(null);
  const [ready, setReady] = useState(false);   

useEffect(() => {
    setReady(false);
  }, [props.city]);

  function handleResponse(response) {
    setReady(true);
    setForecastData(response.data.daily);
  }

  if (ready) {
    return (
      <div className="WeatherForecast">
        <div className="row">
          <div className="col">
            <div className="DailyWeatherForecast row">
                {forecastData.map(function (dailyForecast, index) { 
                    if (index < 5) {
                        return (
                            <div className="col" key={index}>
                             <WeatherForecastDay data={dailyForecast} key={index} />
                            </div>
                        );
                    } else {
                        return null;
                    }
                }
                )}
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "dfc9t54e5b10fea0dcae14f3826ob4e6";
    let city = props.city;
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return null;
  }
}
