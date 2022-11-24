import classNames from "classnames/bind";
import styles from "./DrawerToggleButton.module.scss";

const cx = classNames.bind(styles);

interface DrawerToggleButtonProps {
  show: boolean;
  click: () => void;
}

const DrawerToggleButton = ({ click, show }: DrawerToggleButtonProps) => (
  <button className={styles.toggle} onClick={click}>
    <div id={styles.nav__icon} className={cx({ open: show })} onClick={click}>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  </button>
);

export default DrawerToggleButton;
