export default function About() {
  return (
    <>
      <div className="hero">
        <div className="hero-text">
          <div className="hero-line">
            <div className="line"></div>
            <p>Almila Su</p>
          </div>
          <div className="aboutMe">
            <h1>Creative thinker Minimalism lover</h1>
            <p>
              Hi, I’m Almila. I’m a full-stack developer. If you are looking for
              a Developer who to craft solid and scalable frontend products with
              great user experiences. Let’s shake hands with me.
            </p>
          </div>

          <div className="socialLink">
            <div className="hireMe">Hire me</div>
            <div className="githubL">
              <img src="./fs-icon/github.svg" alt="Github icon" />
              <a href="https://github.com">Github</a>
            </div>
            <div className="linkedinL">
              <img src="./fs-icon/LinkedIn.svg" alt="Linkedin icon" />
              <a href="https://linkedin.com">LinkedIn</a>
            </div>
          </div>
        </div>
        <div className="profileImg">
          <img src="./fs-image/image-1.png" />
        </div>
      </div>
    </>
  );
}
