import React, { useState, useContext, useEffect } from "react";
import { useRouter } from "next/router";
import classNames from "classnames/bind";
import LinkDisplay from "@components/LinkDisplay";
import DrawerToggleButton from "@components/SideDrawer/DrawerToggle";
import ActiveLinkContext from "src/store/link-context";
import IsTopContext from "src/store/isTop-context";

const cx = classNames.bind(styles);

import styles from "./Nav.module.scss";

interface NavProps {
  drawerToggleClickHandler: () => void;
  sideDrawerOpen: boolean;
}

const Nav = ({ drawerToggleClickHandler, sideDrawerOpen }: NavProps) => {
  const router = useRouter();
  const activeLinkCtx = useContext(ActiveLinkContext);
  const isTopCtx = useContext(IsTopContext);
  const [isExpanded, setIsExpanded] = useState(false);

  const handleMobileMenu = (e: Event, linkLocation: string) => {
    e.preventDefault();
    setIsExpanded(!isExpanded);
    if (router.pathname !== "/" && linkLocation !== "resume") {
      router.push(`/#${linkLocation}`);
    }

    if (linkLocation === "resume") {
      router.push("/resume");
      activeLinkCtx.updateActiveLink("resume");
    }
    const element = document.getElementById(linkLocation);
    element?.scrollIntoView({ block: "start", behavior: "smooth" });
    activeLinkCtx.updateActiveLink(linkLocation);
  };

  const goToHomePage = () => {
    router.pathname === "/";
    activeLinkCtx.updateActiveLink("home");
  };

  useEffect(() => {
    if (isTopCtx && router.pathname === "/") {
      activeLinkCtx.updateActiveLink("home");
    }
  }, [isTopCtx]);

  useEffect(() => {
    if (router.pathname.includes("/project")) {
      activeLinkCtx.updateActiveLink("other");
    }
  }, []);

  return (
    <header
      className={cx("header", {
        "header--top": !isTopCtx.isTop,
      })}
    >
      <div className={styles.header__container}>
        <div className={styles.logo}>
          <LinkDisplay link="/">
            <a onClick={goToHomePage}>bobbieleeghuman</a>
          </LinkDisplay>
        </div>
        <nav className={styles.nav__mobile}>
          {/* Hamburger menu for tablet/mobile */}
          <DrawerToggleButton
            show={sideDrawerOpen}
            click={drawerToggleClickHandler}
          />
        </nav>
        <nav className={styles.nav}>
          <ul className={styles.nav__items}>
            <li className={styles["nav__items--home"]}>
              <LinkDisplay link="/">
                <a
                  onClick={(e: any) => handleMobileMenu(e, "home")}
                  className={styles.nav__link}
                >
                  home
                </a>
              </LinkDisplay>
            </li>
            <li>
              <LinkDisplay link="/#projects">
                <a
                  onClick={(e: any) => handleMobileMenu(e, "projects")}
                  className={styles.nav__link}
                >
                  projects
                </a>
              </LinkDisplay>
            </li>
            <li>
              <LinkDisplay link="/#skills">
                <a
                  onClick={(e: any) => handleMobileMenu(e, "skills")}
                  className={styles.nav__link}
                >
                  skills
                </a>
              </LinkDisplay>
            </li>
            <li>
              <LinkDisplay link="/#about">
                <a
                  onClick={(e: any) => handleMobileMenu(e, "about")}
                  className={styles.nav__link}
                >
                  about
                </a>
              </LinkDisplay>
            </li>
            <li>
              <LinkDisplay link="/#contact">
                <a
                  onClick={(e: any) => handleMobileMenu(e, "contact")}
                  className={styles.nav__link}
                >
                  contact
                </a>
              </LinkDisplay>
            </li>
            <li>
              <LinkDisplay link="/resume">
                <a
                  onClick={(e: any) => handleMobileMenu(e, "resume")}
                  className={styles.nav__link}
                >
                  resume
                </a>
              </LinkDisplay>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Nav;
