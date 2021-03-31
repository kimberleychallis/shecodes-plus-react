import React from "react";
// import "./Forecast.css";

export default function DayForecast(props) {
  // return <div>Min temp: {props.daily[2].temp.min}°</div>;
  return (
    <div className="Forecast">
      <div className="row justify-content-center">
        <div className="col-6">
          <h3>Name of day</h3>
        </div>
        <div className="col-2 icon">Icon</div>
        <div className="col-1 d-flex justify-content-center min-max">
          <span class="max">15</span>
        </div>
        <div className="col-1 d-flex justify-content-center min-max">
          <span className="min">9</span>
        </div>
      </div>
    </div>
  );
}
