import React from "react";
import "../styles/MobileMenu.scss";
import { NavLink } from "react-router-dom";

const MobileMenu = ({ open, setOpen }) => {
  const handleClose = (e) => {
    setOpen(!open);
  };

  const linksData = [
    { name: "Works", to: "/" },
    { name: "About", to: "/about" },
    { name: "Contact", to: "/contact" },
  ];

  const NavLinks = () =>
    linksData.slice(1).map((link, index) => (
      <NavLink
        key={index}
        to={link.to}
        activeClassName="selectedLink"
        onClick={handleClose}
      >
        {link.name}
      </NavLink>
    ));

  return (
    <>
      <div className={open ? "menu-mobile" : "menu-mobile closed"}>
        <NavLink
          to="/"
          exact
          onClick={handleClose}
          activeClassName="selectedLink"
        >
          Works
        </NavLink>
        <NavLinks />
        <div className="menu-footer">
          <p>kohocreative.com</p>
        </div>
      </div>
    </>
  );
};
export default MobileMenu;
