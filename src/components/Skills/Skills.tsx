import Heading from "@components/Heading";
import styles from "./Skills.module.scss";

const Skills = () => {
  return (
    <section className={styles.section} id="skills">
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
          <p>UI Desin</p>
          <p>Wireframing</p>
          <p>User reserach</p>
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
