import { ReactNode } from "react";
import Reveal from "./ui/Reveal";

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

  return (
    <div
      id="skills"
      className="flex h-screen flex-col items-center justify-center px-5"
    >
      <div className="flex flex-col gap-4 md:w-[40rem]">
        <h2 className="text-6xl font-bold transition-all hover:tracking-wider hover:text-primary-light">
          Skills
        </h2>

        <div className="flex flex-wrap gap-4">
          {skills.map((skill, idx) => (
            <Reveal idx={idx}>
              <Skill>{skill}</Skill>
            </Reveal>
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
    <div className="rounded-md border-2 border-transparent bg-gray-100 px-8 py-3 text-2xl transition-all hover:scale-105 hover:border-primary">
      {children}
    </div>
  );
}

export default Skills;
