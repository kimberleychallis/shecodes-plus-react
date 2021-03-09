import React from "react";

import "./SwitchUnits.css";

export default function SwitchUnits() {
  function convertTemperatures() {
    console.log("Convert temperatures");
  }

  return (
    // <div className="SwitchUnits future-weather">
    <div className="SwitchUnits">
      <div className="row">
        <div className="col" onClick={convertTemperatures}>
          <h4>
            <i className="fas fa-sync-alt"></i> switch to fahrenheit
          </h4>
        </div>
      </div>
    </div>
  );
}
