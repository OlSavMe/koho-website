import React from "react";
import '../styles/ProjectPage.scss';
import projectData from "../data/ProjectData";
import {
    useParams,
  } from "react-router-dom";


const ProjectPage = () => {
    let { id } = useParams();

    const pic = projectData[id - 1].picture;
    
console.log(id);

      return (
       
<div className="project-page">
      <h1>project</h1>
<img src={pic} alt="pic" className="project-pic"/>
<figcaption>{id}</figcaption>  
</div>



     

      );
}

export default ProjectPage;