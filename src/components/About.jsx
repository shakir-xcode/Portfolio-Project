import React from "react";
import TechCard from "./TechCard";
import { skills } from "../config/config";

function About() {
  return (
    <section
      id="about-section"
      className=" flex flex-col lg:flex-row gap-14 mt-24 "
    >
      <div
        data-aos="fade-right"
        data-aos-duration="800"
        data-aos-easing="ease-out-sine"
        className=" flex flex-col gap-3 md:gap-8 items-center lg:w-[70%] "
      >
        <h1 className="font-bold text-3xl">
          <span className="text-accent text-[1.7rem] ">&lt;</span>
          About Me
          <span className="text-accent text-[1.7rem] ">/&gt;</span>
        </h1>
        <div className=" text-sm sm:text-base text-secondary-color  flex flex-col gap-2">
          {/* I am a passionate and skilled React developer. I love creating dynamic
          and responsive web applications. I have a strong understanding of
          modern web development practices and am proficient in <b>HTML</b>,
          CSS3, and JavaScript. In addition to my technical skills, I possess
          excellent problem-solving abilities and a strong desire to stay
          updated with the latest advancements in the React ecosystem. I am
          constantly learning and exploring new libraries, frameworks, and best
          practices to enhance my skill set.{" "} */}
          <p>
            I am a passionate software developer with a solid foundation in
            Information Technology. I hold both a{" "}
            <b>Bachelor's and a Master's degree in Information Technology</b>{" "}
            from the <b>University of Kashmir</b>, where I honed my skills and
            developed a strong academic background.
          </p>
          <p>
            My expertise lies in <b>full-stack development</b>, and I specialize
            in the <b>MERN (MongoDB, Express.js, React.js, Node.js) stack</b>.
            Through hands-on projects and academic pursuits, I've cultivated a
            deep understanding of modern web technologies.
          </p>
          <p>
            Currently seeking internship opportunities to apply and enhance my
            skills in a real-world setting. I am eager to contribute my
            knowledge to dynamic projects and learn from experienced
            professionals in the field.
          </p>
        </div>
      </div>

      {/* Technical skills */}
      <div
        data-aos="fade-left"
        data-aos-duration="800"
        data-aos-easing="ease-out-sine"
        className=" flex flex-col gap-8 justify-center items-center "
      >
        <h1 className="font-bold text-3xl">
          <span className="text-accent text-[1.7rem] ">&lt;</span>
          Technical Skills
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
