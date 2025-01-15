import React from "react";

export default function ForecastDate(props) {
  let days = [
    "Sun",
    "Mon",
    "Tue",
    "Wed",
    "Thu",
    "Fri",
    "Sat",
  ];
  let forecastDay = days[props.date.getDay()];
  
  return (
    <div>
      {forecastDay}
    </div>
  );
}