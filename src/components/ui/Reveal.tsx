import { motion, useAnimation, useInView } from "framer-motion";
import { ReactNode, useEffect, useRef } from "react";

interface RevealProps {
  children: ReactNode;
  idx?: number;
}

function Reveal({ children, idx }: RevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref);

  const mainControls = useAnimation();
  const slideControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
      slideControls.start("visible");
    }
  }, [isInView, mainControls, slideControls]);

  return (
    <div className="relative">
      <motion.div
        ref={ref}
        variants={{
          hidden: { opacity: 0, scale: 0.9 },
          visible: { opacity: 1, scale: 1 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: idx ? 0.1 * idx : 0.25 }}
      >
        {children}
      </motion.div>
      <motion.div
        variants={{ hidden: { left: 0 }, visible: { left: "100%" } }}
        initial="hidden"
        animate={slideControls}
        transition={{
          duration: 0.5,
          ease: "easeIn",
          delay: idx ? idx * 0.08 : 0,
        }}
        className="absolute bottom-[4px] left-0 right-0 top-[4px] z-20 bg-primary"
      ></motion.div>
    </div>
  );
}

export default Reveal;
