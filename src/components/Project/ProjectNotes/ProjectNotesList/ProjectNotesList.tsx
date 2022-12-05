import styles from "./ProjectNotesList.module.scss";

interface Props {
  children?: JSX.Element;
}

const ProjectNotesList = ({ children }: Props) => {
  return <div className={styles.container}>{children}</div>;
};

export default ProjectNotesList;
