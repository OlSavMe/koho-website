import React from "react";
import "../styles/Header.scss";
import Menu from "./Menu";

const Header = () => {

 
  return (
    <nav>
      <div className="header">
          <h2 className="logo">.koho</h2>
        <Menu />
        <h1 className="menu-icon">menu</h1>
      </div>
    </nav>
  );
};
export default Header;