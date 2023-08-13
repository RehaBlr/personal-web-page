import React, { useState } from "react";
import "./App.css";

function App() {
  const [toggle, setToggle] = useState(true);
  // console.log(toggle);
  return (
    <div className={toggle ? "App dark" : "App"}>
      <div className="container">
        <div className="topBar">
          <div
            className={toggle ? "radio-btn bg" : "radio-btn"}
            onClick={() => setToggle(!toggle)}
          >
            <div
              className={toggle ? "radio-inner active" : "radio-inner"}
            ></div>
          </div>
          <div className="ml ml-dark">DARK MODE</div>
          <div className="ml ml-pad">|</div>
          <div className="ml">
            <span>TÜRKÇE</span>'YE GEÇ
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
