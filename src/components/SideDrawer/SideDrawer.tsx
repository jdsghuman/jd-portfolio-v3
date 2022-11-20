import { useState } from "react";
import LinkDisplay from "@components/LinkDisplay";
import classNames from "classnames/bind";
import styles from "./SideDrawer.module.scss";

const cx = classNames.bind(styles);

const SideDrawer = ({ click, show }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleMobileMenu = (e: Event, linkLocation) => {
    e.preventDefault();
    setIsExpanded(!isExpanded);
    const element = document.getElementById(linkLocation);
    element.scrollIntoView({ block: "start", behavior: "smooth" });
  };

  return (
    // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
    <nav
      onClick={click}
      className={cx("drawer", {
        "drawer--open": show,
      })}
    >
      <div onClick={click} className={styles.drawer__header}>
        <LinkDisplay link="/">
          <span>bobbieleeghuman</span>
        </LinkDisplay>
      </div>
      <div
        className={cx("drawer__item", {
          "drawer__item--hide": !show,
        })}
      >
        <LinkDisplay link="/">
          <a onClick={(e) => handleMobileMenu(e, "home")}>Home</a>
        </LinkDisplay>
      </div>
      <div
        className={cx("drawer__item", {
          "drawer__item--hide": !show,
        })}
      >
        <LinkDisplay link="/#projects">
          <a onClick={(e) => handleMobileMenu(e, "projects")}>Projects</a>
        </LinkDisplay>
      </div>
      <div
        className={cx("drawer__item", {
          "drawer__item--hide": !show,
        })}
      >
        <LinkDisplay link="/#skills">
          <a onClick={(e) => handleMobileMenu(e, "skills")}>Skills</a>
        </LinkDisplay>
      </div>
      <div
        className={cx("drawer__item", {
          "drawer__item--hide": !show,
        })}
      >
        <LinkDisplay link="/#about">
          <a onClick={(e) => handleMobileMenu(e, "about")}>About</a>
        </LinkDisplay>
      </div>
      <div
        className={cx("drawer__item", {
          "drawer__item--hide": !show,
        })}
      >
        <LinkDisplay link="/#contact">
          <a onClick={(e) => handleMobileMenu(e, "contact")}>Contact</a>
        </LinkDisplay>
      </div>
    </nav>
  );
};

export default SideDrawer;
