import React, { useCallback, useContext, useRef } from "react";
import Image from "next/image";
import profilePic from "../../../public/images/bobbie.png";
import styles from "./Hero.module.scss";
import IsTopContext from "src/store/isTop-context";
import ActiveLinkContext from "src/store/link-context";

const Hero = () => {
  const observer = useRef<any>();
  const isTopCtx = useContext(IsTopContext);
  const activeLinkCtx = useContext(ActiveLinkContext);

  const callbackFunction = (entries: any) => {
    if (!entries[0].isIntersecting) {
      isTopCtx.setIsTopFalse();
    } else {
      isTopCtx.resetIsTop();
      activeLinkCtx.updateActiveLink("home");
    }
  };

  const options = {
    root: null,
    rootMargin: "20px",
    threshold: 1.0,
  };

  const heroRef = useCallback(
    async (node: any) => {
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver(callbackFunction, options);
      if (node) observer.current.observe(node);
    },
    [isTopCtx.isTop]
  );

  return (
    <section ref={heroRef} className={styles.section}>
      <div style={{ position: "relative" }}>
        <div
          id="home"
          style={{ position: "absolute", top: "-1000px", left: 0 }}
        ></div>
      </div>
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
