import { ReactNode } from "react";
import Reveal from "./ui/Reveal";

function Skills() {
  const skills = [
    {
      name: "React",
      icon: (
        <img
          className="w-8"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
        />
      ),
    },
    {
      name: "TypeScript",
      icon: (
        <img
          className="w-8"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Typescript.svg/96px-Typescript.svg.png"
        />
      ),
    },
    {
      name: "Redux",
      icon: (
        <img
          className="w-8"
          src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/redux-icon.png"
        />
      ),
    },
    {
      name: "NodeJS",
      icon: (
        <img
          className="w-8"
          src="https://static-00.iconduck.com/assets.00/nodejs-icon-2048x2048-rueyo8fw.png"
        />
      ),
    },
    {
      name: "Python",
      icon: (
        <img
          className="w-8"
          src="https://cdn3.iconfinder.com/data/icons/logos-and-brands-adobe/512/267_Python-512.png"
        />
      ),
    },
    {
      name: "Git",
      icon: (
        <img
          className="w-8"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Git_icon.svg/2048px-Git_icon.svg.png"
        />
      ),
    },
    {
      name: "TailwindCSS",
      icon: (
        <img
          className="w-8"
          src="https://w7.pngwing.com/pngs/293/485/png-transparent-tailwind-css-hd-logo.png"
        />
      ),
    },
    {
      name: "ChakraUI",
      icon: (
        <img
          className="w-8"
          src="https://avatars.githubusercontent.com/u/54212428?s=280&v=4"
        />
      ),
    },
    {
      name: "FramerMotion",
      icon: (
        <img
          className="w-8"
          src="https://cdn.worldvectorlogo.com/logos/framer-motion.svg"
        />
      ),
    },
    {
      name: "SQL",
      icon: (
        <img
          className="w-8"
          src="https://static-00.iconduck.com/assets.00/sql-database-sql-azure-icon-1955x2048-4pmty46t.png"
        />
      ),
    },
    {
      name: "AWS",
      icon: (
        <img
          className="w-8"
          src="https://static-00.iconduck.com/assets.00/general-awscloud-icon-2048x2048-3trjae80.png"
        />
      ),
    },
    {
      name: "Netlify",
      icon: (
        <img
          className="w-8"
          src="https://cdn.iconscout.com/icon/free/png-256/free-netlify-3628945-3030170.png"
        />
      ),
    },
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
              <Skill key={skill.name}>
                <p>{skill.name}</p>
                <div>{skill.icon}</div>
              </Skill>
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
    <div className="flex items-center gap-4 rounded-md border-2 border-transparent bg-gray-100 px-8 py-3 text-2xl transition-all hover:scale-105 hover:border-primary">
      {children}
    </div>
  );
}

export default Skills;
