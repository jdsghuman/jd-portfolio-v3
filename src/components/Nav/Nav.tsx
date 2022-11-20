import React, { useState, useContext } from "react";
import { useRouter } from "next/router";
import LinkDisplay from "@components/LinkDisplay";
import DrawerToggleButton from "@components/SideDrawer/DrawerToggle";
import ActiveLinkContext from "src/store/link-context";

import styles from "./Nav.module.scss";

const Nav = ({ drawerToggleClickHandler, sideDrawerOpen }) => {
  const router = useRouter();
  const activeLinkCtx = useContext(ActiveLinkContext);
  const [isExpanded, setIsExpanded] = useState(false);

  console.log("activeLink Context", activeLinkCtx.activeLink);
  const handleMobileMenu = (e: Event, linkLocation) => {
    e.preventDefault();
    setIsExpanded(!isExpanded);
    const element = document.getElementById(linkLocation);
    element.scrollIntoView({ block: "start", behavior: "smooth" });
    activeLinkCtx.updateActiveLink(linkLocation);
  };

  const goToHomePage = () => {
    router.pathname === "/" && window.location.reload();
  };

  return (
    <header className={styles.header}>
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
                  onClick={(e) => handleMobileMenu(e, "home")}
                  className={styles.nav__link}
                >
                  home
                </a>
              </LinkDisplay>
            </li>
            <li>
              <LinkDisplay link="/#projects">
                <a
                  onClick={(e) => handleMobileMenu(e, "projects")}
                  className={styles.nav__link}
                >
                  projects
                </a>
              </LinkDisplay>
            </li>
            <li>
              <LinkDisplay link="/#skills">
                <a
                  onClick={(e) => handleMobileMenu(e, "skills")}
                  className={styles.nav__link}
                >
                  skills
                </a>
              </LinkDisplay>
            </li>
            <li>
              <LinkDisplay link="/#about">
                <a
                  onClick={(e) => handleMobileMenu(e, "about")}
                  className={styles.nav__link}
                >
                  about
                </a>
              </LinkDisplay>
            </li>
            <li>
              <LinkDisplay link="/#contact">
                <a
                  onClick={(e) => handleMobileMenu(e, "contact")}
                  className={styles.nav__link}
                >
                  contact
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
