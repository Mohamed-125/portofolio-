import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

const Reveal = ({ centered, children }) => {
  const ref = useRef();
  const isInView = useInView(ref, { once: true });

  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView]);

  return (
    <motion.div
      ref={ref}
      variants={{
        hidden: { "--width": "100%", opacity: 0, translateY: "20px" },
        visible: { "--width": "0%", opacity: 1, translateY: "0px" },
      }}
      initial={"hidden"}
      animate={controls}
      transition={{ duration: "0.65 ", delay: ".25" }}
      className={`reveal-div ${centered ? "mx-auto text-center" : ""}`}
    >
      {children}
    </motion.div>
  );
};

export default Reveal;
