import React, { useState } from "react";
import axios from "axios";
import CurrentWeather from "./CurrentWeather";

import "./Search.css";

export default function Search(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    const dateTime = new Date(
      (response.data.dt + response.data.timezone) * 1000
    );
    const hour = dateTime.getHours();

    setWeatherData({
      ready: true,
      name: response.data.name,
      dateTime: dateTime,
      hour: hour,
      temperature: response.data.main.temp,
      feelsLike: response.data.main.feels_like,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      icon: response.data.weather[0].id,
    });
  }

  function search() {
    const apiKey = `3e11ec91583e0c90e17fc5eef84e88aa`;
    const apiURLCurrentWeather = `https://api.openweathermap.org/data/2.5/weather?`;
    const apiSearchString = `${apiURLCurrentWeather}q=${city}&appid=${apiKey}&units=metric`;

    axios.get(apiSearchString).then(handleResponse);
  }

  function handleSearch(event) {
    event.preventDefault();
    search(city);
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div>
        <form className="Search" onSubmit={handleSearch}>
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Enter a city"
              aria-label="User's city"
              aria-describedby="button-addon2"
              onChange={handleCityChange}
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
        <div>
          <CurrentWeather data={weatherData} />
        </div>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
