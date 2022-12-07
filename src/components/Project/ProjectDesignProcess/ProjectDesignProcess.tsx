import LinkDisplay from "@components/LinkDisplay";

import styles from "./ProjectDesignProcess.module.scss";

interface Props {
  items: string[];
  projectName: string;
}

const ProjectDesignProcess = ({ items, projectName }: Props) => {
  const handleScroll = (e: Event, linkLocation: string) => {
    e.preventDefault();
    const element = document.getElementById(
      linkLocation.replace(/\s/g, "").toLowerCase()
    );
    element?.scrollIntoView({ block: "start", behavior: "smooth" });
  };
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Design Process</h3>
      <div className={styles.process}>
        {items.map((item, i) => (
          <div className={styles.process__item} key={i}>
            <LinkDisplay
              link={`/project/${projectName}/#${item
                .replace(/\s/g, "")
                .toLowerCase()}`}
            >
              <a onClick={(e: any) => handleScroll(e, item)}>
                <p>{item}</p>
              </a>
            </LinkDisplay>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectDesignProcess;
