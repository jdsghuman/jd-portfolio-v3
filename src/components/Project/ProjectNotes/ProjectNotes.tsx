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
        {list
          ? text.map((t, i) => <li key={i}>{t}</li>)
          : text.map((t, i) => <p key={i}>{t}</p>)}
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
