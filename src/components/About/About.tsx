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
          Hello! I&apos;m JD, a dedicated and results driven software engineer.
          My journey in the realm of software development has been fueled by a
          deep passion for crafting robust and efficient solutions to real-world
          challenges.
        </p>
        <p className={styles.text}>
          I enjoy turning concepts and designs into working solutions, and
          solving complex problems with code.
        </p>
        <p className={styles.text}>
          Throughout my career, I&apos;ve had the privilege of working on a
          diverse range of projects, ranging from McD, Disney, Target, and
          startups. These experiences have not only honed my technical skills
          but have also instilled in me the importance of collaboration,
          adaptability, and continuous learning.
        </p>
        <p className={styles.text}>
          I thrive in dynamic environments where innovation is embraced, and I
          am always eager to explore emerging technologies to stay at the
          forefront of the ever evolving tech landscape. Beyond coding, I enjoy
          spending time with my family, building something in the garage, jiu
          jitsu, and drinking coffee. I&apos;m always drinking coffee...
        </p>
      </div>
    </section>
  );
};

export default About;
