import React from "react";
import Search from "./Search";

import "./App.css";

export default function App() {
  return (
    <div className="container">
      <div className="App">
        <div className="app shadow-lg">
          <Search />
        </div>

        <div className="source">
          <a
            href="https://github.com/kimberleychallis/shecodes-plus-react"
            target="_blank"
            rel="noreferrer noopener"
          >
            Open Source
          </a>
          &nbsp;by 👩🏼‍💻 Kimberley Challis for&nbsp;
          <a
            href="https://shecodes.io"
            target="_blank"
            rel="noreferrer noopener"
          >
            SheCodes.io
          </a>
        </div>
      </div>
    </div>
  );
}
