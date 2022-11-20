import React, { useState } from "react";
import { useRouter } from "next/router";
import LinkDisplay from "@components/LinkDisplay";
import DrawerToggleButton from "@components/SideDrawer/DrawerToggle";

import styles from "./Nav.module.scss";

const Nav = ({ drawerToggleClickHandler, sideDrawerOpen }) => {
  const router = useRouter();
  const [isExpanded, setIsExpanded] = useState(false);

  const handleMobileMenu = () => {
    setIsExpanded(!isExpanded);
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
                <a onClick={handleMobileMenu} className={styles.nav__link}>
                  home
                </a>
              </LinkDisplay>
            </li>
            <li>
              <LinkDisplay link="/#projects">
                <a onClick={handleMobileMenu} className={styles.nav__link}>
                  projects
                </a>
              </LinkDisplay>
            </li>
            <li>
              <LinkDisplay link="/#skills">
                <a onClick={handleMobileMenu} className={styles.nav__link}>
                  skills
                </a>
              </LinkDisplay>
            </li>
            <li>
              <LinkDisplay link="/#about">
                <a onClick={handleMobileMenu} className={styles.nav__link}>
                  about
                </a>
              </LinkDisplay>
            </li>
            <li>
              <LinkDisplay link="/#contact">
                <a onClick={handleMobileMenu} className={styles.nav__link}>
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
