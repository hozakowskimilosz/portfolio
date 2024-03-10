import { motion } from "framer-motion";
import { VscGithubInverted } from "react-icons/vsc";
import { FaLinkedin } from "react-icons/fa6";
import Picture from "./ui/Picture";

function About() {
  const name = "Miłosz Hozakowski.";

  return (
    <div
      id="about"
      className="flex flex-col items-center justify-center h-screen gap-10"
    >
      <h1 className="text-6xl font-medium tracking-wider text-primary">
        {name.split("").map((l, idx) => (
          <motion.span
            key={idx}
            className="transition-all duration-100 cursor-default "
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

      <div className="flex gap-4 px-4 py-3 text-3xl bg-gray-100 rounded-full">
        <a href="https://github.com/hozakowskimilosz" target="blank">
          <VscGithubInverted className="text-gray-400 transition-colors duration-150 cursor-pointer hover:text-gray-900" />
        </a>
        <a
          href="https://www.linkedin.com/in/mi%C5%82osz-hozakowski-629442266/"
          target="blank"
        >
          <FaLinkedin className="text-gray-400 transition-colors duration-150 cursor-pointer hover:text-gray-900" />
        </a>
      </div>

      <div className="flex flex-col gap-4 px-12 py-8 bg-gray-100 rounded-md w-[30rem]">
        <h2 className="text-3xl font-semibold">About me</h2>
        <p className="font-light text-justify">
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
