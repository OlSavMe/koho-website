import React from "react";
import Burger from "../assets/menu.svg";
import Close from "../assets/close.svg";

const MenuIcon = ({ open, setOpen }) => {
  return (
    <div
        open={open}
        onClick={() => setOpen(!open)}
      >
              {!open ? (<img className="menu-icon" src={Burger} alt="burger" />) :
             (<img className="menu-icon" src={Close} alt="close" />) }            
    
    </div>
  );
};
export default MenuIcon;