import React, { useContext } from "react";
import "../styles/Works.scss";
import { NavLink } from "react-router-dom";
import { EntriesContext } from "../EntriesContext";

const Works = () => {
  const { entries } = useContext(EntriesContext);

  // Filter project page posts
  const projectData = [];
  entries.filter((entry) =>
    entry.sys.contentType.sys.id === "projectPage"
      ? projectData.push(entry)
      : null
  );

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
    </>
  );
};

export default Works;
