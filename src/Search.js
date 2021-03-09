import React, { useState } from "react";
import axios from "axios";

import "./Search.css";

export default function Search() {
  // const [searchString, setSearchString] = useState(""); ALSO remember to import UseState again

  const apiKey = "3e11ec91583e0c90e17fc5eef84e88aa";
  const apiURLCurrentWeather =
    "https://api.openweathermap.org/data/2.5/weather?";
  // const apiURLForecast = "https://api.openweathermap.org/data/2.5/onecall?";
  const apiSearchString =
    "${apiURLCurrentWeather}q=CITY&appid=${apiKey}&units=metric";

  function handleSearch(event) {
    event.preventDefault();
    const city = "";
  }

  return (
    <form className="Search" onSubmit={handleSearch}>
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
}
