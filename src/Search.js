import React, { useState } from "react";

import "./Search.css";

export default function Search() {
  const [searchString, setSearchString] = useState("");

  function handleSearch(event) {}

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
