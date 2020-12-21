import React from "react";
import "../styles/Contact.scss";

function Contact() {
  const contactData = [
    {
      phone: "+358 99 9999999",
      email: "hello@kohocreative.com",
      linkedin: "https://www.linkedin.com/company/kohocreative/",
      instagram: "https://www.instagram.com/kohocreative/",
    },
  ];

  return (
    <div className="contact-container">
      <section className="contact-section">
        <div className="contact-item">
          <h2 className="contact-header">Get In Touch</h2>
        </div>
        <div className="contact-item">
          {contactData.map((i, index) => (
            <div key={index} className="inner-item">
              <a href={`tel:+${i.phone}`}>{i.phone}</a>
              <a href={`mailto:${i.email}`}>{i.email}</a>
              <h3>Social Media</h3>
              <a
                href={`${i.linkedin}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
              <a
                href={`${i.instagram}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Contact;
