import React, { useState } from "react";
import axios from "axios";
import CurrentWeather from "./CurrentWeather";

import "./Search.css";

export default function Search() {
  const [weatherData, setWeatherData] = useState({ ready: false });

  const searchForm = (
    <form className="Search">
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          placeholder="Enter a city"
          aria-label="User's city"
          aria-describedby="button-addon2"
          required
        />
        <div className="input-group-append">
          <button className="btn search-city" type="submit">
            <i className="fas fa-search"></i>
          </button>
          <button className="btn geolocate" type="button">
            <i className="fas fa-map-marker-alt"></i>
          </button>
        </div>
      </div>
    </form>
  );

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      name: response.data.name,
      dateTime: (response.data.dt + response.data.timezone) * 1000,
      temperature: response.data.main.temp,
      feelsLike: response.data.main.feels_like,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
    });
  }

  // function handleSearch(event) {
  //   // event.preventDefault();
  //   // console.log("handle search");
  // }

  if (weatherData.ready) {
    return (
      <div>
        <div>{searchForm}</div>

        <div>
          <CurrentWeather
            cityName={weatherData.name}
            dateTime={weatherData.dateTime}
            temperature={weatherData.temperature}
            feelsLike={weatherData.feelsLike}
            description={weatherData.description}
            humidity={weatherData.humidity}
            wind={weatherData.wind}
          />
        </div>
      </div>
    );
  } else {
    const city = `London`; // need to set from actual form
    const apiKey = `3e11ec91583e0c90e17fc5eef84e88aa`;
    const apiURLCurrentWeather = `https://api.openweathermap.org/data/2.5/weather?`;
    const apiSearchString = `${apiURLCurrentWeather}q=${city}&appid=${apiKey}&units=metric`;

    axios.get(apiSearchString).then(handleResponse);

    return searchForm;
  }
}
