import React, {
  useContext,
  useEffect,
  useRef,
  useState,
  useCallback,
} from "react";
import classNames from "classnames/bind";
import ActiveLinkContext from "src/store/link-context";
import ProjectHeader from "@components/Project/ProjectHeader";
import ProjectOverview from "@components/Project/ProjectOverview";
import Meta from "@components/Meta";
import { MetaTags, PageType, RobotsContent } from "@components/Meta/types";

import styles from "./index.module.scss";
import ScrollToTop from "@components/ScrollToTop";
const cx = classNames.bind(styles);

const Bobbieleelicious = () => {
  const [isTop, setIsTop] = useState(true);
  const observer = useRef<any>(null);

  const activeLinkCtx = useContext(ActiveLinkContext);

  const postMetaTags: MetaTags = {
    canonical: "https://www.jdghuman.com",
    description: `Software Engineer | Portfolio. HTX Market application`,
    image: "https://www.jdghuman.com/images/jd.png",
    robots: `${RobotsContent.follow},${RobotsContent.index}`,
    title: `JD Ghuman | Bobbieleelicious`,
    type: PageType.website,
  };

  const callbackFunction = (entries: any) => {
    const [entry] = entries;
    setIsTop(!(!entry.isIntersecting || entry.boundingClientRect.top > 600));
  };

  const topRef = useCallback(
    async (node: any) => {
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver(callbackFunction);
      if (node) observer.current.observe(node);
    },
    [isTop]
  );

  useEffect(() => {
    activeLinkCtx.updateActiveLink("other");
  }, []);

  return (
    <>
      <Meta tags={postMetaTags} />
      <ScrollToTop isTop={isTop} />
      <section className={styles.container}>
        <ProjectHeader
          title="-Bobbieleelicious-"
          image="https://i.imgur.com/M7uNgdT.png"
          topRef={topRef}
        />
      </section>
      <section className={cx("container", "container__nested")}>
        <ProjectOverview
          about="A headless Blog and recipe application built with Next.js. Optimized for performance, scalability, and maintenance."
          tags={["Nextjs", "Typescript", "CMS", "Contentful"]}
          demoUrl="https://www.bobbieleelicious.com/"
          githubLink="https://github.com/jdsghuman/bobbieleeliciousv2"
        />
      </section>
    </>
  );
};

export default Bobbieleelicious;
