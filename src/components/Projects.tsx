import Carousel from "./ui/Carousel";
import Reveal from "./ui/Reveal";

const projects = [
  {
    name: "KanbanBoard on AWS",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit, ullam! Dolorum consequuntur quos dolores delectus aut explicabo voluptatum! Quisquam nam ipsa facilis id voluptatum ab recusandae tempore optio iure pariatur!",
    repoLink: "https://github.com/hozakowskimilosz/kanban-board-team-aws",
  },
  {
    name: "KanbanBoard AWS",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit, ullam! Dolorum consequuntur quos dolores delectus aut explicabo voluptatum! Quisquam nam ipsa facilis id voluptatum ab recusandae tempore optio iure pariatur!",
    repoLink: "https://github.com/hozakowskimilosz/kanban-board-team-aws",
  },
  {
    name: "KanbanBoard AWS",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit, ullam! Dolorum consequuntur quos dolores delectus aut explicabo voluptatum! Quisquam nam ipsa facilis id voluptatum ab recusandae tempore optio iure pariatur!",
    repoLink: "https://github.com/hozakowskimilosz/kanban-board-team-aws",
  },
  {
    name: "KanbanBoard AWS",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit, ullam! Dolorum consequuntur quos dolores delectus aut explicabo voluptatum! Quisquam nam ipsa facilis id voluptatum ab recusandae tempore optio iure pariatur!",
    repoLink: "https://github.com/hozakowskimilosz/kanban-board-team-aws",
  },
];

function Projects() {
  return (
    <div id="projects" className="flex h-screen items-center justify-center">
      <div className="flex flex-col gap-4 md:w-[40rem]">
        <h2 className="text-6xl font-bold transition-all hover:tracking-wider hover:text-primary-light">
          My Projects
        </h2>

        <Reveal>
          <div className="rounded-md border-2 border-transparent transition-all hover:border-primary">
            <Carousel project={projects} />
          </div>
        </Reveal>
      </div>
    </div>
  );
}

export default Projects;
