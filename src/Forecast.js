import React, { useState, useEffect } from "react";
import axios from "axios";
import DayForecast from "./DayForecast";

import "./Forecast.css";

export default function Forecast(props) {
  // const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState({});
  const apiKey = "3e11ec91583e0c90e17fc5eef84e88aa";
  const apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${props.latitude}&lon=${props.longitude}&exclude=current,minutely,hourly,alerts&appid=${apiKey}&units=metric`;

  function handleResponse(response) {
    // console.log(response.data);
    setForecast(response.data);
    // setLoaded(true);
  }

  useEffect(() => {
    // console.log(apiUrl);
    axios.get(apiUrl).then(handleResponse);
  });

  // useEffect(() => {
  //   console.log("forecast has updated");
  //   return <DayForecast data={forecast} />;
  // }, [forecast]);

  return (
    <div>
      <DayForecast data={forecast} index={0} />
      <DayForecast data={forecast} index={1} />
      <DayForecast data={forecast} index={2} />
      <DayForecast data={forecast} index={3} />
      <DayForecast data={forecast} index={4} />
    </div>
  );

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
