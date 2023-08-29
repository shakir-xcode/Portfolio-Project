import React from "react";
import { HashLink } from "react-router-hash-link";

function MobileMenu(props) {
  const menuItems = ["About", "Projects", "Contact"];
  const transitionStyle = {
    height: "100vh",
    transition: "all 0.25s linear",
  };
  return (
    <div className="">
      <div
        style={transitionStyle}
        className={`fixed z-10 bg-nav-drawer-bg w-[60%] sm:w-[40%] top-0 ${
          props.visible ? "right-0" : "-right-[60%]"
        } md:hidden transition-all`}
      >
        <div className="flex flex-col text-[1.2rem] font-semibold text-[var(--text-primary)] mt-24 ">
          {menuItems.map((item, index) => (
            <HashLink
              smooth
              to={`/#${item.toLowerCase()}-section`}
              onClick={() => props.resetMobileMenu()}
              key={index}
              className="mt-2 py-4 px-6 hover:bg-slate-500 "
            >
              <span className="">{item}</span>
            </HashLink>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MobileMenu;
