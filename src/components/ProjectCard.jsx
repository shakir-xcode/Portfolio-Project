import React from "react";
import placeholder from "../assets/project_placeholder.jpg";
import icon from "../assets/skillIcons/icon.png";

function ProjectCard() {
  return (
    <div className=" flex flex-col gap-3 max-w-[300px] p-2 bg-bg-accent">
      <img src={placeholder} alt="project img" className="w-full" />
      <h1 className="text-xl font-bold">This is project name</h1>
      <p className="-mt-2 text-sm text-secondary-color">
        this is some project description this is some project description this
        is some project description this is some project description this is
        some project description
      </p>
      <h2 className=" font-bold">technologies</h2>
      <div>
        <div className=" flex gap-2 w-5">
          <img src={icon} alt="img" className="w-full" />
          <img src={icon} alt="img" className="w-full" />
          <img src={icon} alt="img" className="w-full" />
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
