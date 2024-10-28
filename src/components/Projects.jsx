import React from "react";
import Reveal from "./Reveal";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { IoMdExit } from "react-icons/io";

const Projects = () => {
  const projects = [
    {
      title: "تطبيق ابواب",
      url: "https://doors-test-hm7k.vercel.app/",
      description: "صفحه هبوط لتطبيق ابواب",
      github: "https://github.com/Mohamed-125/doors-test",
      image: "https://i.im.ge/2023/03/21/Df5JGY.generated-file-name.png",
    },
    {
      title: "Skywings tours website",
      github:
        "https://github.com/Mohamed-125/Skywings-tours-website",

      image:
        "https://i.im.ge/2024/10/28/kRD1t4.Screenshot-2024-10-28-175845.png",
      url: "https://mohamed-125.github.io/Skywings-tours-website/",
    },
    {
      title: "NFT Collection Website",
      github:
        "https://github.com/Mohamed-125/NFT-Collection-Website-Landing-page-with-React-JS",

      image:
        "https://i.im.ge/2024/10/27/k8AY0J.Screenshot-2024-10-27-194321.png",
      url: "https://mohamed-125.github.io/NFT-Collection-Website-Landing-page-with-React-JS/",
    },
    {
      title: "Hoobank",
      github: "https://github.com/Mohamed-125/Hoobank-react-project",

      image:
        "https://i.im.ge/2024/10/27/k8AgMS.Screenshot-2024-10-27-194405.png",
      url: "https://mohamed-125.github.io/Hoobank-react-project/",
    },
    {
      title: "gericht restaurant",
      github: "https://github.com/Mohamed-125/gericht-restaurant",
      image:
        "https://i.im.ge/2024/10/27/k8Abgy.Screenshot-2024-10-27-194418.png",
      url: "https://mohamed-125.github.io/gericht-restaurant/",
    },

    {
      title: "Data Analytics Tailwind",
      github:
        "https://github.com/Mohamed-125/Data-Analytics-React-And-Tailwind",
      image:
        "https://i.im.ge/2024/10/27/k8AEVx.Screenshot-2024-10-27-194353.png",
      url: "https://mohamed-125.github.io/Data-Analytics-React-And-Tailwind/",
    },
    {
      title: "Markting Agency Tailwind",
      github: "https://github.com/Mohamed-125/markting-agency-landing-page",
      image:
        "https://i.im.ge/2024/10/27/k8A3ra.Screenshot-2024-10-27-194341.png",
      url: "https://mohamed-125.github.io/markting-agency-landing-page/",
    },
  ];

  return (
    <div className="container py-20 text-text" id="projects">
      <Reveal>
        <h1 className="title">
          My Projects<span className="text-primary">.</span>
        </h1>
      </Reveal>
      <motion.div
        initial={{ translateY: "80px", opacity: 0 }}
        animate={{ translateY: "0px", opacity: 1 }}
        className="grid justify-center grid-cols-1 gap-3 md:grid-cols-2"
        style={{ gridTemplateRows: "repeat(2 , minmax(100px, auto))" }}
      >
        {projects.map((project) => (
          <div className="grid w-full row-span-2 gap-6 px-4 py-5 rounded-lg grid-rows-subgrid bg-background-very-light">
            <div className="">
              <img
                src={project.image}
                className="!h-full object-cover rounded-md"
              />
            </div>
            <div>
              <div className="flex items-center justify-between gap-3">
                <Reveal>
                  <h5 className="font-bold text-[19px]">{project.title}</h5>
                </Reveal>
                <Reveal>
                  <div className="flex gap-2">
                    <a href={project.github} target="_blank">
                      <FaGithub className="text-2xl transition-all duration-200 cursor-pointer text-primary opacity-60 hover:opacity-100 " />
                    </a>
                    <a href={project.url} target="_blank">
                      <IoMdExit className="text-2xl transition-all duration-200 cursor-pointer text-primary opacity-60 hover:opacity-100 " />
                    </a>
                  </div>
                </Reveal>
              </div>
              <Reveal>
                <p className="mt-2">{project.description}</p>
              </Reveal>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Projects;
