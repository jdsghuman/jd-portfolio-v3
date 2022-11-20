import Heading from "@components/Heading";
import styles from "./About.module.scss";

const About = () => {
  return (
    <section className={styles.section} id="about">
      <Heading title="about" />
      <div className={styles.container}>
        <p className={styles.text}>
          Hi, I’m Bobbie. I am a UX designer with over 12 years experience
          working in healthcare and wellness promotion. I have seen many
          problems in the healthcare industry, many of which I strongly believe
          can be solved through technology and functional design. With my
          compassionate nature in caring for others, creative ability, and
          passion for research and design, I want to make that happen. My
          current position is at a healthcare start-up company where I work as a
          virtual nurse. I work alongside the PYM team. I am excited to expand
          my research and design-thinking skills, and to create functional
          products and services to make the world a better place, one happy user
          at a time
        </p>
        <p className={styles.text}>
          I am a UX designer with a background in the healthcare and wellness
          industry. I currently work at a startup healthcare company where I get
          to use my passion for helping others through a technology based
          platform. After years of working in healthcare and identifying
          problems within the system, I am ready to use my creative thinking
          skills and passion for research and design to solve real life issues
          (not just place a bandage on them).
        </p>
      </div>
    </section>
  );
};

export default About;
