import Image from "next/image";
import Button from "@components/Button";

import styles from "./ProjectItem.module.scss";

interface ProjectItemType {
  name: string;
  image: string;
  role: string;
  description: string;
  slug?: string;
}

const ProjectItem = ({ name, image, role, description }: ProjectItemType) => {
  return (
    <div className={styles.container}>
      <div className={styles["container--image"]}>
        <Image
          src={image}
          alt={name}
          // width={380}
          // height={265}
          layout="fill"
          // className={styles.image}
          // placeholder="blur"
        />
      </div>
      <div className={styles.container__detail}>
        <div className={styles["text--box"]}>
          <p className={styles.text__name}>{name}</p>
          <p className={styles.text}>{role}</p>
          <p className={styles.text}>{description}</p>
        </div>
        <div>
          <Button className={styles.button} primary>
            View Project
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
