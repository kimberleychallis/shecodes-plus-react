import React, { useState, useEffect } from "react";
import axios from "axios";
import DayForecast from "./DayForecast";

import "./Forecast.css";

export default function Forecast(props) {
  const [forecast, setForecast] = useState({});
  const [isLoaded, setIsLoaded] = useState(false);

  const apiKey = "3e11ec91583e0c90e17fc5eef84e88aa";
  const apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${props.latitude}&lon=${props.longitude}&exclude=current,minutely,hourly,alerts&appid=${apiKey}&units=metric`;

  useEffect(() => {
    axios.get(apiUrl).then(handleResponse);

    function handleResponse(response) {
      setForecast(response.data.daily);
      setIsLoaded(true);
    }

    // return function cleanup() {
    //   setIsLoaded(false);
    // };
  }, [apiUrl]);

  if (isLoaded) {
    return (
      <div>
        {forecast.map((dailyForecast, index) => {
          if (index > 0 && index < 6) {
            return (
              <div key={index}>
                <DayForecast forecast={dailyForecast} />
              </div>
            );
          } else return null;
        })}
      </div>
    );
  } else return null;
}
