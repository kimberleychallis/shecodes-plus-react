import React from "react";
import ForecastIcon from "./ForecastIcon";

export default function DayForecast(props) {
  const minTemperature = Math.round(props.forecast.temp.min);
  const maxTemperature = Math.round(props.forecast.temp.max);
  const iconCode = props.forecast.weather[0].id;
  const day = getNameOfDay(props.forecast.dt * 1000);

  // Could move this into its own component but not sure it's worth it
  function getNameOfDay(timestamp) {
    const dayOfWeek = new Date(timestamp).getDay();
    const daysOfTheWeek = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    return daysOfTheWeek[dayOfWeek];
  }

  return (
    <div className="Forecast">
      <div className="row justify-content-center">
        <div className="col-6">
          <h3>{day}</h3>
        </div>
        <div className="col-2 icon">
          <ForecastIcon iconCode={iconCode} />
        </div>
        <div className="col-1 d-flex justify-content-center min-max">
          <span className="max">{maxTemperature}</span>
        </div>
        <div className="col-1 d-flex justify-content-center min-max">
          <span className="min">{minTemperature}</span>
        </div>
      </div>
    </div>
  );
}
