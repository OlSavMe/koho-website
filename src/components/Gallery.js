import React, { useState } from "react";
import Close from "../assets/koho_close white.svg";
import NextArrow from "../assets/koho_next arrow white.svg";
import PrevArrow from "../assets/koho_previous arrow white.svg";

const Gallery = (props) => {
  const images = props.item.fields.projectGallery;
  console.log(images.length);

  const [lightbox, setLightbox] = useState(false);
  const [imageToShow, setImageToShow] = useState("");
  const [doubleClick, setDoubleClick] = useState(false);

  const [touchStart, setTouchStart] = React.useState(0);
  const [touchEnd, setTouchEnd] = React.useState(0);

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 70) {
      // do your stuff here for left swipe
      showNext();
    }

    if (touchStart - touchEnd < -70) {
      // do your stuff here for right swipe
      showPrev();
    }
  };

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
    // e.stopPropagation();
    let currentIndex = images.indexOf(imageToShow);
    if (currentIndex >= images.length - 1) {
      setLightbox(false);
    } else {
      let nextImage = images[currentIndex + 1];
      setImageToShow(nextImage);
    }
  };

  //show previous image in lightbox
  const showPrev = (e) => {
    // e.stopPropagation();
    let currentIndex = images.indexOf(imageToShow);
    if (currentIndex <= 0) {
      setLightbox(false);
    } else {
      let nextImage = images[currentIndex - 1];
      setImageToShow(nextImage);
    }
  };

  const toggleDoubleClick = (e) => {
    setDoubleClick(!doubleClick);
  };

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
          <img
            className="close-icon"
            src={Close}
            alt="close"
            onClick={hideLightBox}
          />

          <img className="next" src={NextArrow} alt="next" onClick={showNext} />

          <img className="prev" src={PrevArrow} alt="prev" onClick={showPrev} />

          <div
            className={doubleClick ? "img-wrapper-dbc" : "img-wrapper"}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <img
              id="lightbox-img"
              src={imageToShow.fields.file.url}
              alt="img-this"
              onDoubleClick={toggleDoubleClick}
            />
            <span id="tooltip-in">Doubleclick to zoom in / out</span>
            {/* <span id="tooltip-out">Doubleclick to zoom out</span> */}
          </div>
        </div>
      ) : (
        ""
      )}
    </section>
  );
};
export default Gallery;
