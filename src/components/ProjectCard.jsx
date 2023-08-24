import React from "react";
import placeholder from "../assets/project_placeholder.jpg";

function ProjectCard({ title, description, features, technologies }) {
  const borderColors = [
    "rgb(220 38 38)",
    "rgb(37 99 235)",
    "rgb(147 51 234)",
    "rgb(234 88 12)",
    "rgb(22 163 74)",
    "rgb(79 70 229)",
  ];
  let borderColorIndex = Math.floor(Math.random() * borderColors.length);

  return (
    <div className=" flex flex-col gap-3 max-w-[340px] p-2 pb-4 bg-bg-accent">
      <img src={placeholder} alt="project img" className="w-full" />
      <h1 className="text-xl font-bold">{title || "title"}</h1>
      <p className="-mt-2 text-sm text-secondary-color">
        {description || "description"}
      </p>
      <div>
        <h2 className=" font-bold">Features</h2>
        <ul className=" list-disc ml-6">
          {features
            ? features.map((feature, index) => <li key={index}>{feature}</li>)
            : ""}
        </ul>
      </div>

      <div>
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
                      boxShadow: `0px 0px 9px ${bColor}`,
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
    </div>
  );
}

export default ProjectCard;
