import styles from "./ProjectOverview.module.scss";

interface Props {
  about: string;
  role: string[];
  duration: string[];
  tools: string[];
}

const ProjectOverview = ({ about, role, duration, tools }: Props) => {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Project overview</h3>
      <div className={styles.about}>
        <h3 className={styles.about__title}>About</h3>
        <p className={styles.about__text}>{about}</p>
      </div>
      <div className={styles.description}>
        <div className={styles.description__text}>
          <h3>Role</h3>
          {role?.map((r) => (
            <p className={styles.list}>{r}</p>
          ))}
        </div>
        <div className={styles.description__text}>
          <h3>Duration</h3>
          {duration?.map((d) => (
            <p className={styles.list}>{d}</p>
          ))}
        </div>
        <div className={styles.description__text}>
          <h3>Tools</h3>
          {tools.map((tool) => (
            <p className={styles.list}>{tool}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectOverview;
