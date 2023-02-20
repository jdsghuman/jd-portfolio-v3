import styles from "./ProjectOverview.module.scss";
import Link from "next/link";
import { AiFillGithub } from "react-icons/ai";
import { BiLinkExternal } from "react-icons/bi";

interface Props {
  about: string;
  tags?: string[];
  demoUrl?: string;
  githubLink?: string;
}

const ProjectOverview = ({ about, tags, demoUrl, githubLink }: Props) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Project overview</h2>
      <div className={styles.about}>
        <h3 className={styles.about__title}>About</h3>
        <p className={styles.about__text}>{about}</p>
      </div>

      <div className={styles.tags}>
        {tags?.map((tag, i) => (
          <p key={i} className={styles.item}>
            {tag}
          </p>
        ))}
      </div>
      <hr
        style={{
          marginTop: "20px",
          background: "#dcdcdc",
          border: "none",
          height: "2px",
          width: "90%",
        }}
      />
      <div className={styles.link__container}>
        {demoUrl && (
          <Link href={demoUrl} target="_blank">
            <BiLinkExternal className={styles.icons} />
          </Link>
        )}
        {githubLink && (
          <Link href={githubLink} target="_blank">
            <AiFillGithub className={styles.icons} />
          </Link>
        )}
      </div>
    </div>
  );
};

export default ProjectOverview;
