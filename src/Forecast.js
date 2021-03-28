import React from "react";
import axios from "axios";

import "./Forecast.css";

export default function Forecast(props) {
  const apiKey = "3e11ec91583e0c90e17fc5eef84e88aa";
  const apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${props.latitude}&lon=${props.longitude}&exclude=current,minutely,hourly,alerts&appid=${apiKey}&units=metric`;

  function handleResponse(response) {
    console.log("hi");
  }

  axios.get(apiUrl).then(handleResponse);

  return (
    <div className="Forecast">
      Lat: {props.latitude} Lon: {props.longitude}
    </div>
  );
}
