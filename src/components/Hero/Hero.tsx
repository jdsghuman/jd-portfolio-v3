import React, {
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import Image from "next/image";
import IsTopContext from "src/store/isTop-context";
import ActiveLinkContext from "src/store/link-context";

import styles from "./Hero.module.scss";

const Hero = () => {
  const observer = useRef<any>();
  const isTopCtx = useContext(IsTopContext);
  const activeLinkCtx = useContext(ActiveLinkContext);
  const [currentInterval, setCurrentInterval] = useState(0);

  const images = [
    "https://i.imgur.com/mYoNRcH.jpg",
    "https://i.imgur.com/1S9TIjx.jpg",
    "https://i.imgur.com/eNJ0rlQ.jpg",
  ];

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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentInterval(currentInterval < 2 ? currentInterval + 1 : 0);
    }, 3000);
    return () => clearInterval(interval);
  });

  return (
    <section ref={heroRef} className={styles.section}>
      <div style={{ position: "relative" }}>
        <div
          id="home"
          style={{ position: "absolute", top: "-1000px", left: 0 }}
        ></div>
      </div>
      <div>
        <h1 className={styles.text}>
          Hello, I am a software engineer that builds web applications for
          desktop and mobile, who turns coffee into code.
        </h1>
      </div>
      <div>
        <Image
          src={images[currentInterval]}
          alt="Picture of JD Ghuman"
          width={273}
          height={273}
          className={styles.image}
        />
      </div>
    </section>
  );
};

export default Hero;
