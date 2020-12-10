import React from "react";
import '../styles/Works.scss';
import projectData from "../data/ProjectData";
import {NavLink,  
    Switch,
    Route,
    useRouteMatch} from "react-router-dom";
    import ProjectPage from "../components/ProjectPage";

function Works() {

    let { url } = useRouteMatch();
const ProjectCards = () => 
projectData.map((item, index) => (
    <NavLink key={index}  to={`/project/${item.id}`} className="wrapper">
     <img src={item.picture} alt="card-pic"/>
       <figcaption>{item.title}</figcaption>
    </NavLink>
        ));


  return (
    <>
   <div className='container'>  
 <div className="grid">
     <ProjectCards />
</div>
   </div>
   <Switch>
        <Route path={`${url}/:id`}>
          <ProjectPage />
        </Route>
      </Switch>
    </>
  );
}

export default Works;