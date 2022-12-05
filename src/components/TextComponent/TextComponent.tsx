import styles from "./TextComponent.module.scss";

interface Props {
  title?: string;
  text?: string[];
  numberList?: boolean;
}

const TextComponent = ({ title, text, numberList = false }: Props) => {
  return (
    <div className={styles.container}>
      <h4 className={styles.title}>{title}</h4>
      {numberList ? (
        <ol>
          {text?.map((t) => (
            <li>{t}</li>
          ))}
        </ol>
      ) : (
        text?.map((t) => <p>{t}</p>)
      )}
    </div>
  );
};

export default TextComponent;
