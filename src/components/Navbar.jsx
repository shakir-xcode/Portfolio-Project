import React, { useState } from "react";
import HamMenuIcon from "./hamberger/HamMenuIcon";
import MobileMenu from "./hamberger/MobileMenu";
import logo from "../assets/logo.png";

function Navbar() {
  const [mobileMenuVisibility, setMobileMenuVisibility] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuVisibility(mobileMenuVisibility ? false : true);
  };

  const menuItems = ["About", "Projects", "Contact"];

  const navStyle = {
    transition: "border 0.3s linear",
  };

  return (
    <nav className="fixed md:absolute -mt-1 bg-color-bg w-full z-50 min-h-[3em] px-5 md:px-14 lg:px-24">
      <div className=" flex justify-between items-center relative mt-2">
        <div className=" w-10 relative">
          <img alt="logo" src={logo} />
        </div>

        {/* -------------- Hideable */}
        <div className=" md:flex gap-16 hidden ">
          {menuItems.map((item, index) => (
            <a
              key={index}
              style={navStyle}
              className="cursor-pointer text-[0.95rem] py-1 border-b-2 border-transparent hover:border-accent "
            >
              <span className="text-accent">0{index + 1}.</span>
              {item}
            </a>
          ))}
        </div>
        {/* ----------------- Hamburger icon ------------- */}
        <HamMenuIcon toggleMenu={toggleMobileMenu} />
      </div>
      {/* ----------------- Nav Drawer ------------- */}
      <MobileMenu visible={mobileMenuVisibility} />
    </nav>
  );
}

export default Navbar;
