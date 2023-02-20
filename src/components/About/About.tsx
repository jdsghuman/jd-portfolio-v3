import React, { useCallback, useContext, useRef } from "react";
import Heading from "@components/Heading";
import ActiveLinkContext from "src/store/link-context";

import styles from "./About.module.scss";

const About = () => {
  const observer = useRef<any>();
  const activeLinkCtx = useContext(ActiveLinkContext);

  const callbackFunction = (entries: any) => {
    if (entries[0].isIntersecting) {
      activeLinkCtx.updateActiveLink("about");
    }
  };

  const options = {
    root: null,
    rootMargin: "20px",
    threshold: 1.0,
  };

  const aboutRef = useCallback(
    async (node: any) => {
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver(callbackFunction, options);
      if (node) observer.current.observe(node);
    },
    [activeLinkCtx.activeLink]
  );

  return (
    <section ref={aboutRef} className={styles.section}>
      <div style={{ position: "relative" }}>
        <div
          id="about"
          style={{ position: "absolute", top: "-70px", left: 0 }}
        ></div>
      </div>
      <Heading title="about" />
      <div className={styles.container}>
        <p className={styles.text}>
          I am a Software Engineer who loves to code and build things. I enjoy
          turning concepts and designs into front end UI and solving complex
          problems with code. The JavaScript tech stack is my bread and butter,
          using React and Nextjs.
        </p>
        <p className={styles.text}>
          When I am not building web applications or coding, I can be found
          spending time with my family, building something in the garage, or
          drinking coffee…. I’m always drinking coffee!
        </p>
      </div>
    </section>
  );
};

export default About;
