import styles from "./Outline.module.scss";

interface Props {
  title: string;
  description?: string;
}
const ProjectOutline = ({ title, description }: Props) => {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
    </div>
  );
};

export default ProjectOutline;
