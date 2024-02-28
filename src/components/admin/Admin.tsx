import { Outlet } from "react-router-dom";
import styles from "./Admin.module.scss";

const Admin = () => {
  return (
    <div className={styles.admin}>
      <div className={styles.admin__conteiner}>
        <div className={styles.admin__wrapper}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Admin;
