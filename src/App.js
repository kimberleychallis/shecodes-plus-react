import React from "react";
import Search from "./Search";
import Forecast from "./Forecast";

import "./App.css";

export default function App() {
  // const [unit, setUnit] = useState("metric");

  // function switchUnits() {
  //   if (unit === "metric") {
  //     setUnit("fahrenheit");
  //     console.log("Switched to celsius");

  //     return (
  //       <div className="container">
  //         <div className="App">
  //           <div className="app shadow-lg">
  //             <Search defaultCity="London" unit="metric" />

  //             <Forecast />

  //             <div className="SwitchUnits" onClick={switchUnits}>
  //               <div className="row">
  //                 <div className="col">
  //                   <h4>
  //                     <i className="fas fa-sync-alt"></i> switch to fahrenheit
  //                   </h4>
  //                 </div>
  //               </div>
  //             </div>
  //           </div>

  //           <div className="source">
  //             <a
  //               href="https://github.com/kimberleychallis/shecodes-plus-react"
  //               target="_blank"
  //               rel="noreferrer"
  //             >
  //               Open Source
  //             </a>
  //             &nbsp;code by 👩🏼‍💻 Kimberley Challis for&nbsp;
  //             <a href="https://shecodes.io" target="_blank" rel="noreferrer">
  //               SheCodes.io
  //             </a>
  //           </div>
  //         </div>
  //       </div>
  //     );
  //   } else {
  //     setUnit("celsius");
  //     console.log("Switched to fahrenheit");
  //     return (
  //       <div className="container">
  //         <div className="App">
  //           <div className="app shadow-lg">
  //             <Search defaultCity="London" unit="imperial" />

  //             <Forecast />

  //             <div className="SwitchUnits" onClick={switchUnits}>
  //               <div className="row">
  //                 <div className="col">
  //                   <h4>
  //                     <i className="fas fa-sync-alt"></i> switch to celsius
  //                   </h4>
  //                 </div>
  //               </div>
  //             </div>
  //           </div>

  //           <div className="source">
  //             <a
  //               href="https://github.com/kimberleychallis/shecodes-plus-react"
  //               target="_blank"
  //               rel="noreferrer"
  //             >
  //               Open Source
  //             </a>
  //             &nbsp;code by 👩🏼‍💻 Kimberley Challis for&nbsp;
  //             <a href="https://shecodes.io" target="_blank" rel="noreferrer">
  //               SheCodes.io
  //             </a>
  //           </div>
  //         </div>
  //       </div>
  //     );
  //   }
  // }

  return (
    <div className="container">
      <div className="center">
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
    </div>
  );
}
