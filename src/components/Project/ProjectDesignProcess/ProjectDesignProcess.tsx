import styles from "./ProjectDesignProcess.module.scss";

interface Props {
  items: string[];
}

const ProjectDesignProcess = ({ items }: Props) => {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Design Process</h3>
      <div className={styles.process}>
        {items.map((item) => (
          <div className={styles.process__item}>
            <p>{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectDesignProcess;
