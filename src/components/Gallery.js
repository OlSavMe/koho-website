import React, { useState, useCallback, useEffect } from "react";
import Close from "../assets/koho_close white.svg";
import NextArrow from "../assets/koho_next arrow white.svg";
import PrevArrow from "../assets/koho_previous arrow white.svg";

const Gallery = (props) => {
  const images = props.item.fields.projectGallery;

  const [lightbox, setLightbox] = useState(false);
  const [imageToShow, setImageToShow] = useState("");
  const [doubleClick, setDoubleClick] = useState(false);

  const [touchStart, setTouchStart] = React.useState(0);
  const [touchEnd, setTouchEnd] = React.useState(0);

  // enabling swiping in mobile version
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 70) {
      showNext();
    }

    if (touchStart - touchEnd < -70) {
      showPrev();
    }
  };

  const showImage = (image) => {
    //set imageToShow to the clicked one
    setImageToShow(image);
    //set lightbox visibility to true
    setLightbox(true);
  };

  const hideLightBox = () => {
    setLightbox(false);
  };

  //to next img
  const showNext = useCallback(
    (e) => {
      let currentIndex = images.indexOf(imageToShow);
      if (currentIndex >= images.length - 1) {
        setImageToShow(images[0]);
      } else {
        setImageToShow(images[currentIndex + 1]);
      }
    },
    [images, imageToShow]
  );

  //to previous img
  const showPrev = useCallback(
    (e) => {
      let currentIndex = images.indexOf(imageToShow);
      if (currentIndex <= 0) {
        setImageToShow(images[images.length - 1]);
      } else {
        setImageToShow(images[currentIndex - 1]);
      }
    },
    [images, imageToShow]
  );

  const toggleDoubleClick = (e) => {
    setDoubleClick(!doubleClick);
  };

  const moveKeys = useCallback(
    (event) => {
      const key = event.key;
      if (key === "ArrowRight") {
        showNext();
      } else if (key === "ArrowLeft") {
        showPrev();
      }
    },
    [showNext, showPrev]
  );

  window.addEventListener("keydown", (event, lightbox, doubleClick) => {
    if ((lightbox = true) && (doubleClick = true) && event.keyCode === 27) {
      setDoubleClick(false);
    }
  });

  useEffect(() => {
    window.addEventListener("keydown", moveKeys);
    // cleanup this component
    return () => {
      window.removeEventListener("keydown", moveKeys);
    };
  }, [moveKeys]);

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
            <div className="count-wrap">
              <span id="count">{`${images.indexOf(imageToShow) + 1}/${
                images.length
              }`}</span>
            </div>

            <img
              id="lightbox-img"
              src={imageToShow.fields.file.url}
              alt="img-this"
              onDoubleClick={toggleDoubleClick}
            />
            <span className="tooltip-in">Doubleclick to zoom</span>
            <div className="dots">
              {images.map((i, index) => (
                <span
                  key={index}
                  className={
                    index === images.indexOf(imageToShow) ? "dot active" : "dot"
                  }
                ></span>
              ))}
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </section>
  );
};
export default Gallery;
