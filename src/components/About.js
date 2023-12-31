import { useSelector } from "react-redux";

export default function About() {
  const about_text = useSelector((state) => state.source);
  // console.log("selector header :", header_text.dil);
  return (
    <>
      <div className="hero">
        <div className="her">
          <div className="hero-text">
            <div className="hero-line">
              <div className="line"></div>
              <p>Reha Bilir</p>
            </div>
            <div className="aboutMe">
              <h1>{about_text.introTitle}</h1>
              <p>{about_text.introText}</p>
            </div>

            <div className="socialLink">
              <div className="hireMe inter">{about_text.navHire}</div>
              <div className="githubL">
                <img src="./fs-icon/github.svg" alt="Github icon" />
                <a href="https://github.com/RehaBlr" className="inter">
                  Github
                </a>
              </div>
              <div className="linkedinL ">
                <img src="./fs-icon/LinkedIn.svg" alt="Linkedin icon" />
                <a href="https://linkedin.com/in/reha-bilir" className="inter">
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
          <div className="profileImg">
            <img src="./fs-image/image-1.png" />
          </div>
        </div>
      </div>
    </>
  );
}
