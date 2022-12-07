import Link from "next/link";
import ImageDisplay from "@components/ImageDisplay";
import { AiOutlineDownload } from "react-icons/ai";
import Button from "@components/Button";

import styles from "./index.module.scss";

const Resume = () => {
  return (
    <div className={styles.container}>
      <div>
        <Link target="_blank" href="/resume.pdf">
          <Button className={styles.button} primary>
            <AiOutlineDownload className={styles.icon} />
            Download Resume
          </Button>
        </Link>
      </div>
      <ImageDisplay
        images={[
          {
            src: "https://i.imgur.com/bprDiQ8.png",
            alt: "Resume of Bobbielee Ghuman",
            height: 1000,
            width: 780,
          },
        ]}
      />
    </div>
  );
};

export default Resume;
