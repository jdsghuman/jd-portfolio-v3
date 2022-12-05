import styles from "./ProjectNotes.module.scss";

interface NotesProp {
  title: string;
  text: string[];
  list?: boolean;
}

const ProjectNotes = ({ title, text, list }: NotesProp) => {
  return (
    <div className={styles.container}>
      <p className={styles.title}>{title}</p>
      <ul>
        {list ? text.map((t) => <li>{t}</li>) : text.map((t) => <p>{t}</p>)}
      </ul>
    </div>
  );
};

export default ProjectNotes;

{
  /* <ul>
        {list.map((text) => (
          <li>{text}</li>
        ))}
      </ul> */
}
