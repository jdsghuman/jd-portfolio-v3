import React, { useContext, useEffect } from "react";
import classNames from "classnames/bind";
import ActiveLinkContext from "src/store/link-context";
import ProjectHeader from "@components/Project/ProjectHeader";
import ProjectOverview from "@components/Project/ProjectOverview";
import ProjectDesignProcess from "@components/Project/ProjectDesignProcess";
import ProjectOutline from "@components/Project/ProjectOutline";
import ProjectSteps from "@components/Project/ProjectSteps";
import ImageDisplay from "@components/ImageDisplay";

import ProjectNotesList from "@components/Project/ProjectNotes/ProjectNotesList";
import ProjectNotes from "@components/Project/ProjectNotes";
import TextComponent from "@components/TextComponent";
import Meta from "@components/Meta";
import { MetaTags, PageType, RobotsContent } from "@components/Meta/types";

import styles from "./index.module.scss";
const cx = classNames.bind(styles);

const Livewell = () => {
  const activeLinkCtx = useContext(ActiveLinkContext);

  const postMetaTags: MetaTags = {
    canonical: "https://www.bobbieleeghuman.com",
    description: `UX Designer | Portfolio. Health and Wellness App`,
    image: "https://www.bobbieleeghuman.com/images/bobbie.png",
    robots: `${RobotsContent.follow},${RobotsContent.index}`,
    title: `bobbieleeghuman | Livewell`,
    type: PageType.website,
  };

  useEffect(() => {
    activeLinkCtx.updateActiveLink("other");
  }, []);

  return (
    <>
      <Meta tags={postMetaTags} />
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
        <TextComponent title="Key  Insights" />
        <ProjectNotesList>
          <>
            <ProjectNotes
              title="Survey Insights - 21 participants"
              list
              text={[
                "Most participants are between 35-44 years old",
                "Something important to note is that 71.4% of the participants in this group have NEVER been diagnosed with a chronic disease.",
                "Participants are actively working on lifestyle habits, strongly towards exercise and food related but also note that they still would like to improve their habits. Stress, sleep, and socialization are other areas many people are working on also. One thing I noted is how many people chose stress as a barrier in their lifestyle yet very few people attend therapy (I question if this is due to the stigma around it).",
                "Lack of time appears to be one of the biggest barriers in people’s lives when it comes to living a healthy lifestyle. Even more reason when an app may beneficial vs going to a facility.",
                "Nearly half the participants reported using a health and wellness app at some point. ",
                "Looking into participants goals, 20 of the 21 answered. Common goals were to lose weight, gain muscle, eat healthier, maintain health, less stress, and improve some person issues (foot, liver). These are goals related to health habits and reassuring that we are working towards a meaningful problem.",
                "According to the results: progress tracker, accountability partner, meal/exercise plans, a way to log/track information, and challenges were some of the more popular features participants find helpful and motivating in reaching goals.",
              ]}
            />
            <ProjectNotes
              title="Interview Insights -  4 participants"
              list
              text={[
                "Potential users are currently trying to work on improving their health (physical, mental, holistically) and are also struggling and wanting help with motivation, habit formation, and education.",
                "Potential users share a common view of what 'healthy lifestyle' means along with aligning goals to achieve.",
                "Want features such as motivation (quotes, tips, reminders), an app that covers lifestyle as a whole, social component, achievements and rewards, accountability, and calendar to track workouts.",
                "Users lack motivation and wasn't motivation from an app for help them reach their health goals.",
              ]}
            />
          </>
        </ProjectNotesList>
      </section>
      <section className={styles.container}>
        <ProjectOutline
          title="03/Point of View"
          description="The goal during this stage was to place myself into the shoes of the user. To do this I analyzed the information from the previous stage and sorted it into wants, goals, and needs. I then regrouped the categories and main insights. After doing this a general idea of our user population was identified and user personas were created."
        />
        <ProjectSteps
          title="Affinity Mapping"
          description={[
            "Affinity mapping was used to explore findings, create visual maps of relationships, themes, and insights, allowing us to truly understand our participants.",
          ]}
        />
      </section>
    </>
  );
};

export default Livewell;
