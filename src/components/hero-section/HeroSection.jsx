import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { FiChevronDown } from "react-icons/fi";
import { FaLinkedin } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
import { links } from "../../config/config";
import coder_illustration from "../../assets/coder.svg";
import "./heroStyle.css";

function HeroSection() {
  return (
    <div className=" relative flex flex-col justify-center items-center  min-h-[590px]  mt-[3em] pl-0">
      <div className="absolute inset-0 -z-30">
        <p className=" absolute max-w-xl hidden md:block lg:text-[300px] font-bold   opacity-50 right-9 top-[100px]">
          <img src={coder_illustration} />
        </p>
      </div>
      <div
        data-aos="zoom-in"
        data-aos-duration="800"
        data-aos-easing="ease-out-sine"
        className="   mt-auto ml-0 sm:ml-8 mr-auto text-4xl sm:text-5xl md:text-6xl flex flex-col md:gap-2 "
      >
        <h1 className=" ">Hello,</h1>
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
          className="text-[10px] sm:text-[0.9rem] sm:mt-2
                text-secondary-color "
        >
          I love building interactive, digital experiences on web
        </p>
        <HashLink
          smooth
          to="/#contact-section"
          className=" burst  px-7 py-3 mt-4 border border-accent rounded-sm 
                self-start font-semibold text-sm sm:text-sm duration-500"
        >
          Let's get in touch!
        </HashLink>
        {/* <CustomButton /> */}
        <div className=" flex gap-3 mt-3 text-accent">
          <Link to={links.linkedIn_link} target="_blank">
            <FaLinkedin
              className=" cursor-pointer hover:scale-125 duration-500"
              size={30}
              title="linkedIn"
            />
          </Link>

          <Link to={links.github_link} target="_blank">
            <AiFillGithub
              className=" cursor-pointer hover:scale-125 duration-500"
              size={30}
              title="github"
            />
          </Link>
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
