import { Outlet } from "react-router-dom";
import styles from "./DevicesInfo.module.scss";
import Breadcrumbs from "@/components/ui/breadcrumb/Breadcrumb.tsx";

const DevicesInfo = () => {
  return (
    <div className={styles.devices}>
      <span className={styles.devices__title}>Девайсы</span>
      <Breadcrumbs />
      <Outlet />
    </div>
  );
};

export default DevicesInfo;
