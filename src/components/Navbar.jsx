import React, { useState } from "react";
import Logo from "../assets/logo.png";
import { AnimatePresence, motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { SiCodepen } from "react-icons/si";

import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [isToggled, setToggle] = useState(false);

  const navContainer = {
    visible: {
      //x: 0,
      opacity: 1,
      transition: {
        x: { velocity: 100 },
        duration: 0.3,
      },
    },
    hidden: {
      //x: -250,
      opacity: 0,
      transition: {
        x: { velocity: 100 },
        duration: 0.3,
      },
    },
  };

  return (
    <div className="bg-background-dark-opacity backdrop-blur-md   fixed top-0 left-0 right-0 z-10">
      <div className="flex py-4 container items-center justify-between">
        <div className="flex gap-3 items-center">
          <div className="w-[70px] h-[60px]">
            <img src={Logo} className="w-full h-full" />
          </div>
          <div className="sm:flex hidden justify-between items-center text-text  ">
            <div>
              <a
                href="#about"
                className="mr-2 hover:text-white cursor-pointer "
              >
                About
              </a>
              <a
                href="#projects"
                className="mr-2 hover:text-white cursor-pointer "
              >
                Projects
              </a>
              {/* <a
                href="#experience"
                className="mr-2 hover:text-white cursor-pointer "
              >
                Experience
              </a> */}
            </div>
          </div>
        </div>

        <div className="sm:flex hidden   gap-2 text-text items-center">
          <a target="_blank" href="https://github.com/Mohamed-125">
            <FaGithub className="text-3xl  opacity-60 duration-200 transition-all hover:opacity-100 cursor-pointer " />
          </a>
          <a
            target="_blank"
            href="https://codesandbox.io/dashboard/recent?workspace=3f872c11-0453-4fa5-b296-2b6829d66418"
          >
            <SiCodepen className="text-3xl opacity-60 duration-200 transition-all hover:opacity-100 cursor-pointer " />
          </a>
          <motion.a
            whileHover={{ "--scaleBefore": 1, color: "black " }}
            transition={{ duration: "0.25" }}
            href="#contact"
            className="ml-2 btn-hover cursor-pointer border border-primary px-7 py-3 rounded-md"
          >
            Contact
          </motion.a>
        </div>

        <button
          className="text-white z-20 block sm:hidden "
          onClick={() => setToggle(!isToggled)}
        >
          <GiHamburgerMenu className="text-2xl" />
        </button>

        <AnimatePresence>
          {isToggled && (
            <motion.div
              className="fixed flex text-xl right-0 w-[70%] flex-col justify-between text-text top-0 bottom-0 h-screen bg-background-dark px-5 pb-11 pt-24"
              initial="hidden"
              animate={isToggled ? "visible" : "hidden"}
              exit="hidden"
              variants={navContainer}
            >
              <div className="flex flex-col gap-2 mb">
                <a
                  href="#about"
                  onClick={() => {
                    setToggle(false);
                  }}
                  className="mr-2 hover:text-white cursor-pointer "
                >
                  About
                </a>
                <a
                  href="#projects"
                  onClick={() => {
                    setToggle(false);
                  }}
                  className="mr-2 hover:text-white cursor-pointer "
                >
                  Projects
                </a>
                {/* <a
                  href="#experience"
                  onClick={() => {
                    setToggle(false);
                  }}
                  className="mr-2 hover:text-white cursor-pointer "
                >
                  Experience
                </a> */}
              </div>

              <div className="">
                <a target="_blank" href="https://github.com/Mohamed-125">
                  <FaGithub className="text-3xl  opacity-60 duration-200 mb-4 transition-all hover:opacity-100 cursor-pointer " />
                </a>
                <a
                  target="_blank"
                  href="https://codesandbox.io/dashboard/recent?workspace=3f872c11-0453-4fa5-b296-2b6829d66418"
                >
                  <SiCodepen className="text-3xl opacity-60 duration-200 mb-4 transition-all hover:opacity-100 cursor-pointer " />
                </a>
                <motion.a
                  onClick={() => {
                    setToggle(false);
                  }}
                  whileHover={{ "--scaleBefore": 1, color: "black " }}
                  transition={{ duration: "0.25" }}
                  href="#contact"
                  className="mt-3 block w-fit btn-hover cursor-pointer border border-primary px-7 py-3 rounded-md"
                >
                  Contact
                </motion.a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Navbar;
