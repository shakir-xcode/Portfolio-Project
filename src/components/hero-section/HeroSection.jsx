import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { FiChevronDown } from "react-icons/fi";
import { FaLinkedin } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
import { links } from "../../config/config";
import "./heroStyle.css";

function HeroSection() {
  return (
    <div className="  border-white relative flex flex-col justify-center items-center  min-h-[550px]  mt-[3em] pl-0">
      <div className="absolute inset-0   border-white -z-30">
        <p className=" absolute hidden lg:block lg:text-[300px] font-bold  text-white/5 opacity-20 right-9 top-[40px]">
          <span className="text-accent">&lt;</span>
          <span className="text-accent ">/</span>
          <span className="text-accent">&gt;</span>
        </p>
      </div>
      <div className="   mt-auto ml-8 mr-auto text-3xl sm:text-5xl md:text-6xl flex flex-col md:gap-2 ">
        <h1 className="md:text-6xl  ">
          Hello,
          {/* <span className="span-overlay span1"></span> */}
        </h1>
        <div className="  relative flex flex-wrap ">
          <h1 className="">I am&nbsp;</h1>
          <strong className="accent-color text-accent">Shakir</strong>
          {/* <div className="content ">
            <h2 className="absolute">Shakir</h2>
            <h2 className="absolute">Shakir</h2>
          </div> */}
          <span className="span-overlay span2"></span>
        </div>
        <h1 className="write-cursor">
          A full-stack developer<span className="span-cursor"></span>
        </h1>
        <p
          className="text-[0.6rem] md:text-sm -mt-1 md:-mt-2 font-medium 
                text-secondary-color "
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
      <div className="mt-auto">
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
