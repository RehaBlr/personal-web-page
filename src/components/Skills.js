//
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Skills() {
  // Update the document title using the browser API
  // deneme = useSelector((state) => state.source);
  const skills_text = useSelector((state) => state.source);
  // console.log("selector header :", deneme.dil);
  return (
    <>
      <div className="containerSkills">
        <div>
          <h2 id="skills">{skills_text.skillsTitle}</h2>
          {/* <h2>{deneme.title}</h2> */}
        </div>
        <div className="skillText">
          <div>
            <h3>Java Script</h3>
            <p>{skills_text.javascriptText}</p>
          </div>
          <div>
            <h3>React.Js</h3>
            <p>{skills_text.reactText}</p>
          </div>
          <div>
            <h3>Node.Js</h3>
            <p>{skills_text.nodeJsText}</p>
          </div>
        </div>
        <div className="lll"></div>
      </div>
    </>
  );
}
