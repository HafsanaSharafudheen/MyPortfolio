import  { useState } from 'react';
import CardFlip from './CardFlip';
import { projects } from '../../data';

function Projects() {
  const [visibleProjects, setVisibleProjects] = useState(6);

  const showMoreProjects = () => {
    setVisibleProjects((prev) => prev + 6);
  };

  return (
    <div className="container">
      <h1>Projects</h1>
      <div className="row">
        {projects.slice(0, visibleProjects).map((project) => (
          <div className="col-md-4 mb-4" key={project.id}>
            <CardFlip project={project} />
          </div>
        ))}
      </div>
      {/* {visibleProjects < projects.length && (
        <button className="connectButton" onClick={showMoreProjects}>
          Show More
        </button>
      )} */}
    </div>
  );
}

export default Projects;
