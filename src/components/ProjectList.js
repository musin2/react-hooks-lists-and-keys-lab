import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  console.log(projects);

  const displayProjects = projects.map((prj) => {
    return <ProjectItem key={prj.id} name={prj.name} about={prj.about} technologies={prj.technologies}  />
  })
  
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">
        {displayProjects}
    </div>
    </div>
  );
}

export default ProjectList;
