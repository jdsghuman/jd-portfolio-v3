import styles from "./Backdrop.module.scss";

interface BackdropType {
  click: React.MouseEventHandler<HTMLButtonElement | HTMLDivElement>;
}

const Backdrop = ({ click }: BackdropType) => (
  <div className={styles.backdrop} onClick={click} />
);

export default Backdrop;
