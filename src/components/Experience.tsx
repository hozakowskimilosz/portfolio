import Link from "./ui/Link";
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
                  <Link to="https://www.vml.com/pl/poland">@VML</Link>
                </div>
                <p className="text-gray-600">08.01.2024 - 02.02.2024</p>
              </div>

              <p className="text-justify text-sm leading-7">
                During this internship, I contributed to the development of a
                collaborative Kanban board web application hosted on Amazon Web
                Services (<span className="text-yellow-500">AWS</span>
                ). This project was a joint effort involving{" "}
                <span className=" text-green-500">three developers</span>. Our
                goal was to create a user-friendly platform for task management.
                My role in the project encompassed various tasks, including
                front-end development, AWS cloud management, and continous
                deployment. We were utilizing{" "}
                <span className="text-primary-dark">sprint methodology</span>,
                which involved weekly presentations of technical demos and daily
                stand-ups with our team and mentors. Through this iterative
                approach, we were able to deliver a full-stack, feature packed,
                Kanban board application while honing our teamwork and
                communication skills in a real-world development environment.
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
                  <Link>@Wunderman Thompson Technology</Link>
                </div>
                <p className="text-gray-600">04.2023 ~ 05.2023</p>
              </div>

              <p className="text-justify text-sm leading-7">
                Following my prior internship, I undertook another term at the
                company, delving once again into the development of the same web
                application using <span className="text-blue-500">React</span>{" "}
                and <span className="text-primary">Redux</span>. Throughout this
                ongoing experience, I continued to refine my skills in feature
                enhancement and technical problem-solving while fostering
                continued collaboration with the team. Additionally, we
                maintained a routine of{" "}
                <span className="text-pink-700">daily stand-up meetings</span>,
                ensuring clear communication and alignment on project objectives
                among team members.
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
                  <Link>@Wunderman Thompson Technology</Link>
                </div>
                <p className="text-gray-600">07.2022 ~ 08.2022</p>
              </div>

              <p className="text-justify text-sm leading-7">
                During this internship, I was part of a team developing a
                complex web application utilizing{" "}
                <span className="text-blue-500">React</span>. Working
                collaboratively, I contributed to basic feature development and
                technical problem-solving. This was my first experience in
                professional web-development and it not only expanded my
                proficiency in modern web development but also refined my
                ability to work effectively within a team environment, fostering
                enhanced communication and{" "}
                <span className="text-orange-500">teamwork skills</span>.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
}

export default Experience;
