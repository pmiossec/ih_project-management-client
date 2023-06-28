import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AddProject from "./AddProject";
import ProjectCard from "./ProjectCard";
import projectsService from "../service/projects.service";

function ProjectListPage() {
  const [projects, setProjects] = useState([]);

  const getAllProjects = () => {
    projectsService.getAllProjects()
      .then((response) => setProjects(response.data))
      .catch((error) => console.log(error));
  };

  // We set this effect will run only once, after the initial render
  // by setting the empty dependency array - []
  useEffect(() => {
    getAllProjects();
  }, [] );

  
  return (
    <div className="ProjectListPage">

        <AddProject refreshProjects={getAllProjects} />
      
        { projects.map((project) => (
            <ProjectCard key={project._id} {...project} />
        ))}     
       
    </div>
  );
}

export default ProjectListPage;
