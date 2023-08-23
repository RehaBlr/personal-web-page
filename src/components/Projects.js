import { useSelector } from "react-redux";

export default function Projects() {
  const project_text = useSelector((state) => state.source);
  return (
    <>
      <div className="containerProject">
        <div>
          <h2>{project_text.projectsTitle}</h2>
        </div>
        <div className="projects">
          <div className="project">
            <img src="./fs-image/Rectangle-41.png" />
            <h3>{project_text.projectName}</h3>
            <p>{project_text.projeText}</p>
            <div className="projectstech">
              <div>React</div>
              <div>Redux</div>
              <div>Axios</div>
            </div>
            <div className="linka">
              <a href="https://github.com">Github</a>{" "}
              <a href="#">{project_text.viewSite}</a>
            </div>
          </div>
          <div className="project">
            <img src="./fs-image/Rectangle-42.png" />
            <h3>{project_text.projectName}</h3>
            <p>{project_text.projeText}</p>
            <div className="projectstech">
              <div>React</div>
              <div>Redux</div>
              <div>Axios</div>
            </div>
            <div className="linka">
              <a href="https://github.com">Github</a>{" "}
              <a href="#">{project_text.viewSite}</a>
            </div>
          </div>
          <div className="project">
            <img src="./fs-image/Rectangle-43.png" />
            <h3>{project_text.projectName}</h3>
            <p>{project_text.projeText}</p>
            <div className="projectstech">
              <div>React</div>
              <div>Redux</div>
              <div>Axios</div>
            </div>
            <div className="linka">
              <a href="https://github.com">Github</a>{" "}
              <a href="#">{project_text.viewSite}</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
