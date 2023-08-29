import React, { useState } from "react";
import { HashLink } from "react-router-hash-link";
import HamMenuIcon from "./hamberger/HamMenuIcon";
import MobileMenu from "./hamberger/MobileMenu";
import logo from "../assets/logo.png";

function Navbar() {
  const [mobileMenuVisibility, setMobileMenuVisibility] = useState(false);

  const toggleMobileMenu = () => {
    console.log("toggled..");
    setMobileMenuVisibility((pre) => !pre);
  };

  const menuItems = ["About", "Projects", "Contact"];

  const navStyle = {
    transition: "border 0.3s linear",
  };

  return (
    <nav className=" fixed md:absolute -mt-1 md:mt-2 bg-color-bg w-full z-50 min-h-[3.5em] px-5 md:px-14 lg:px-24">
      <div className=" flex justify-between items-center relative mt-2">
        <div className=" w-10 relative">
          <img alt="logo" src={logo} />
        </div>

        {/* -------------- Hideable */}
        <div className=" md:flex gap-16 hidden ">
          {menuItems.map((item, index) => (
            <HashLink
              smooth
              to={`/#${item.toLowerCase()}-section`}
              key={index}
              style={navStyle}
              className="cursor-pointer text-[0.95rem] py-1 border-b-2 border-transparent hover:border-accent "
            >
              <span className="text-accent">0{index + 1}.</span>
              {item}
            </HashLink>
          ))}
        </div>
        {/* ----------------- Hamburger icon ------------- */}
        <HamMenuIcon
          menuState={mobileMenuVisibility}
          toggleMenu={toggleMobileMenu}
        />
      </div>
      {/* ----------------- Nav Drawer ------------- */}
      <MobileMenu
        visible={mobileMenuVisibility}
        resetMobileMenu={toggleMobileMenu}
      />
    </nav>
  );
}

export default Navbar;
