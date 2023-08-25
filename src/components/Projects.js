import { useSelector } from "react-redux";

export default function Projects() {
  const project_text = useSelector((state) => state.source);
  return (
    <>
      <div className="containerProject">
        <div>
          <h2 id="projects">{project_text.projectsTitle}</h2>
        </div>
        <div className="projects">
          {project_text.projects.map((project, ind) => {
            return (
              <div className="project" key={ind}>
                <img src={project.imgSrc} />
                <h3>{project.projectName}</h3>
                <p>{project.projeText}</p>
                <div className="projectstech">
                  <div>React</div>
                  <div>Redux</div>
                  <div>Axios</div>
                </div>
                <div className="linka">
                  <a href={project.gitLink}>Github</a>{" "}
                  <a href={project.vercelLink}>{project.viewSite}</a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
