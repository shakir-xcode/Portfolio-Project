import React from "react";
import { borderColors } from "../config/styleConfig";
import { Link } from "react-router-dom";

function ProjectCard({
  previewImage,
  title,
  description,
  features,
  technologies,
  live,
  source,
  slideImages,
}) {
  let borderColorIndex = Math.floor(Math.random() * borderColors.length);

  return (
    <div className=" flex flex-col gap-3 max-w-[390px] p-2 pb-4 bg-bg-accent">
      <Link to="slideShow" state={{ slideImages }}>
        <img
          src={previewImage}
          alt="project img"
          className="w-full h-[290px] object-cover object-top hover:scale-105 transition duration-300"
          title="click to see perview"
        />
      </Link>

      {/* title and description */}
      <div className="flex flex-col gap-2">
        <h1 className="text-xl font-bold">{title || "title"}</h1>
        <p className="-mt-2 text-sm tracking-wider ">
          {description || "description"}
        </p>
      </div>
      {/* Features */}
      <div>
        <h2 className=" font-bold">Features</h2>
        <ul className=" list-disc ml-6">
          {features
            ? features.map((feature, index) => <li key={index}>{feature}</li>)
            : ""}
        </ul>
      </div>

      {/* technologies */}
      <div className="mb-2">
        <h2 className=" font-bold ">Technologies</h2>
        <div className="flex gap-2 my-1 items-center flex-wrap">
          {technologies
            ? technologies.map((tech, index) => {
                const bColor =
                  borderColors[++borderColorIndex % borderColors.length];

                return (
                  <div
                    key={index}
                    style={{
                      boxShadow: `0px 0px 5px ${bColor}`,
                      borderColor: `${bColor}`,
                    }}
                    className={`font-bold px-2 py-[1px] border-2 rounded-md `}
                  >
                    {tech}
                  </div>
                );
              })
            : ""}
        </div>
      </div>

      <div className="flex gap-2 self-end mt-auto">
        <a
          href={source}
          target="_blank"
          className="px-3 py-1 font-bold rounded border border-slate-500 bg-transparent "
        >
          Source
        </a>
        <a
          href={live}
          target="_blank"
          className="px-3 py-1 font-bold rounded border border-slate-500 bg-transparent "
        >
          Live
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;
