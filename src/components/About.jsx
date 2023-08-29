import React from "react";
import TechCard from "./TechCard";
import { skills } from "../config/config";

function About() {
  return (
    <section
      id="about-section"
      className="flex flex-col md:flex-row gap-14 mt-24 "
    >
      <div className="flex flex-col gap-3 md:gap-8 items-center md:w-[70%] ">
        <h1 className="font-bold text-3xl">
          <span className="text-accent text-[1.7rem] ">&lt;</span>
          About Me
          <span className="text-accent text-[1.7rem] ">/&gt;</span>
        </h1>
        <p className=" text-secondary-color text-justify">
          I am a passionate and skilled React developer. I love creating dynamic
          and responsive web applications. I have a strong understanding of
          modern web development practices and am proficient in HTML5, CSS3, and
          JavaScript. In addition to my technical skills, I possess excellent
          problem-solving abilities and a strong desire to stay updated with the
          latest advancements in the React ecosystem. I am constantly learning
          and exploring new libraries, frameworks, and best practices to enhance
          my skill set.{" "}
        </p>
      </div>

      <div className=" flex flex-col gap-8 justify-center items-center ">
        <h1 className="font-bold text-3xl">
          <span className="text-accent text-[1.7rem] ">&lt;</span>
          Techniqal Skills
          <span className="text-accent text-[1.7rem] ">/&gt;</span>
        </h1>
        {/* flex gap-3 flex-wrap justify-center */}
        {/* grid grid-cols-3 justify-items-center */}
        <div className="sm:max-w-[70%] md:max-w-[100%] lg:max-w-[70%]  flex flex-wrap justify-center items-center gap-4 ">
          {skills.map((skill) => (
            <TechCard key={skill.id} icon={skill.icon} title={skill.tech} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
