import React from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Reveal = ({ children, delay = 0, className = "" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: false,
    margin: "-100px",
  });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
      transition={{
        duration: 0.8,
        delay: delay,
        ease: "easeInOut",
        bounce: 0.5,
        type: "spring",
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default Reveal;
