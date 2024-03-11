import { motion, useAnimation, useInView } from "framer-motion";
import { ReactNode, useEffect, useRef } from "react";

function Skills() {
  const skills = [
    "React",
    "TypeScript",
    "Redux",
    "AWS",
    "Git",
    "Python",
    "TailwindCSS",
    "ChakraUI",
    "FramerMotion",
  ];

  const ref = useRef(null);
  const isInView = useInView(ref);
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    } else {
      mainControls.start("hidden");
    }
  }, [isInView, mainControls]);

  return (
    <div
      id="skills"
      className="flex h-screen flex-col items-center justify-center px-5"
    >
      <div className="flex flex-col gap-4 md:w-[40rem]">
        <h2 className="text-6xl font-bold transition-all hover:text-7xl hover:text-primary-light">
          Skills
        </h2>

        <div className="flex flex-wrap gap-4">
          {skills.map((skill, idx) => (
            <motion.div
              ref={ref}
              variants={{
                hidden: { opacity: 0, x: -300 },
                visible: { opacity: 1, x: 0 },
              }}
              initial="hidden"
              animate={mainControls}
              transition={{ duration: 0.5, delay: 0.1 * idx }}
            >
              <Skill>{skill}</Skill>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

interface SkillProps {
  children: ReactNode;
}

function Skill({ children }: SkillProps) {
  return (
    <div className="rounded-full border border-transparent bg-gray-100 px-8 py-3 text-2xl transition-all hover:scale-105 hover:border-primary">
      {children}
    </div>
  );
}

export default Skills;
