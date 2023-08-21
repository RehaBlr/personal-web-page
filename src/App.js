import React, { useState } from "react";
import "./App.css";

import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Profile from "./components/Profile";

function App() {
  const [toggle, setToggle] = useState(false);
  // console.log(toggle);
  return (
    <div className={toggle ? "App dark" : "App"}>
      <div className="container">
        <Header toggle={toggle} setToggle={setToggle} />

        <About />

        <Skills />

        <Profile />
      </div>
    </div>
  );
}

export default App;
