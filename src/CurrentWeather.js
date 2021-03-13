import React from "react";
import FormattedDate from "./FormattedDate";
import Icon from "./Icon";

import "./CurrentWeather.css";

export default function CurrentWeather(props) {
  return (
    <div className="CurrentWeather border shadow-lg">
      <div className="row now">
        <div className="col-10">
          <div>
            <h1 className="city">{props.data.name}</h1>
          </div>
          <div>
            <h2 className="date-time">
              <FormattedDate rawDateTime={props.data.dateTime} />
            </h2>
          </div>
        </div>

        <div className="col-2">
          <div className="current-weather-icon">
            <Icon weatherID={props.data.icon} />
          </div>
        </div>
      </div>
      <div className="row temps">
        <div className="col">
          <ul className="current-weather-details">
            <li>{props.data.description}</li>
            <li>Feels like {Math.round(props.data.feelsLike)}°</li>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {Math.round(props.data.wind)}KM/HR</li>
          </ul>
        </div>
        <div className="col">
          <div className="current-temperature">
            {Math.round(props.data.temperature)}°
          </div>
        </div>
      </div>
    </div>
  );
}
