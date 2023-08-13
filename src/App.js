import React, { useState } from "react";
import "./App.css";

import Header from "./components/Header";

function App() {
  const [toggle, setToggle] = useState(true);
  // console.log(toggle);
  return (
    <div className={toggle ? "App dark" : "App"}>
      <div className="container">
        <Header toggle={toggle} setToggle={setToggle} />
      </div>
    </div>
  );
}

export default App;
