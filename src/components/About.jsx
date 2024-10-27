import React from "react";
import Reveal from "./Reveal";

const About = () => {
  const UsingAtWork = [
    "JavaScript",
    "TypeScript",
    "HTML",
    "CSS",
    "tailwind",
    "React",
    "NodeJS",
    "Express",
    "MongoDB",
    "GitHub",
    "Figma",
  ];

  const learningRightNow = ["React Native", "Framer Motion"];

  const UsingAtWorkSkills = UsingAtWork.map((skill, index) => (
    <Skill skill={skill} index={index} />
  ));

  const learningRightNowSkills = learningRightNow.map((skill, index) => (
    <Skill skill={skill} index={index} />
  ));

  return (
    <div className="container text-text  pb-20" id="about">
      <Reveal>
        <h2 className="title">
          About<span className="text-primary">.</span>
        </h2>
      </Reveal>
      <div className="flex flex-col md:flex-row md:gap-3 gap-8">
        <div className="flex-1">
          <Reveal>
            <p>
              Hey! I'm Mohamed Ibrahim. I'm a Full Stack Developer from Egypt,
              Giza. I have more Frontend experience more than the backend,
              primarily React js and Next js, <br />I am open to learn new
              technoliges , And love learning and building with whatever tools
              are right for the job. I also have experience with UI/UX Design
              using figma
            </p>
            <br />
            <p>I am currently working as a freelancer in my free time .</p>
          </Reveal>
        </div>

        <div className="flex-1 md:max-w-[35%] flex flex-col gap-6">
          {/* using at work */}
          <Reveal className="">
            <h4 className="text-2xl font-bold mb-4">Use at work</h4>
            <div className=" flex gap-2 flex-wrap">{UsingAtWorkSkills}</div>
          </Reveal>

          {/* using learning right now */}
          <Reveal className="">
            <h4 className="text-2xl font-bold mb-4">Currently Learning </h4>
            <div className="flex gap-2 flex-wrap">{learningRightNowSkills}</div>
          </Reveal>
        </div>
      </div>
    </div>
  );
};

export default About;

const Skill = ({ skill, index }) => (
  <span
    key={index}
    className="bg-background-very-light py-1 rounded-sm px-2 transition-all duration-200 hover:opacity-65 cursor-pointer"
  >
    {skill}
  </span>
);
