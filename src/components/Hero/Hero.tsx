import Image from "next/image";
import profilePic from "../../../public/images/bobbie.png";
import styles from "./Hero.module.scss";

const Hero = () => {
  return (
    <section className={styles.section} id="home">
      <div className={styles.text}>
        Welcome, I am a UX/UI designer located in Katy, Texas. Fueled by coffee
        and green smoothies, motivated by passion and a love for all things
        design!
      </div>
      <div>
        <Image
          src={profilePic}
          alt="Picture of Bobbielee Ghuman"
          width={273}
          height={273}
          className={styles.image}
          placeholder="blur"
        />
      </div>
    </section>
  );
};

export default Hero;
