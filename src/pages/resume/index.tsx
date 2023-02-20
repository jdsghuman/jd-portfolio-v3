import Link from "next/link";
import ImageDisplay from "@components/ImageDisplay";
import { AiOutlineDownload } from "react-icons/ai";
import Button from "@components/Button";
import Meta from "@components/Meta";
import { MetaTags, PageType, RobotsContent } from "@components/Meta/types";

import styles from "./index.module.scss";

const Resume = () => {
  const postMetaTags: MetaTags = {
    canonical: "https://www.jdghuman.com",
    description: `Software Engineer | Front End Engineer`,
    image: "https://www.jdghuman.com/images/jd.png",
    robots: `${RobotsContent.follow},${RobotsContent.index}`,
    title: `JD Ghuman | Resume`,
    type: PageType.website,
  };

  return (
    <div className={styles.container}>
      <Meta tags={postMetaTags} />
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
            src: "",
            alt: "Resume of JD Ghuman",
            height: 1000,
            width: 780,
          },
        ]}
      />
    </div>
  );
};

export default Resume;
