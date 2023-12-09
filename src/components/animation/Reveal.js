import { motion, useInView, useAnimation } from "framer-motion";
import React from "react";
import { useEffect, useRef } from "react";

export default function Reveal(props) {
  const { styles } = props;
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  return (
    <motion.div
      ref={ref}
      className={styles}
      variants={{
        hidden: { opacity: 0, y: 75 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate={mainControls}
      transition={{ duration: 0.3, delay: 0.3 }}
    >
      {props.children}
    </motion.div>
  );
}
