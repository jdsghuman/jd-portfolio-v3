import Link from "next/link";
import classNames from "classnames/bind";
import { BsLinkedin } from "react-icons/bs";
import { TfiEmail } from "react-icons/tfi";

const cx = classNames.bind(styles);

import styles from "./Footer.module.scss";

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.container}>
      <p className={styles.item}>Let&apos;s keep in touch</p>
      <Link target="_blank" href="https://www.linkedin.com/in/bobbieleeghuman">
        <BsLinkedin className={cx("item", "item__icon")} color="#117EB8" />
      </Link>
      <Link target="_blank" href="mailto:hoffele.bobbieeleea@gmail.com">
        <TfiEmail className={cx("item", "item__icon")} />
      </Link>
    </div>
  </footer>
);

export default Footer;
