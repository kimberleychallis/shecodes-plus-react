import Search from "./Search";
import CurrentWeather from "./CurrentWeather";
import Forecast from "./Forecast";
import SwitchUnits from "./SwitchUnits";
import Source from "./Source";

import "./App.css";

export default function App() {
  return (
    <div className="container">
      <div className="App">
        <div className="app shadow-lg">
          <Search />

          <CurrentWeather />

          <Forecast />

          <SwitchUnits />
        </div>

        <Source />
      </div>
    </div>
  );
}
