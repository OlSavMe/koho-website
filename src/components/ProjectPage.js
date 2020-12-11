import React, { useEffect, useState } from "react";
import "../styles/ProjectPage.scss";

const ProjectPage = ({ props }) => {
  //   const slug = props.fields.projectSlug;
  //   const entry_id = props.match.params.sys.environment.id;

  // Get all entries
  //   useEffect(() => {
  //     client
  //       .getEntry({ entry_id })
  //       .then((response) => setEntry(response.items))
  //       .catch(console.error);
  //   }, [entry_id]);

  //   console.log(slug);

  return (
    <div className="project-page">
      <h1>project</h1>
      {/* <img src={pic} alt="pic" className="project-pic" /> */}
      <figcaption></figcaption>
    </div>
  );
};

export default ProjectPage;
