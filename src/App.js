import Search from "./Search";

import Forecast from "./Forecast";

import "./App.css";

export default function App() {
  return (
    <div className="container">
      <div className="App">
        <div className="app shadow-lg">
          <Search defaultCity="London" unit="metric" />

          <Forecast />

          <div className="SwitchUnits">
            <div className="row">
              <div className="col">
                <h4>
                  <i className="fas fa-sync-alt"></i> switch to fahrenheit
                </h4>
              </div>
            </div>
          </div>
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
