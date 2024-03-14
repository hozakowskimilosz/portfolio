import Reveal from "./ui/Reveal";

function Experience() {
  return (
    <div id="experience" className="flex h-screen items-center justify-center">
      <div className="flex flex-col gap-4 md:w-[40rem]">
        <h2 className="text-6xl font-bold transition-all hover:tracking-wider hover:text-primary-light">
          Internships
        </h2>

        <Reveal>
          <div className="flex flex-wrap gap-4">
            <div className="flex flex-col gap-4 rounded-md border-2 border-transparent bg-gray-100 px-7 py-4 transition-all hover:border-primary md:w-[40rem]">
              <div className="flex justify-between">
                <h3 className="text-2xl">Full-Stack Developer</h3>
                <p className="text-gray-600">08.01.2024 ~ 02.02.2024</p>
              </div>

              <p></p>
            </div>
          </div>
        </Reveal>

        <Reveal>
          <div className="flex flex-wrap gap-4">
            <div className="flex flex-col gap-4 rounded-md border-2 border-transparent bg-gray-100 px-7 py-4 transition-all hover:border-primary md:w-[40rem]">
              <div className="flex justify-between">
                <h3 className="text-2xl">Front-End Developer</h3>
                <p className="text-gray-600">07.2022 ~ 08.2022</p>
              </div>

              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, quos quam labore ullam nisi saepe natus molestias,
                corrupti veniam possimus voluptas nobis eligendi! Repellat non
                aut provident officiis iure excepturi. Tempora cupiditate optio
                iure
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal>
          <div className="flex flex-wrap gap-4">
            <div className="flex flex-col gap-4 rounded-md border-2 border-transparent bg-gray-100 px-7 py-4 transition-all hover:border-primary md:w-[40rem]">
              <div className="flex justify-between">
                <h3 className="text-2xl">Front-End Developer</h3>
                <p className="text-gray-600">07.2022 ~ 08.2022</p>
              </div>

              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, quos quam labore ullam nisi saepe natus molestias,
                corrupti veniam possimus voluptas nobis eligendi! Repellat non
                aut provident officiis iure excepturi. Tempora cupiditate optio
                iure
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
}

export default Experience;
