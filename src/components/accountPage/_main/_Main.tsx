import { Outlet } from "react-router-dom";
import styles from "./_Main.module.scss";

const _Main = () => {
  return (
    <div className={styles.main}>
      <Outlet />
    </div>
  );
};

export default _Main;
