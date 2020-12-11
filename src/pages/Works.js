import React, { useEffect, useState } from "react";
import "../styles/Works.scss";
import { NavLink, Switch, Route, useRouteMatch } from "react-router-dom";
import ProjectPage from "../components/ProjectPage";

// const API_TOKEN = `${process.env.REACT_APP_CONTENTFUL_TOKEN}`;
// const SPACE = `${process.env.REACT_APP_SPACE_ID}`;

// Contentful delivery API
const contentful = require("contentful");
const client = contentful.createClient({
  space: process.env.REACT_APP_SPACE_ID,
  accessToken: process.env.REACT_APP_CONTENTFUL_TOKEN,
});

function Works() {
  const [entries, setEntries] = useState([]);

  // Get all entries
  useEffect(() => {
    client
      .getEntries()
      .then((response) => setEntries(response.items))
      .catch(console.error);
  }, []);

  console.log(entries);

  let { url } = useRouteMatch();
  const ProjectCards = () =>
    entries.map((item, index) => (
      <NavLink
        key={index}
        to={`/project/${item.fields.projectSlug}`}
        className="wrapper"
      >
        <img src={item.fields.heroImage.fields.file.url} alt="card-pic" />
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
}

export default Works;
