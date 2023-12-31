import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import projectsService from "../service/projects.service";

function EditProjectPage(props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  // Get the URL parameter `:projectId`

  const { projectId } = useParams();      
  const navigate = useNavigate();

 // This effect will run after the initial render and each time
 // the projectId coming from the URL parameter `projectId` changes
 useEffect(() => {
  projectsService.getProject(projectId)
      .then((response) => {

        /* 
          We update the state with the project data coming from the response.
          This way we set inputs to show the actual title and description of the project
        */
        const oneProject = response.data;
        setTitle(oneProject.title);
        setDescription(oneProject.description);
      })
      .catch((error) => console.log(error));
  }, [projectId]);
  
  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Create an object representing the body of the PUT request
    const requestBody = { title, description };

    projectsService.updateProject(projectId, requestBody)
      .then((response) => {
        // Once the request is resolved successfully and the project
        // is updated we navigate back to the details page
        navigate(`/projects/${projectId}`);
      });
  };

  const deleteProject = () => {
    projectsService.deleteProject(projectId)
      .then(() => {
        // Once the delete request is resolved successfully
        // navigate back to the list of projects.
        navigate("/projects");
      })
      .catch((err) => console.log(err));
  };  


  return (
    <div className="EditProjectPage">
      <h3>Edit the Project</h3>

      <form onSubmit={handleFormSubmit}>
        <label>Title:</label>
        <input
          type="text"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        
        <label>Description:</label>
        <textarea
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <input type="submit" value="Submit" />
      </form>

      <button onClick={deleteProject}>Delete Project</button>

    </div>
  );
}

export default EditProjectPage;
