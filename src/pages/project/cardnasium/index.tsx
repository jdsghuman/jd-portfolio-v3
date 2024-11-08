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

const HtxMarket = () => {
  const [isTop, setIsTop] = useState(true);
  const observer = useRef<any>(null);

  const activeLinkCtx = useContext(ActiveLinkContext);

  const postMetaTags: MetaTags = {
    canonical: "https://www.jdghuman.com",
    description: `Software Engineer | Portfolio. HTX Market application`,
    image: "https://www.jdghuman.com/images/jd.png",
    robots: `${RobotsContent.follow},${RobotsContent.index}`,
    title: `JD Ghuman | HTX Market`,
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
          title="-Cardnasium-"
          image="https://i.imgur.com/Ohetgmd.png"
          topRef={topRef}
        />
      </section>
      <section className={cx("container", "container__nested")}>
        <ProjectOverview
          about="Cardnasium is a custom greeting card shop that allows users to create and send personalized cards to their loved ones. Users can choose from a variety of card designs, add custom messages, and send them to their friends and family."
          tags={["Nextjs", "Typescript", "Prisma", "TailwindCSS", "Stripe"]}
          demoUrl="https://cardnasium.com"
          githubLink=""
        />
      </section>
    </>
  );
};

export default HtxMarket;
