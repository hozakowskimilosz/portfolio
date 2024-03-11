import { motion } from "framer-motion";
import { VscGithubInverted } from "react-icons/vsc";
import { FaLinkedin } from "react-icons/fa6";
import Picture from "./ui/Picture";

function About() {
  const name = "Miłosz Hozakowski.";

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
            <span className="transition-all duration-75 hover:text-primary-dark">
              {l}
            </span>
          </motion.span>
        ))}
      </h1>

      <Picture />

      <div className="flex gap-4 rounded-full bg-gray-100 px-4 py-3 text-2xl">
        <a href="https://github.com/hozakowskimilosz" target="blank">
          <VscGithubInverted className="cursor-pointer text-gray-400 transition-colors duration-150 hover:text-gray-900" />
        </a>
        <a
          href="https://www.linkedin.com/in/mi%C5%82osz-hozakowski-629442266/"
          target="blank"
        >
          <FaLinkedin className="cursor-pointer text-gray-400 transition-colors duration-150 hover:text-gray-900" />
        </a>
      </div>

      <div className="mx-8 flex flex-col gap-4 rounded-md bg-gray-100 px-12 py-8 md:w-[40rem]">
        <h2 className="text-2xl font-semibold text-primary-light transition-all hover:my-1 hover:text-3xl">
          About me
        </h2>
        <p className="text-justify font-light">
          My name is Miłosz Hozakowski, and I am currently finishing my
          programming technician degree in Zespół Szkół Łączności in Poznań
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, dolor.
          Quidem corporis, excepturi iure blanditiis, consequuntur tempore
          molestiae, reprehenderit modi illum unde asperiores ipsam aut fugiat
          tenetur sapiente ex itaque.
        </p>
      </div>
    </div>
  );
}

export default About;
