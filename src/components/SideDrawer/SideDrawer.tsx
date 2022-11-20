/* eslint-disable @next/next/no-img-element */
import LinkDisplay from "@components/LinkDisplay";
import classNames from "classnames/bind";
import styles from "./SideDrawer.module.scss";

const cx = classNames.bind(styles);

const SideDrawer = ({ click, show }) => {
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
          <a>Home</a>
        </LinkDisplay>
      </div>
      <div
        className={cx("drawer__item", {
          "drawer__item--hide": !show,
        })}
      >
        <LinkDisplay link="/#projects">
          <a>Projects</a>
        </LinkDisplay>
      </div>
      <div
        className={cx("drawer__item", {
          "drawer__item--hide": !show,
        })}
      >
        <LinkDisplay link="/#skills">
          <a>Skills</a>
        </LinkDisplay>
      </div>
      <div
        className={cx("drawer__item", {
          "drawer__item--hide": !show,
        })}
      >
        <LinkDisplay link="/#about">
          <a>About</a>
        </LinkDisplay>
      </div>
      <div
        className={cx("drawer__item", {
          "drawer__item--hide": !show,
        })}
      >
        <LinkDisplay link="/#contact">
          <a>Contact</a>
        </LinkDisplay>
      </div>
    </nav>
  );
};

export default SideDrawer;
