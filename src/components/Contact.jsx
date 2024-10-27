import React from "react";
import Reveal from "./Reveal";
const Contact = () => {
  return (
    <div
      className="container min-h-[50vh] py-20 gap-3 grid place-content-center text-text"
      id="contact"
    >
      <Reveal centered={true}>
        <h1 className="title mb-3">
          Contact<span className="text-primary">.</span>
        </h1>
      </Reveal>
      <Reveal centered={true}>
        <p>Send me an email if you want to connect!</p>
      </Reveal>
      <Reveal centered={true}>
        <a
          href="mailto:mohamedibarhim.fed@gmail.com"
          className="font-bold text-xl break-all text-center hover:text-primary transition-all duration-200 cursor-pointer"
        >
          mohamedibarhim.fed@gmail.com
        </a>
      </Reveal>
    </div>
  );
};

export default Contact;
