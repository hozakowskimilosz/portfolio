import { ReactNode } from "react";

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
      className="flex h-screen flex-col items-center justify-center"
    >
      <div className="flex flex-col gap-4">
        <h2 className="text-6xl font-bold">Skills</h2>

        <div className="flex flex-wrap gap-4">
          {skills.map((skill) => (
            <Skill>{skill}</Skill>
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
    <div className="rounded-full bg-gray-100 px-5 py-3 text-2xl">
      {children}
    </div>
  );
}

export default Skills;
