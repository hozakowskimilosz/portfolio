import { motion } from "framer-motion";
import { VscGithubInverted } from "react-icons/vsc";
import { FaLinkedin } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";

import Picture from "./ui/Picture";
import Reveal from "./ui/Reveal";

function About() {
  const name = "Miłosz Hozakowski.";
  const githubLink = "https://github.com/hozakowskimilosz";
  const linkedInLink =
    "https://www.linkedin.com/in/mi%C5%82osz-hozakowski-629442266/";
  const mail = "mhozakowski@gmail.com";

  return (
    <div
      id="about"
      className="flex h-screen flex-col items-center justify-center gap-10"
    >
      <h1 className="rounded-sm bg-gradient-to-br from-indigo-300 via-violet-300 to-purple-300 px-3 py-1 text-center text-4xl font-medium tracking-widest text-primary transition-colors">
        {name.split("").map((l, idx) => (
          <motion.span
            key={idx}
            className="cursor-default transition-all duration-100 "
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2, delay: 0.05 * idx }}
          >
            <span>{l}</span>
          </motion.span>
        ))}
      </h1>

      <Picture />

      <div className="flex gap-2 rounded-full bg-gray-100 px-4 py-3 text-2xl">
        <a href={githubLink} target="blank">
          <VscGithubInverted className="cursor-pointer text-gray-400 transition-colors duration-150 hover:text-gray-900" />
        </a>
        <a href={linkedInLink}>
          <FaLinkedin className="cursor-pointer text-gray-400 transition-colors duration-150 hover:text-gray-900" />
        </a>
        <a href={mail}>
          <SiGmail className="cursor-pointer text-gray-400 transition-colors duration-150 hover:text-gray-900" />
        </a>
      </div>

      <div className="flex flex-col gap-4 md:w-[40rem]">
        <h2 className="text-6xl font-bold transition-all hover:tracking-wider hover:text-primary-light">
          About me
        </h2>

        <Reveal>
          <p className="rounded-md border-2 border-transparent bg-gray-100 px-7 py-4 text-justify font-light leading-7 transition-all hover:border-primary md:w-[40rem]">
            Welcome! I'm Miłosz Hozakowski, a web developer, currently on the
            verge of completing my programming technician degree at Zespół Szkół
            Łączności in Poznań. Fueled by curiosity and a passion for
            problem-solving, I thrive on crafting innovative digital
            experiences. With a focus on clean, efficient code and a commitment
            to collaboration, I'm excited to continue pushing boundaries and
            making a meaningful impact in the world of web development.
          </p>
        </Reveal>
      </div>
    </div>
  );
}

export default About;
