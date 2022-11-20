import Heading from "@components/Heading";
import ProjectItem from "@components/ProjectItem";
import { projects } from "@data/data";

import styles from "./ProjectList.module.scss";

const ProjectList = () => {
  return (
    <section>
      <div style={{ position: "relative" }}>
        <div
          id="projects"
          style={{ position: "absolute", top: "-50px", left: 0 }}
        ></div>
      </div>
      <Heading title="projects" />
      <div className={styles.container}>
        {projects.map((project) => {
          return (
            <ProjectItem
              name={project.name}
              image={project.image}
              role={project.role}
              description={project.description}
            />
          );
        })}
      </div>
    </section>
  );
};

export default ProjectList;
