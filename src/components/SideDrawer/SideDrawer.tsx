import { useState, useContext } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import LinkDisplay from "@components/LinkDisplay";
import classNames from "classnames/bind";
import ActiveLinkContext from "src/store/link-context";

import styles from "./SideDrawer.module.scss";

const cx = classNames.bind(styles);

interface SideDrawerProps {
  show: boolean;
  click: () => void;
}

const SideDrawer = ({ click, show }: SideDrawerProps) => {
  const router = useRouter();
  const activeLinkCtx = useContext(ActiveLinkContext);

  const [isExpanded, setIsExpanded] = useState(false);

  const handleMobileMenu = (e: Event, linkLocation: string) => {
    e.preventDefault();
    setIsExpanded(!isExpanded);
    if (router.pathname !== "/" && linkLocation !== "resume") {
      router.push(`/#${linkLocation}`);
    }

    if (linkLocation === "resume") {
      router.push("/resume.pdf");
    }
    const element = document.getElementById(linkLocation);
    element?.scrollIntoView({ block: "start", behavior: "smooth" });
    activeLinkCtx.updateActiveLink(linkLocation);
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
          <a onClick={(e: any) => handleMobileMenu(e, "home")}>Home</a>
        </LinkDisplay>
      </div>
      <div
        className={cx("drawer__item", {
          "drawer__item--hide": !show,
        })}
      >
        <LinkDisplay link="/#projects">
          <a onClick={(e: any) => handleMobileMenu(e, "projects")}>Projects</a>
        </LinkDisplay>
      </div>
      <div
        className={cx("drawer__item", {
          "drawer__item--hide": !show,
        })}
      >
        <LinkDisplay link="/#skills">
          <a onClick={(e: any) => handleMobileMenu(e, "skills")}>Skills</a>
        </LinkDisplay>
      </div>
      <div
        className={cx("drawer__item", {
          "drawer__item--hide": !show,
        })}
      >
        <LinkDisplay link="/#about">
          <a onClick={(e: any) => handleMobileMenu(e, "about")}>About</a>
        </LinkDisplay>
      </div>
      <div
        className={cx("drawer__item", {
          "drawer__item--hide": !show,
        })}
      >
        <LinkDisplay link="/#contact">
          <a onClick={(e: any) => handleMobileMenu(e, "contact")}>Contact</a>
        </LinkDisplay>
      </div>
      <div
        className={cx("drawer__item", {
          "drawer__item--hide": !show,
        })}
      >
        <Link href="/resume.pdf" target="_blank" className={styles.nav__link}>
          resume
        </Link>
      </div>
    </nav>
  );
};

export default SideDrawer;
