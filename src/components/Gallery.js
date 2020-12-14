import React, { useState } from "react";

const Gallery = (props) => {
  const images = props.item.fields.projectGallery;
  console.log(images.length);

  const [lightbox, setLightbox] = useState(false);
  const [imageToShow, setImageToShow] = useState("");

  const showImage = (image) => {
    //set imageToShow to be the one that's been clicked on
    setImageToShow(image);
    //set lightbox visibility to true
    setLightbox(true);
  };

  const hideLightBox = () => {
    setLightbox(false);
  };

  //show next image in lightbox
  const showNext = (e) => {
    e.stopPropagation();
    let currentIndex = images.indexOf(imageToShow);
    if (currentIndex >= images.length - 1) {
      currentIndex = 0;
    } else {
      let nextImage = images[currentIndex + 1];
      setImageToShow(nextImage);
    }
  };

  //show previous image in lightbox
  const showPrev = (e) => {
    e.stopPropagation();
    let currentIndex = images.indexOf(imageToShow);
    if (currentIndex <= 0) {
      currentIndex = images.length;
    } else {
      let nextImage = images[currentIndex - 1];
      setImageToShow(nextImage);
    }
  };

  //   // for navigation with left and right keys
  //   function moveKeys(e) {
  //     // if (!e) e = window.event;
  //     if (e.keyCode === 37) {
  //       alert("hi!");
  //     } else if (e.keyCode === 39) {
  //       alert("hi!");
  //     }
  //   }

  // const handleKeyDown = (x) => {
  //   if (x.keyCode === 37) {
  //     showPrev();
  //   } else if (x.keyCode === 39) {
  //     showNext();
  //   }
  // };

  return (
    <section className="project-gallery">
      {props.item.fields.projectGallery.map((image, x) => (
        <div
          className="project-image-wrapper"
          key={x}
          onClick={() => showImage(image)}
        >
          <img src={image.fields.file.url} alt="card-pic" />
        </div>
      ))}
      {lightbox ? (
        <div id="lightbox">
          <span className="right" onClick={hideLightBox}>
            &#9587;
          </span>

          <span className="next" onClick={showNext}>
            {" "}
            &#8963;
          </span>

          <span className="prev" onClick={showPrev}>
            {" "}
            &#8963;
          </span>

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
    </section>
  );
};
export default Gallery;