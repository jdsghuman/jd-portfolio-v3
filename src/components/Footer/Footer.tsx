import styles from "./Footer.module.scss";
import { BsLinkedin } from "react-icons/bs";
import { TfiEmail } from "react-icons/tfi";

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.container}>
      <p className={styles.item}>Let's keep in touch</p>
      <BsLinkedin className={styles.item} color="#117EB8" size="38" />
      <TfiEmail className={styles.item} size="42" />
    </div>
  </footer>
);

export default Footer;
