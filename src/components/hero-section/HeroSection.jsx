import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { FiChevronDown } from "react-icons/fi";
import { FaLinkedin } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
import { links } from "../../config/config";

function HeroSection() {
  return (
    <div className="relative flex justify-center items-end min-h-[540px] mt-[3em]">
      <div className="text-2xl sm:text-3xl lg:text-4xl  font-semibold flex flex-col md:gap-2 absolute top-[15%] left-[10%]">
        <h1 className="hero-text hero1 relative w-fit ">
          Hello,
          <span className="span-overlay span1"></span>
        </h1>
        <div className="relative flex w-fit flex-wrap">
          <h1 className="hero-text hero2 min-w-min">I am&nbsp;</h1>
          <strong className="accent-color text-accent">Shakir</strong>
          <span className="span-overlay span2"></span>
        </div>
        <h1 className="write-cursor">
          A front end developer<span className="span-cursor"></span>
        </h1>
        <p
          className="text-[0.8rem] md:text-sm -mt-1 md:-mt-2 font-medium 
                text-secondary-color"
        >
          I love building interactive, digital experiences on web
        </p>
        <HashLink
          smooth
          to="/#contact-section"
          className=" px-7 py-3 mt-4 border border-accent rounded-sm 
                self-start font-medium text-sm sm:text-sm hover:bg-btn-hover "
        >
          Let's get in touch!
        </HashLink>
        <div className=" flex gap-3 mt-3 text-accent">
          <Link to={links.linkedIn_link} target="_blank">
            <FaLinkedin
              className=" cursor-pointer hover:scale-110 transition"
              size={30}
            />
          </Link>

          <Link to={links.github_link} target="_blank">
            <AiFillGithub
              className=" cursor-pointer hover:scale-110 transition"
              size={30}
            />
          </Link>
          {/* <p>linkedin</p>
          <p>github</p> */}
        </div>
      </div>
      <div>
        {/* <p>arrow</p> */}
        <FiChevronDown
          className={` text-primary-color rounded-full 
                animate-bounce`}
          size={32}
        />
      </div>
    </div>
  );
}

export default HeroSection;
