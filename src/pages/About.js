import React, { useContext } from "react";
import "../styles/About.scss";
import { EntriesContext } from "../EntriesContext";

function About() {
  const { entries } = useContext(EntriesContext);

  // Filter about section posts
  const aboutData = [];
  entries.filter((entry) =>
    entry.sys.contentType.sys.id === "about" ? aboutData.push(entry) : null
  );

  console.log(aboutData);

  // Filter services section posts
  const servicesData = [];
  entries.filter((entry) =>
    entry.sys.contentType.sys.id === "services"
      ? servicesData.push(entry)
      : null
  );

  console.log(servicesData);

  // Filter services section posts
  const reasonsData = [];
  entries.filter((entry) =>
    entry.sys.contentType.sys.id === "reason" ? reasonsData.push(entry) : null
  );

  console.log(reasonsData);

  return (
    <>
      <div className="about-container">
        <section className="about-section">
          <div className="about-item">
            <h2 className="about-header">About</h2>
          </div>
          <div className="about-item">
            {aboutData.map((i, index) => (
              <div className="inner-item" key={index}>
                {i.fields.aboutText}
              </div>
            ))}
          </div>
        </section>
        <section className="about-section">
          <div className="about-item">
            <h2 className="about-header">Services</h2>
          </div>
          <div className="about-item">
            {servicesData.map((i, index) => (
              <div className="inner-item" key={index}>
                <h3> {i.fields.serviceName}</h3>
                <p> {i.fields.serviceType}</p>
              </div>
            ))}
          </div>
        </section>
        <section className="about-section">
          <div className="about-item">
            <h2 className="about-header">Why Us?</h2>
          </div>
          <div className="about-item">
            {reasonsData.map((i, index) => (
              <div className="inner-item" key={index}>
                <h3> {i.fields.reasonName}</h3>
                <p> {i.fields.reasonText}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}

export default About;
