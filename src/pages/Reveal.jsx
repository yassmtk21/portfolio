import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
const Reveal = ({ children, color }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();
  const slidControls = useAnimation();
  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
      slidControls.start("visible");
    }
  }, [isInView]);
  return (
    <div
      ref={ref}
      style={{
        position: "relative",
      }}
    >
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 50},
          visible: { opacity: 1, y: 0},
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.75, delay: 0.5 }}
      >
        {children}
      </motion.div>
      <motion.div
        style={{
          position: "absolute",
          top: 4,
          bottom: 4,
          left: 0,
          right: 0,
          background: "#0AFF9D",
          zIndex: 9999,
        }}
        variants={{
          hidden: { left: "0%" },
          visible: { left: "100%" },
        }}
        initial="hidden"
        animate={slidControls}
        transition={{ duration: .5, ease: "easeIn" }}
      />
    </div>
  );
};

export default Reveal;
