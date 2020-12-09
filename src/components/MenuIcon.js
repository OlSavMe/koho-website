import React from "react";

const MenuIcon = ({ open, setOpen }) => {
  return (
    <div
        open={open}
        onClick={() => setOpen(!open)}
      >
              {!open ? (<h1 className="menu-icon">menu</h1>) :
             ( <h1 className="menu-icon">close</h1>) }            
    
    </div>
  );
};
export default MenuIcon;