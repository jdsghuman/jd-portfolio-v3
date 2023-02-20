import Image from "next/image";

import styles from "./ProjectHeader.module.scss";

interface Props {
  title: string;
  description?: string;
  image: string;
  topRef?: any;
}

const ProjectHeader = ({ title, description, image, topRef }: Props) => {
  return (
    <div className={styles.header} ref={topRef}>
      <div className={styles.header__text}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.description}>{description}</p>
      </div>
      <div>
        <Image
          src={image}
          width={273}
          height={273}
          className={styles.image}
          alt={description || "Project image"}
        />
      </div>
    </div>
  );
};

export default ProjectHeader;
