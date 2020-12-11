import React from "react";
import "../styles/Footer.scss";
import { NavLink } from "react-router-dom";
import LinkedinImg from "../assets/in-new.svg";
import InstaImg from "../assets/insta-new.svg";

const Footer = () => {
  const linksData = [
    { name: "Works", to: "/" },
    { name: "About", to: "/about" },
    { name: "Contact", to: "/contact" },
  ];

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
          <ul className="footer-column">
            <li>Contact us:</li>
            <li>hello@kohocreative.com</li>
            <li>+358 99 99 99 999</li>
          </ul>
          <ul className="footer-column">
            <ul className="some">
              <li>
                <a href="https://www.linkedin.com/company/kohocreative/">
                  <img src={LinkedinImg} alt="linkedin" />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/kohocreative/">
                  <img src={InstaImg} alt="linkedin" />
                </a>
              </li>
            </ul>
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
            <li>kohocreative.com © 2020</li>
          </ul>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
