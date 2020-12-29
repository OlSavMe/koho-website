import React, { useContext } from "react";
import "../styles/Works.scss";
import { NavLink, Switch, Route, useRouteMatch } from "react-router-dom";
import ProjectPage from "../components/ProjectPage";
import { EntriesContext } from "../EntriesContext";
// import SkeletonWorks from "../components/SkeletonWorks";

const Works = () => {
  const { entries } = useContext(EntriesContext);

  console.log(entries);

  // Filter project page posts
  const projectData = [];
  entries.filter((entry) =>
    entry.sys.contentType.sys.id === "projectPage"
      ? projectData.push(entry)
      : null
  );

  console.log(projectData);

  let { url } = useRouteMatch();
  const ProjectCards = () =>
    projectData.map((item, index) => (
      <NavLink key={index} to={`/project/${item.sys.id}`} className="wrapper">
        <img
          src={item.fields.heroImage.fields.file.url}
          alt="card-pic"
          className="inner-pic"
        />
        <figcaption>{item.fields.projectTitle}</figcaption>
      </NavLink>
    ));

  return (
    <>
      <div className="container">
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
};

export default Works;
