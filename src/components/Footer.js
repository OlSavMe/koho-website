import React, { useContext } from "react";
import "../styles/Footer.scss";
import { NavLink } from "react-router-dom";
import LinkedinImg from "../assets/in-new.svg";
import InstaImg from "../assets/insta-new.svg";
import { EntriesContext } from "../EntriesContext";

const Footer = () => {
  const { entries } = useContext(EntriesContext);
  const linksData = [
    { name: "Works", to: "/" },
    { name: "About", to: "/about" },
    { name: "Contact", to: "/contact" },
  ];

  // Filter project page posts
  const contactData = [];
  entries.filter((entry) =>
    entry.sys.contentType.sys.id === "contactData"
      ? contactData.push(entry)
      : null
  );

  const NavLinks = () =>
    linksData.slice(1).map((link, index) => (
      <NavLink key={index} to={link.to} activeClassName="selectedLink">
        {link.name}
      </NavLink>
    ));

  return (
    <footer>
      <div className="footer-container">
        <section className="footer-main">
          {contactData.map((i, index) => (
            <ul className="footer-column" key={index}>
              <li>Contact us:</li>
              <li>
                {" "}
                <a href={`mailto:${i.fields.email}`}>{i.fields.email}</a>
              </li>
              <li>
                {" "}
                <a href={`tel:+${i.fields.phone}`}>{i.fields.phone}</a>
              </li>
            </ul>
          ))}
          <ul className="footer-column">
            {contactData.map((i, index) => (
              <ul className="some" key={index}>
                <li>
                  <a
                    href={`${i.fields.linkedinUrl}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={LinkedinImg} alt="linkedin" />
                  </a>
                </li>
                <li>
                  <a
                    href={`${i.fields.instagramUrl}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={InstaImg} alt="linkedin" />
                  </a>
                </li>
              </ul>
            ))}
          </ul>
          <ul className="footer-column">
            <NavLink to="/" exact activeClassName="selectedLink">
              Works
            </NavLink>
            <NavLinks />
          </ul>
        </section>
        <section className="footer-copyright">
          <ul className="footer-column">
            <li>kohocreative.com © 2021</li>
            <li>
              Website created by{" "}
              <a
                href="https://savkao.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                OlgaSavka
              </a>
            </li>
          </ul>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
