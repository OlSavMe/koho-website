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
  const [allEntries, setAllEntries] = useState([]);
  const [readMore, setReadMore] = useState(false);
  const [lightbox, setLightbox] = useState(false);
  const [imageToShow, setImageToShow] = useState("");

  const toggleReadMore = () => {
    setReadMore(!readMore);
  };

  // Get all entries
  useEffect(() => {
    client
      .getEntries()
      .then((response) => setAllEntries(response.items))
      .catch(console.error);
  }, []);

  console.log(allEntries);

  // Filter single post by id posts
  const singleData = [];
  allEntries.filter((single) =>
    single.sys.id === `${id}` ? singleData.push(single) : null
  );

  console.log(singleData);

  const showImage = (image) => {
    //set imageToShow to be the one that's been clicked on
    setImageToShow(image);
    //set lightbox visibility to true
    setLightbox(true);
  };

  const hideLightBox = () => {
    setLightbox(false);
  };

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
              <span>
                {item.fields.readMore ? (
                  <strong onClick={toggleReadMore}>
                    {readMore ? "" : "Read more"}
                  </strong>
                ) : null}
              </span>
              <p className={readMore ? "read-more" : "read-less"}>
                {item.fields.readMore}
              </p>
              <span>
                {item.fields.readMore ? (
                  <strong onClick={toggleReadMore}>
                    {readMore ? "Read less" : ""}
                  </strong>
                ) : null}
              </span>
            </div>
          </section>
          <section className="project-gallery">
            {item.fields.projectGallery.map((image, x) => (
              <div className="project-image-wrapper" key={x}>
                <img
                  src={image.fields.file.url}
                  alt="card-pic"
                  onClick={() => showImage(image)}
                />
              </div>
            ))}
          </section>
        </div>
      ))}
      {lightbox ? (
        <div id="lightbox" onClick={hideLightBox}>
          <div className="img-wrapper">
            <img
              id="lightbox-img"
              src={imageToShow.fields.file.url}
              alt="img-this"
            />
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default ProjectPage;
