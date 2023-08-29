import React from "react";
import ProjectCard from "./ProjectCard";
import { projects } from "../config/config";

function Project() {
  return (
    <section
      id="projects-section"
      className="relative mt-24 flex flex-col gap-8 items-center  "
    >
      <h1 className="font-bold text-3xl">
        <span className="text-accent text-[1.7rem] ">&lt;</span>Projects
        <span className="text-accent text-[1.7rem] ">/&gt;</span>
      </h1>

      <div className=" flex flex-col sm:flex-row flex-wrap justify-center gap-6">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            previewImage={project.previewImage}
            title={project.title}
            description={project.description}
            features={project.features}
            technologies={project.technologies}
            live={project.live}
            source={project.source}
            slideImages={project.slideImages}
          />
        ))}
      </div>
    </section>
  );
}

export default Project;
