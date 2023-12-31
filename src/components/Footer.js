import { useSelector } from "react-redux";

export default function Footer() {
  const foot_text = useSelector((state) => state.source);

  return (
    <>
      <div className="containercontact">
        <h3>{foot_text.footerText}</h3>
        <div className="contactLink">
          <div className="footer-left">
            <img src="./fs-icon/👉.svg" />
            <a href="#">rehablr26@gmail.com</a>
          </div>

          <div className="personalLink">
            <a id="blog_footer" href="#">
              {foot_text.footerPersonal}
            </a>
            <a id="github_footer" href="https://github.com/RehaBlr">
              Github
            </a>
            <a id="linkedin_footer" href="https://linkedin.com/in/reha-bilir">
              Linkedin
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
