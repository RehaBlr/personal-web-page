import React, { useEffect, useState } from "react";
import "./App.css";

import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("darkMode") === null) {
      localStorage.setItem("darkMode", toggle);
    } else {
      setToggle(JSON.parse(localStorage.getItem("darkMode")));
    }

    if (localStorage.getItem("language") === null) {
      localStorage.setItem("language", "tr");
    }
  }, []);
  // console.log(toggle);
  return (
    <div className={toggle ? "App dark" : "App"}>
      <ToastContainer
        position="top-left"
        autoClose={2000}
        theme={toggle ? "dark" : "light"}
      />
      <div className="container">
        <Header toggle={toggle} setToggle={setToggle} />

        <About />

        <Skills />

        <Profile />

        <Projects />
      </div>
      <div className="footerContainer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
