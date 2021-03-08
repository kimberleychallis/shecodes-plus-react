import React from "react";

import "./CurrentWeather.css";

export default function CurrentWeather() {
  return (
    <div className="CurrentWeather border shadow-lg">
      <div className="row now">
        <div className="col-10">
          <div>
            <h1 className="city">London</h1>
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
            <li>Heavy clouds</li>
            <li>Feels like 8°</li>
            <li>Humidity: 80%</li>
            <li>Wind: 7KM/HR</li>
          </ul>
        </div>
        <div className="col">
          <div className="current-temperature">11°</div>
        </div>
      </div>
    </div>
  );
}
