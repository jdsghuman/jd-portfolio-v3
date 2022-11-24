import React, { useEffect, useContext } from "react";
import Link from "next/link";
import styles from "./LinkDisplay.module.scss";
import ActiveLinkContext from "src/store/link-context";

interface LinkDisplayTypes {
  link: string;
  children: any;
}

const LinkDisplay = ({ link, children }: LinkDisplayTypes) => {
  const activeLinkCtx = useContext(ActiveLinkContext);
  let className = children?.props?.className || "";
  // if (activeLinkCtx.activeLink === link) {
  if (link.includes(activeLinkCtx.activeLink)) {
    className = `${className} ${styles.link__selected}`;
  }

  if (link === "/" && activeLinkCtx.activeLink === "home") {
    className = `${className} ${styles.link__selected}`;
  }
  useEffect(() => {
    if (link.includes(activeLinkCtx.activeLink)) {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      className = `${className} ${styles.link__selected}`;
    }

    if (link === "/" && activeLinkCtx.activeLink === "home") {
      className = `${className} ${styles.link__selected}`;
    }
  }, [activeLinkCtx]);

  return (
    <Link legacyBehavior href={link}>
      {React.cloneElement(children, { className: className || null })}
    </Link>
  );
};

export default LinkDisplay;
