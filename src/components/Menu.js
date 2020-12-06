import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Menu.scss";

const Menu = () => {

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
    <nav>
      <div className="menu">
        <NavLink to="/" exact activeClassName="selectedLink">
          Works
        </NavLink>
        <NavLinks />
      </div>
    </nav>
  );
};
export default Menu;