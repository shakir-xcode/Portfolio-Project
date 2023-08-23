// import { Link } from "gatsby";
import React from "react";

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
        <ul className=" text-[1.2rem] font-semibold text-[var(--text-primary)] mt-24 ">
          {menuItems.map((item, index) => (
            <ul
              key={index}
              className="mt-2 py-4 px-6 hover:bg-slate-500 cursor-pointer"
            >
              <a className="">{item}</a>
            </ul>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default MobileMenu;
