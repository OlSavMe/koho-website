import React, { useContext } from "react";
import "../styles/Contact.scss";
import { EntriesContext } from "../EntriesContext";

function Contact() {
  const { entries } = useContext(EntriesContext);

  // Filter contact page posts
  const contactData = [];
  entries.filter((entry) =>
    entry.sys.contentType.sys.id === "contactData"
      ? contactData.push(entry)
      : null
  );

  return (
    <div className="contact-container">
      <section className="contact-section">
        <div className="contact-item">
          <h2 className="contact-header">Get In Touch</h2>
        </div>
        <div className="contact-item">
          {contactData.map((i, index) => (
            <div key={index} className="inner-item">
              <a href={`tel:+${i.fields.phone}`}>{i.fields.phone}</a>
              <a href={`mailto:${i.fields.email}`}>{i.fields.email}</a>
              <h3>Social Media</h3>
              <a
                href={`${i.fields.linkedinUrl}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
              <a
                href={`${i.fields.instagramUrl}`}
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
