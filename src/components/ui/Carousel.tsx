import { useState } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

interface CarouselProps {
  project: {
    name: string;
    description: string;
    repoLink: string;
  }[];
}

export default function Carousel({ project }: CarouselProps) {
  const [curr, setCurr] = useState(0);

  const prev = () =>
    setCurr((curr) => (curr === 0 ? project.length - 1 : curr - 1));

  const next = () =>
    setCurr((curr) => (curr === project.length - 1 ? 0 : curr + 1));

  return (
    <div className="relative overflow-hidden rounded-md">
      <div
        className="flex transition-transform duration-500 ease-out"
        style={{ transform: `translateX(-${curr * 100}%)` }}
      >
        {project.map((project) => (
          <div className="flex flex-wrap gap-4">
            <div className="flex flex-col gap-4 rounded-md bg-gray-100 px-7 py-4 md:w-[40rem]">
              <div className="px-8 pb-6 pt-4">
                <div className="flex justify-between">
                  <h3 className="text-2xl">{project.name}</h3>
                  <a href={project.repoLink} className="italic text-gray-600">
                    LINK
                  </a>
                </div>

                <p className="text-justify text-sm leading-7">
                  {project.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="absolute inset-0 flex items-center justify-between p-4">
        <button
          onClick={prev}
          className="rounded-full bg-white/80 p-1 text-gray-800 shadow hover:bg-white"
        >
          <FaArrowLeft />
        </button>
        <button
          onClick={next}
          className="rounded-full bg-white/80 p-1 text-gray-800 shadow hover:bg-white"
        >
          <FaArrowRight />
        </button>
      </div>

      <div className="absolute bottom-4 left-0 right-0">
        <div className="flex items-center justify-center gap-2">
          {project.map((_, i) => (
            <div
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
