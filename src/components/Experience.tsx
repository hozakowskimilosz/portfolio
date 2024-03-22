import Reveal from "./ui/Reveal";

function Experience() {
  return (
    <div id="experience" className="flex items-center justify-center py-24">
      <div className="flex flex-col gap-4 md:w-[40rem]">
        <h2 className="text-6xl font-bold transition-all hover:tracking-wider hover:text-primary-light">
          Internships
        </h2>

        <Reveal>
          <div className="flex flex-wrap gap-4">
            <div className="flex flex-col gap-4 rounded-md border-2 border-transparent bg-gray-100 px-7 py-4 transition-all hover:border-primary md:w-[40rem]">
              <div className="flex justify-between">
                <div>
                  <h3 className="text-2xl">Full-Stack Developer</h3>
                  <span className="italic text-gray-600">
                    <a href="https://www.vml.com/pl/poland" target="blank">
                      @VML
                    </a>
                  </span>
                </div>
                <p className="text-gray-600">08.01.2024 - 02.02.2024</p>
              </div>

              <p className="text-sm leading-7">
                During this internship, I contributed to the development of a
                collaborative Kanban board web application hosted on Amazon Web
                Services (<span className="text-yellow-500">AWS</span>
                ). This project was a joint effort involving{" "}
                <span className=" text-green-600">three developers</span>. Our
                goal was to create a user-friendly platform for task management.
                My role in the project encompassed various tasks, including
                front-end development, AWS cloud management, and continous
                deployment. We were utilizing{" "}
                <span className="font-semibold text-primary-dark">
                  sprint methodology
                </span>
                , which involved weekly presentations of technical demos and
                daily stand-ups with our team and mentors. Through this
                iterative approach, we were able to deliver a full-stack,
                feature packed, Kanban board application while honing our
                teamwork and communication skills in a real-world development
                environment.
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal>
          <div className="flex flex-wrap gap-4">
            <div className="flex flex-col gap-4 rounded-md border-2 border-transparent bg-gray-100 px-7 py-4 transition-all hover:border-primary md:w-[40rem]">
              <div className="flex justify-between">
                <div>
                  <h3 className="text-2xl">Front-End Developer</h3>
                  <span className="italic text-gray-600">
                    @Wunderman Thompson Technology
                  </span>
                </div>
                <p className="text-gray-600">04.2023 ~ 05.2023</p>
              </div>

              <p className="text-sm leading-7">
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
                <div>
                  <h3 className="text-2xl">Front-End Developer</h3>
                  <span className="italic text-gray-600">
                    @Wunderman Thompson Technology
                  </span>
                </div>
                <p className="text-gray-600">07.2022 ~ 08.2022</p>
              </div>

              <p className="text-sm leading-7">
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
