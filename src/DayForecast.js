import React, { useEffect, useState } from "react";
import Icon from "./Icon";

export default function DayForecast(props) {
  const [minTemperature, setMinTemperature] = useState(0);
  const [maxTemperature, setMaxTemperature] = useState(0);

  useEffect(() => {
    // setMinTemperature(Math.round(props.data.daily[props.day].temp.min));
    // setMaxTemperature(Math.round(props.data.daily[props.day].temp.max));
    console.log("Effect has run");
  }, []);

  return (
    <div className="Forecast">
      <div className="row justify-content-center">
        <div className="col-6">
          <h3>Name of day</h3>
        </div>
        <div className="col-2 icon">
          {/* <Icon weatherID={800} hour={16} /> */}Icon
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
