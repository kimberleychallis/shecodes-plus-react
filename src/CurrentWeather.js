import React from "react";

import "./CurrentWeather.css";

export default function CurrentWeather(props) {
  return (
    <div className="CurrentWeather border shadow-lg">
      <div className="row now">
        <div className="col-10">
          <div>
            <h1 className="city">{props.cityName}</h1>
          </div>
          <div>
            <h2 className="date-time">Thursday, 4 March 2021 18:04</h2>
          </div>
        </div>

        <div className="col-2">
          <div className="current-weather-icon">
            <i className="fas fa-sun"></i>
          </div>
        </div>
      </div>
      <div className="row temps">
        <div className="col">
          <ul className="current-weather-details">
            <li>{props.description}</li>
            <li>Feels like {Math.round(props.feelsLike)}°</li>
            <li>Humidity: {props.humidity}%</li>
            <li>Wind: {Math.round(props.wind)}KM/HR</li>
          </ul>
        </div>
        <div className="col">
          <div className="current-temperature">
            {Math.round(props.temperature)}°
          </div>
        </div>
      </div>
    </div>
  );
}
