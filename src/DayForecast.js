import React, { useEffect, useState } from "react";
import ForecastIcon from "./ForecastIcon";

export default function DayForecast(props) {
  const [minTemperature, setMinTemperature] = useState(0);
  const [maxTemperature, setMaxTemperature] = useState(0);
  const [iconCode, setIconCode] = useState();
  const [day, setDay] = useState();

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

  useEffect(() => {
    setMinTemperature(Math.round(props.forecast.temp.min));
    setMaxTemperature(Math.round(props.forecast.temp.max));
    setIconCode(props.forecast.weather[0].id);
    setDay(getNameOfDay(props.forecast.dt * 1000));
  }, [
    props.forecast.dt,
    props.forecast.temp.max,
    props.forecast.temp.min,
    props.forecast.weather,
  ]);

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
