import { useState } from "react";

import { swit } from "../store/actions";
import { useDispatch, useSelector } from "react-redux";
import { source } from "../languages/languageSource";

import { ToastContainer, toast } from "react-toastify";

export default function Header(props) {
  const notifyDark = () => toast("Dark Mode On");
  const notifyLight = () => toast("Light Mode On");

  const notifyEn = () => toast("Switched to English");
  const notifyTr = () => toast("Türkçe' ye geçildi");

  const { toggle, setToggle } = props;
  const [toggleDil, setToggleDil] = useState(false);

  const [data, setData] = useState(source.tr);
  const dispatch = useDispatch();
  const [dil3, setDil3] = useState("tr");

  const [dil, setDil] = useState("TÜRKÇE");
  const [dil2, setDil2] = useState("'YE GEÇ");

  const header_text = useSelector((state) => state.source);
  // console.log("selector header :", header_text.dil);

  function handleSwitch() {
    if (dil === "TÜRKÇE") {
      setDil3("en");
      dispatch(swit(dil3, setData));

      setDil("SWİCTH TO ");
      setDil2(" ENGLİSH");
      setToggleDil(true);
      notifyTr();
    } else {
      setDil3("tr");
      dispatch(swit(dil3, setData));

      setDil("TÜRKÇE");
      setDil2("'YE GEÇ");
      setToggleDil(false);
      notifyEn();
    }
  }

  const modeOn = () => {
    // console.log("1", !toggle);

    setToggle(!toggle);
    // console.log("2", toggle);
    localStorage.setItem("darkMode", !toggle);
    toggle ? notifyLight() : notifyDark();
  };
  return (
    <>
      <div className="topBar">
        <div className={toggle ? "radio-btn bg" : "radio-btn"} onClick={modeOn}>
          <div className={toggle ? "radio-inner active" : "radio-inner"}></div>
        </div>
        <div className="ml ml-dark" onClick={modeOn}>
          {toggle === false ? header_text.dark_mode : header_text.light_mode}
        </div>
        <div className="ml ml-pad">|</div>

        <div className="ml" onClick={handleSwitch}>
          <span className={toggleDil ? "dil2" : "dil"}>{dil}</span>
          <span className={toggleDil ? "dil" : "dil2"}>{dil2}</span>
        </div>
      </div>

      <div className="Navbar">
        {/* <div className="navbarImg">
          <img src="./fs-logo/logo.svg" alt="Logo" />
        </div> */}
        <div className="logo">
          <div>R</div>
        </div>
        <div className="navbarNav">
          <nav>
            <a id="skill" href="#skills">
              {header_text.navSkills}
            </a>
            <a id="project" href="#projects">
              {header_text.navProjects}
            </a>
            <a id="contactLink" href="#">
              {header_text.navHireMe}
            </a>
          </nav>
        </div>
      </div>
    </>
  );
}
