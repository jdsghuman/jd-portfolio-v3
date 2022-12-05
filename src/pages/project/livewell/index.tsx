import React, { useContext, useEffect } from "react";
import classNames from "classnames/bind";
import ActiveLinkContext from "src/store/link-context";
import ProjectHeader from "@components/Project/ProjectHeader";
import ProjectOverview from "@components/Project/ProjectOverview";
import ProjectDesignProcess from "@components/Project/ProjectDesignProcess";
import ProjectOutline from "@components/Project/ProjectOutline";
import ProjectSteps from "@components/Project/ProjectSteps";
import ImageDisplay from "@components/ImageDisplay";

import styles from "./index.module.scss";

const cx = classNames.bind(styles);

const Livewell = () => {
  const activeLinkCtx = useContext(ActiveLinkContext);

  useEffect(() => {
    activeLinkCtx.updateActiveLink("other");
  }, []);

  return (
    <>
      <section className={styles.container}>
        <ProjectHeader
          title="-LIVE  WELL-"
          image="https://i.imgur.com/m7zuwve.png"
        />
      </section>
      <section className={cx("container", "container__nested")}>
        <ProjectOverview
          about="Live Well is a health and wellness responsive web app that provides users access to tools to improve their holistic well-being through lifestyle modifications, habit and health tracking (labs and vitals), and educational content. The app is designed for health conscious people that want to live a healthier lifestyle."
          role={["UX Designer"]}
          duration={["6 months"]}
          tools={[
            "Pencil and paper",
            "Figma",
            "Optimalsort",
            "Usabilityhub",
            "Google forms",
          ]}
        />
      </section>
      <section className={styles.container}>
        <ProjectDesignProcess
          items={[
            "Understand",
            "Observe",
            "Define",
            "Ideate",
            "Prototype",
            "Test",
          ]}
        />
      </section>
      <section className={styles.container}>
        <ProjectOutline
          title="01/Understand"
          description="In this stage of the Design Thinking Process, my goal is to understand the problem and empathize with the user."
        />
        <ProjectSteps
          title="Competitive Analysis"
          description={[
            "A competitive analysis was done to gather some insight, I analyzed 3 vocabulary apps currently on the market. My goal was to discover both strengths and weaknesses of the apps and come up with features to include and areas to be improved upon.",
          ]}
        />
        <div className={styles.flex__container}>
          <div className={styles.item}>
            <div className={styles.header}>
              <h4>Problem</h4>
              <h4>Statement</h4>
            </div>
          </div>
          <div className={styles.item}>
            <p>
              Health and wellness seeking individuals need a lifestyle tracking
              tool/app to track their progress (diet, exercise, sleep,
              meditation, etc.), provide motivation, and monitor trends in their
              vital signs and labs in relation to lifestyle modifications they
              have applied. We will know this to be true when users get a better
              understanding of how their lifestyle affects their health, as well
              as communicate better and efficiently with their providers.
            </p>
          </div>
        </div>
        <ProjectSteps
          title="Competitive Analysis"
          description={[
            "A competitive analysis was completed on 2 apps currently in the market, AccessElite and NOOM. My goal was to discover both strengths and weaknesses of the apps and come up with features to include and areas to be improved upon",
          ]}
        />
        <ImageDisplay
          images={[
            {
              src: "https://i.imgur.com/UJ5fKgD.png",
              alt: "",
              height: 373,
              width: 283,
            },
            {
              src: "https://i.imgur.com/ts649oL.png",
              alt: "",
              height: 373,
              width: 283,
            },
          ]}
        />
      </section>
      <section
        className={cx("container", "container__nested", "container__grey")}
      >
        <ProjectOutline
          title="02/Observe"
          description="During the observe stage of the Design Thinking Process, I performed research on potential users through in-person and online interviews and survey."
        />
        <ProjectSteps
          title="User Research"
          description={[
            "I conducted user surveys and interviews on potential users to gain a better understanding of the problem. As well, identify their goals and needs.  The survey was 13 questions long and completed by 21 participants via google forms. The Interview was a total of 12 questions, completed on 4 participants. The findings were then sorted onto stickynotes and grouped in themes and common insights. See below for main insights from each method.",
          ]}
        />
      </section>
    </>
  );
};

export default Livewell;
