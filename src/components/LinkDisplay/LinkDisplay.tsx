import React, { useEffect } from "react";
import Link from "next/link";
import styles from "./LinkDisplay.module.scss";

interface LinkDisplayTypes {
  link: string;
  children: any;
}

const LinkDisplay = ({ link, children }: LinkDisplayTypes) => {
  let className = children?.props?.className || "";
  // if (router.pathname === link) {
  //   className = `${className} ${styles.link__selected}`;
  // }

  // useEffect(() => {
  //   if (router.pathname === link) {
  //     // eslint-disable-next-line react-hooks/exhaustive-deps
  //     className = `${className} ${styles.link__selected}`;
  //   }
  // }, []);

  return (
    <Link legacyBehavior href={link}>
      {React.cloneElement(children, { className: className || null })}
    </Link>
  );
};

export default LinkDisplay;
