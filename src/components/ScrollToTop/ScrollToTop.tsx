import { useCallback, useEffect, useState } from "react";
import { HiOutlineArrowUp } from "react-icons/hi";
import classNames from "classnames/bind";

import styles from "./ScrollToTop.module.scss";

interface Props {
  isTop: boolean;
}

const cx = classNames.bind(styles);
const ScrollToTop = ({ isTop }: Props) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div className={styles.container}>
      <HiOutlineArrowUp
        className={cx("icon", {
          "icon--hide": isTop,
        })}
        onClick={scrollToTop}
      />
    </div>
  );
};

export default ScrollToTop;
