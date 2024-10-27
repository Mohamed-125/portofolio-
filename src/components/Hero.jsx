import React from "react";
import { motion } from "framer-motion";
import Reveal from "./Reveal";
import TypewriterComponent from "typewriter-effect";

const Hero = () => {
  return (
    <div className="container flex-1 grid items-center">
      <div className="max-w-[680px] text-text">
        <Reveal>
          <h1 className="title ">
            Hey, I'm Mohamed<span className="text-primary">.</span>
          </h1>
        </Reveal>
        <Reveal>
          <h3
            className="text-3xl mb-3  flex gap-2"
            style={{
              fontSize: "clamp(0.7rem, 12vw, 2rem)",
            }}
          >
            <p>I'm a</p>
            <span className="text-primary font-bold">
              <TypewriterComponent
                options={{
                  strings: ["Full Stack Developer", "Web Degsiner"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </span>
          </h3>
        </Reveal>
        <Reveal>
          <p className="mb-6">
            I've spent the last 5 years building and scaling software for some
            pretty cool companies. I also teach people to paint online (incase
            you've got an empty canvas layin' around 🎨). Let's connect!
          </p>
        </Reveal>
        <Reveal>
          <motion.a
            whileHover={{ "--scaleBefore": 1, color: "black " }}
            transition={{ duration: "0.25" }}
            href="#"
            className=" block  w-fit btn-hover cursor-pointer border border-primary px-7 py-3 rounded-md"
          >
            Contact
          </motion.a>
        </Reveal>
      </div>
    </div>
  );
};

export default Hero;
