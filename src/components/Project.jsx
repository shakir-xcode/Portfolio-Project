import React from "react";
import ProjectCard from "./ProjectCard";
import { projects } from "../projects";

function Project() {
  return (
    <div className="mt-24 flex flex-col gap-8 items-center  ">
      <h1 className="font-bold text-3xl">
        <span className="text-accent text-[1.7rem] ">&lt;</span>Projects
        <span className="text-accent text-[1.7rem] ">/&gt;</span>
      </h1>

      <div className=" flex flex-col sm:flex-row flex-wrap justify-center items-center gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.id} />
        ))}
      </div>
    </div>
  );
}

export default Project;
