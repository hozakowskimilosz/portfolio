import { useState } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import Link from "./Link";

interface CarouselProps {
  projects: {
    name: string;
    description: string;
    repoLink: string;
  }[];
}

export default function Carousel({ projects }: CarouselProps) {
  const [curr, setCurr] = useState(0);

  const prev = () =>
    setCurr((curr) => (curr === 0 ? projects.length - 1 : curr - 1));

  const next = () =>
    setCurr((curr) => (curr === projects.length - 1 ? 0 : curr + 1));

  return (
    <div className="relative overflow-hidden rounded-md">
      <div
        className="flex transition-transform duration-500 ease-out"
        style={{ transform: `translateX(-${curr * 100}%)` }}
      >
        {projects.map((project) => (
          <div key={project.name} className="flex flex-wrap gap-4">
            <div className="flex h-72 flex-col gap-4 rounded-md bg-gray-100 px-7 py-4 md:w-[40rem]">
              <div className="flex flex-col gap-3 px-8 pb-6 pt-4">
                <div className="flex justify-between">
                  <h3 className="text-2xl font-medium">{project.name}</h3>
                  <div>
                    <Link to={project.repoLink}>LINK</Link>
                  </div>
                </div>

                <p className="text-justify text-sm font-light leading-6">
                  {project.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="absolute left-0 top-[7.5rem] flex items-center justify-between p-4">
        <button
          onClick={prev}
          className="rounded-full bg-white/80 p-1 text-gray-800 shadow hover:bg-white"
        >
          <FaArrowLeft />
        </button>
      </div>

      <div className="absolute right-0 top-[7.5rem] flex items-center justify-between p-4">
        <button
          onClick={next}
          className="rounded-full bg-white/80 p-1 text-gray-800 shadow hover:bg-white"
        >
          <FaArrowRight />
        </button>
      </div>

      <div className="absolute bottom-4 left-0 right-0">
        <div className="flex items-center justify-center gap-2">
          {projects.map((project, i) => (
            <div
              key={project.name}
              className={`
              h-3 w-3 rounded-full bg-primary transition-all
              ${curr === i ? "p-2" : "bg-opacity-50"}
            `}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
