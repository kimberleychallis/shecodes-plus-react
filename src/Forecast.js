import React, { useState, useEffect } from "react";
import axios from "axios";
import DayForecast from "./DayForecast";

import "./Forecast.css";

export default function Forecast(props) {
  const [forecast, setForecast] = useState({ isLoaded: false, data: {} });

  const apiKey = "3e11ec91583e0c90e17fc5eef84e88aa";
  const apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${props.latitude}&lon=${props.longitude}&exclude=current,minutely,hourly,alerts&appid=${apiKey}&units=metric`;

  useEffect(() => {
    // console.log("the API has been called");
    axios.get(apiUrl).then(handleResponse);

    function handleResponse(response) {
      // console.log(response.data);
      setForecast({ isLoaded: true, data: response.data });
    }

    return function cleanup() {
      setForecast({ isLoaded: false });
    };
  }, [apiUrl]);

  if (forecast.isLoaded) {
    return (
      <div>
        <DayForecast forecast={forecast} day={1} />
        <DayForecast forecast={forecast} day={2} />
        <DayForecast forecast={forecast} day={3} />
        <DayForecast forecast={forecast} day={4} />
        <DayForecast forecast={forecast} day={5} />
      </div>
    );
  } else return null;

  // ⬇️ FUNCTIONALITY WITHOUT HOOKS

  // if (!loaded) {
  //   const apiKey = "3e11ec91583e0c90e17fc5eef84e88aa";
  //   const apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${props.latitude}&lon=${props.longitude}&exclude=current,minutely,hourly,alerts&appid=${apiKey}&units=metric`;
  //   // console.log(apiUrl);

  //   axios.get(apiUrl).then(handleResponse);

  //   return "Loading...";
  // } else {
  //   return (
  //     <div className="Forecast">
  //       {JSON.stringify(forecast)}
  //       <DayForecast />

  //       {/* <p>Min temp: {Math.round(forecast.daily[2].temp.min)}°</p>
  //       <p>Max temp: {Math.round(forecast.daily[2].temp.max)}°</p> */}
  //     </div>
  //   );
  // }
}
