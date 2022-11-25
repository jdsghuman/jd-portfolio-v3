import Heading from "@components/Heading";
import styles from "./Skills.module.scss";

const Skills = () => {
  return (
    <section className={styles.section}>
      <div style={{ position: "relative" }}>
        <div
          id="skills"
          style={{ position: "absolute", top: "-50px", left: 0 }}
        ></div>
      </div>
      <Heading title="skills" />
      <div className={styles.container}>
        <div className={styles["container--skills"]}>
          <p className={styles.bold}>Applications</p>
          <p>Figma</p>
          <p>Marvel</p>
          <p>Sketch</p>
          <p>MIRO</p>
        </div>
        <div className={styles["container--skills"]}>
          <p className={styles.bold}>Skills</p>
          <p>UX Design</p>
          <p>UI Design</p>
          <p>Wireframing</p>
          <p>User research</p>
        </div>
        <div className={styles["container--skills"]}>
          <p className={styles.bold}>Interests</p>
          <p>My family</p>
          <p>Jiu jitsu</p>
          <p>Running</p>
          <p>Photography</p>
          <p>Cooking</p>
          <p>Coffee</p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
