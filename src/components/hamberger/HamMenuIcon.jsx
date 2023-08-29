import React from "react";
import "./HamStyle.css";

function HamMenuIcon({ toggleMenu, menuState }) {
  return (
    <div className="absolute right-5 top-2  z-20 block md:hidden">
      <button
        onClick={() => {
          toggleMenu();
        }}
        id="menu-btn"
        className={`${menuState ? "open" : ""} hamburger focus:outline-none`}
      >
        <span className="hamburger-top"></span>
        <span className="hamburger-middle"></span>
        <span className="hamburger-bottom"></span>
      </button>
    </div>
  );
}

export default HamMenuIcon;
