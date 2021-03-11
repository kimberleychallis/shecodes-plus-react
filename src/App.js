import Search from "./Search";

import Forecast from "./Forecast";
import SwitchUnits from "./SwitchUnits";

import "./App.css";

export default function App() {
  return (
    <div className="container">
      <div className="App">
        <div className="app shadow-lg">
          <Search />

          <Forecast />

          <SwitchUnits />
        </div>

        <div className="source">
          <a
            href="https://github.com/kimberleychallis/shecodes-plus-react"
            target="_blank"
            rel="noreferrer"
          >
            Open Source
          </a>
          &nbsp;code by 👩🏼‍💻 Kimberley Challis for&nbsp;
          <a href="https://shecodes.io" target="_blank" rel="noreferrer">
            SheCodes.io
          </a>
        </div>
      </div>
    </div>
  );
}
