import  { useState } from 'react';
import CardFlip from './CardFlip';
import { projects } from '../../data';
function Projects() {
  const [visibleProjects, setVisibleProjects] = useState(6);

  const showMoreProjects = () => {
    setVisibleProjects((prev) => prev + 6);
  };

  return (
    <div className="container" style={{textAlign: "center"}}>
      <h1 style={{margin:"120px"}} className="textCentre">MY PROJECTS</h1>
      <div className="row">
        {projects.slice(0, visibleProjects).map((project) => (
          <div className="col-lg-4 col-md-6" key={project.id}>
            <CardFlip project={project} />
          </div>
        ))}
      </div>
      {visibleProjects < projects.length && (
        <button className="downloadButton" onClick={showMoreProjects}>
          Show More
        </button>
      )}
    </div>
  );
}

export default Projects;
