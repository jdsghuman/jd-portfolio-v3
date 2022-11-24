import Link from "next/link";
import { BsLinkedin } from "react-icons/bs";
import { TfiEmail } from "react-icons/tfi";

import styles from "./Footer.module.scss";

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.container}>
      <p className={styles.item}>Let&apos;s keep in touch</p>
      <Link target="_blank" href="https://www.linkedin.com/in/bobbieleeghuman">
        <BsLinkedin className={styles.item} color="#117EB8" size="38" />
      </Link>
      <Link target="_blank" href="mailto:hoffele.bobbieeleea@gmail.com">
        <TfiEmail className={styles.item} size="42" />
      </Link>
    </div>
  </footer>
);

export default Footer;
