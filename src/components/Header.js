import React from "react";
import "../styles/Header.scss";
import Menu from "./Menu";
import { Link } from "react-router-dom";
import LogoBlack from "../assets/new-logo-black.jpeg";
import MenuIcon from "../components/MenuIcon";

const Header =  ({ open, setOpen }) => {

 
  return (
    <nav>
      <div className="header">
      <Link className="logo" to="/">
        <img src={LogoBlack} alt="logo" />
      </Link>
        <Menu />
     <MenuIcon  open={open} setOpen={setOpen}/>
      </div>
    </nav>
  );
};
export default Header;