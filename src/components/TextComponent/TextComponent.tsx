import classNames from "classnames/bind";

import styles from "./TextComponent.module.scss";
const cx = classNames.bind(styles);

interface Props {
  title?: string;
  text?: string[];
  numberList?: boolean;
  unorderedList?: boolean;
  center?: boolean;
}

const TextComponent = ({
  title,
  text,
  numberList = false,
  unorderedList = false,
  center = false,
}: Props) => {
  const getListOfText = () => {
    if (numberList && !unorderedList) {
      return (
        <ol>
          {text?.map((t, i) => (
            <li key={i}>{t}</li>
          ))}
        </ol>
      );
    }

    if (!numberList && unorderedList) {
      return (
        <ul>
          {text?.map((t, i) => (
            <li key={i}>{t}</li>
          ))}
        </ul>
      );
    }

    return text?.map((t, i) => <p key={i}>{t}</p>);
  };

  return (
    <div className={styles.container}>
      <h4
        className={cx(title, {
          "title--center": center,
        })}
      >
        {title}
      </h4>
      {getListOfText()}
    </div>
  );
};

export default TextComponent;
