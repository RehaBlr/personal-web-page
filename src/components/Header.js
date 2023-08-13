export default function Header(props) {
  const { toggle, setToggle } = props;
  return (
    <>
      <div className="topBar">
        <div
          className={toggle ? "radio-btn bg" : "radio-btn"}
          onClick={() => setToggle(!toggle)}
        >
          <div className={toggle ? "radio-inner active" : "radio-inner"}></div>
        </div>
        <div className="ml ml-dark">DARK MODE</div>
        <div className="ml ml-pad">|</div>
        <div className="ml">
          <span>TÜRKÇE</span>'YE GEÇ
        </div>
      </div>
      <div className="Navbar">
        {/* <div className="navbarImg">
          <img src="./fs-logo/logo.svg" alt="Logo" />
        </div> */}
        <div className="logo">
          <div>A</div>
        </div>
        <div className="navbarNav">
          <nav>
            <a id="skill" href="#skills">
              Skills
            </a>
            <a id="projects" href="#projects">
              Projects
            </a>
            <a id="contactLink" href="#">
              Hire me
            </a>
          </nav>
        </div>
      </div>
    </>
  );
}
