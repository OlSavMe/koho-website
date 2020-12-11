import React, { useEffect, useState } from "react";
import "../styles/ProjectPage.scss";
import { useParams } from "react-router-dom";

// Contentful delivery API
const contentful = require("contentful");
const client = contentful.createClient({
  space: process.env.REACT_APP_SPACE_ID,
  accessToken: process.env.REACT_APP_CONTENTFUL_TOKEN,
});

const ProjectPage = () => {
  const { id } = useParams();
  const [many, setMany] = useState([]);
  const [readMore, setReadMore] = useState(false);

  const toggleReadMore = () => {
    setReadMore(!readMore);
    //     setHeight(unfold ? "0px" : `${details.current.scrollHeight}px`);
  };

  // Get all entries
  useEffect(() => {
    client
      .getEntries()
      .then((response) => setMany(response.items))
      .catch(console.error);
  }, []);

  console.log(many);

  // Filter blog posts
  const singleData = [];
  many.filter((single) =>
    single.sys.id === `${id}` ? singleData.push(single) : null
  );

  console.log(singleData);

  return (
    <div className="project-page">
      {singleData.map((item, i) => (
        <div className="page-container" key={i}>
          <img
            src={item.fields.heroImage.fields.file.url}
            alt="pic"
            className="project-pic"
          />
          <section className="project-about">
            <figcaption className="project-caption">
              {item.fields.projectTitle}{" "}
            </figcaption>

            <div className="project-texts">
              <p className="text-about"> {item.fields.aboutTheProject} </p>
              <p className="text-about">
                {item.fields.readMore ? (
                  <strong onClick={toggleReadMore}>Read more</strong>
                ) : null}
              </p>

              <p className={readMore ? "read-more" : "read-less"}>
                {item.fields.readMore}
              </p>
            </div>
          </section>
        </div>
      ))}
    </div>
  );
};

export default ProjectPage;
