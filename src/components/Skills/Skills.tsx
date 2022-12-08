import React, { useCallback, useContext, useRef } from "react";
import { AiOutlineTool, AiOutlineHeart } from "react-icons/ai";
import { BsPencil } from "react-icons/bs";
import Heading from "@components/Heading";
import ActiveLinkContext from "src/store/link-context";

import styles from "./Skills.module.scss";

const Skills = () => {
  const observer = useRef<any>();
  const activeLinkCtx = useContext(ActiveLinkContext);

  const callbackFunction = (entries: any) => {
    if (entries[0].isIntersecting) {
      activeLinkCtx.updateActiveLink("skills");
    }
  };

  const options = {
    root: null,
    rootMargin: "20px",
    threshold: 1.0,
  };

  const skillsRef = useCallback(
    async (node: any) => {
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver(callbackFunction, options);
      if (node) observer.current.observe(node);
    },
    [activeLinkCtx.activeLink]
  );

  return (
    <section ref={skillsRef} className={styles.section}>
      <div style={{ position: "relative" }}>
        <div
          id="skills"
          style={{ position: "absolute", top: "-50px", left: 0 }}
        ></div>
      </div>
      <Heading title="skills" />
      <div className={styles.container}>
        <div className={styles["container--skills"]}>
          <h4 className={styles.bold}>
            <AiOutlineTool className={styles.icon} />
            Applications
          </h4>
          <p>Figma</p>
          <p>Marvel</p>
          <p>Sketch</p>
          <p>MIRO</p>
        </div>
        <div className={styles["container--skills"]}>
          <h4 className={styles.bold}>
            <BsPencil className={styles.icon} />
            Skills
          </h4>
          <p>UX Design</p>
          <p>UI Design</p>
          <p>Wireframing</p>
          <p>User research</p>
        </div>
        <div className={styles["container--skills"]}>
          <h4 className={styles.bold}>
            <AiOutlineHeart className={styles.icon} />
            Interests
          </h4>
          <p>My family</p>
          <p>Jiu jitsu</p>
          <p>Running</p>
          <p>Photography</p>
          <p>Cooking</p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
