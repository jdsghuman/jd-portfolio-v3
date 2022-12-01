import { useEffect, useContext } from "react";
import ActiveLinkContext from "src/store/link-context";
import styles from "./index.module.scss";

const Wip = () => {
  const activeLinkCtx = useContext(ActiveLinkContext);

  useEffect(() => {
    activeLinkCtx.updateActiveLink("wip");
  }, []);

  return (
    <div
      style={{
        display: "flex",
        minHeight: "80vh",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Montserrat, sans-serif",
      }}
    >
      <p className={styles.text}>Project coming soon...</p>
    </div>
  );
};

export default Wip;
